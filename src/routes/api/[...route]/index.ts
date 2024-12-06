import type { RequestHandler } from "@builder.io/qwik-city";
// import { Hono } from "hono";
// import { handle } from "hono/vercel";
// import { Hono } from "hono";

// export const runtime = "edge";

// const app = new Hono().basePath("/api");

// app.get("/hello", (c) => {
//   console.log("pppppppppppp");
//   return c.json({
//     message: "Hello Next.js!",
//   });
// });
// const tx = () => {
// };
// tx();

export const onGet: RequestHandler = ({ json }) => {
  console.log("kkkkddskaj");
  json(200, { message: "Hello dsfsdfdfsdf" });
};

// export default app;
