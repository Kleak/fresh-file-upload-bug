import { HandlerContext } from "$fresh/server.ts";

export const handler = async (
    _req: Request,
    _ctx: HandlerContext,
  ): Promise<Response> => {
    return new Response("Audiobooks !");
  };