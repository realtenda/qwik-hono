import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import { isDev } from "@builder.io/qwik/build";
// import { injectSpeedInsights } from "@vercel/speed-insights";
// import { inject } from "@vercel/analytics";

import "./global.css";
// import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  // useVisibleTask$(
  //   () => {
  //     injectSpeedInsights();
  //     inject();
  //   },
  //   { strategy: "document-idle" }
  // );
  // const loc = useLocation();
  // const params = loc;
  // console.log("loc");

  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return <V1 />;
});

const V1 = component$(() => {
  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        {!isDev && (
          <link
            rel="manifest"
            href={`${import.meta.env.BASE_URL}manifest.json`}
          />
        )}
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        {!isDev && <ServiceWorkerRegister />}
      </body>
    </QwikCityProvider>
  );
});
