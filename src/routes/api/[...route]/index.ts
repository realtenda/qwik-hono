// import { handle } from "hono/vercel";
// import { Hono } from "hono";

// export const runtime = "edge";

// const app = new Hono().basePath("/api");

// app.get("/hello", (c) => {
//   return c.json({
//     message: "Hello Next.js!",
//   });
// });

import type { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = ({ json }) => {
  json(200, { message: "Hello dsfsdfdfsdf" });
};
