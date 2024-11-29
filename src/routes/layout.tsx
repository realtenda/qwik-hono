import type { Signal } from "@builder.io/qwik";
import {
  component$,
  createContextId,
  Slot,
  useContextProvider,
  useSignal,
  useTask$,
} from "@builder.io/qwik";
import { routeLoader$, type RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const useServerData = routeLoader$((c) => {
  const setLanguage = c.url.searchParams.get("h");
  // console.log(setLanguage);
  return setLanguage;
});

export const LanguageProvider = createContextId<Signal<string>>(
  "site.language-context"
);
export default component$(() => {
  const serverData = useServerData();
  const languageData = serverData.value;
  console.log(languageData);

  const language = useSignal("en");

  useTask$(async () => {
    // A task without `track` any state effectively behaves like a `on mount` hook.
    console.log("Runs once when the component mounts in the server OR client.");
    language.value = languageData as string;
  });

  useContextProvider(LanguageProvider, language);

  return <Slot />;
});
