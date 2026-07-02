import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="10" fill="#10253f"/><path d="M10 37c9-7 16-7 25-1 7 5 12 5 19 0v11c-7 5-14 5-21 0-8-6-15-6-23 1z" fill="#4fb6a8"/><path d="M13 20h38v7H13z" fill="#e0b15c"/><path d="M13 30h28v5H13z" fill="#f6f1e8"/></svg>`;
  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml"
    }
  });
};

