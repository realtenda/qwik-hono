// // // import { Hono } from "hono";
// // // import { handle } from "hono/vercel";

// import { RequestHandler } from "@builder.io/qwik-city";

// // // export const runtime = "edge";

// // // const app = new Hono().basePath("/api");

// // // app.get("/hello", (c) => {
// // //   return c.json({
// // //     message: "Hello Next.js!",
// // //   });
// // // });

// // import type { RequestHandler } from "@builder.io/qwik-city";
// // import sharp from "sharp";

// // const pictureFetcher = async () => {
// //   const picture = await fetch("https://picsum.photos/200/300");
// //   // console.log(picture);

// //   return picture;
// // };

// // const fun = async () => {
// //   const img = await (await pictureFetcher()).arrayBuffer();

// //   const imgBuffer = sharp(img).rotate(40).toBuffer();

// //   // .then(info => { ... })
// //   // .catch(err => { ... });

// //   // console.log("sdfsdfsd")

// //   return await imgBuffer;
// // };

// export const onGet: RequestHandler = async ({ send }) => {
//   console.log("now onGet");
//   send(200, await fun());
//   // json(200, { message: "Hello World" });
// };
// import { Hono } from "hono";

// // export const runtime = "edge";

// const app = new Hono().basePath("/api");

// app.get("/hello", (c) => {
//   return c.json({
//     message: "Hello Next.js!",
//   });
// });

// export default app;
