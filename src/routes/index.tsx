import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { LanguageSwitcher } from "../components/router-head/language-switcher/LanguageSwitcher";

export default component$(() => {
  // const language = useContext(LanguageProvider).value;

  // console.log("language that is set is " + language);

  // const k = useLocation();
  // console.log(k);
  // return <>{language === "zw" ? <ShonaVersion /> : <EngishVersion />}</>;
  return (
    <LanguageSwitcher
      // language={language}
      shVersion={<ShonaVersion />}
      enVersion={<EnglishVersion />}
    />
  );
});

const ShonaVersion = component$(() => {
  return <div>Shona Version</div>;
});

const EnglishVersion = component$(() => {
  return <div>English Version</div>;
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
