// import { Hono } from "hono";
// import { handle } from "hono/vercel";

// export const runtime = "edge";

// const app = new Hono().basePath("/api");

// app.get("/hello", (c) => {
//   return c.json({
//     message: "Hello Next.js!",
//   });
// });

import type { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = ({ json }) => {
  console.log("now onGet");
  json(200, { message: "Hello World" });
};
