import { HandlerContext } from "$fresh/server.ts";

export const handler = (
  req: Request,
  _ctx: HandlerContext,
): Response => {
  if (req.method === "POST") {
    return new Response("", {
      headers: { "location": "/upload" },
      status: 302,
    });
  }
  return new Response("Audiobooks !");
};
