import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourcesPath = path.join(root, "src/data/sources.json");
const sources = JSON.parse(fs.readFileSync(sourcesPath, "utf8"));

const required = [
  "id",
  "title",
  "authors",
  "year",
  "sourceType",
  "issuer",
  "claimants",
  "topics",
  "jurisdiction",
  "url",
  "summary",
  "primarySource",
  "accessed"
];

const errors = [];
const ids = new Set();

if (!Array.isArray(sources)) {
  errors.push("sources.json must contain an array.");
} else {
  if (sources.length < 60) {
    errors.push(`Expected at least 60 source records, found ${sources.length}.`);
  }

  for (const [index, record] of sources.entries()) {
    for (const field of required) {
      if (!(field in record)) {
        errors.push(`Record ${index + 1} is missing ${field}.`);
      }
    }

    if (record.id) {
      if (ids.has(record.id)) {
        errors.push(`Duplicate source id: ${record.id}`);
      }
      ids.add(record.id);
    }

    for (const field of ["authors", "claimants", "topics"]) {
      if (!Array.isArray(record[field]) || record[field].length === 0) {
        errors.push(`${record.id ?? `Record ${index + 1}`} requires a non-empty ${field} array.`);
      }
    }

    try {
      new URL(record.url);
    } catch {
      errors.push(`${record.id ?? `Record ${index + 1}`} has an invalid url.`);
    }

    if (record.accessed !== "2026-07-02") {
      errors.push(`${record.id ?? `Record ${index + 1}`} must use accessed date 2026-07-02.`);
    }
  }
}

const expectedRoutes = [
  "index.astro",
  "introduction.astro",
  "issues.astro",
  "law.astro",
  "arbitration.astro",
  "claimants.astro",
  "china.astro",
  "literature.astro",
  "reports.astro",
  "library.astro"
];

for (const route of expectedRoutes) {
  const routePath = path.join(root, "src/pages", route);
  if (!fs.existsSync(routePath)) {
    errors.push(`Missing page route: ${route}`);
  }
}

if (errors.length > 0) {
  console.error(errors.map((error) => `- ${error}`).join("\n"));
  process.exit(1);
}

console.log(`Validated ${sources.length} source records and ${expectedRoutes.length} routes.`);
