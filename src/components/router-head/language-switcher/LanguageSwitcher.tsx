import { component$, useContext } from "@builder.io/qwik";
// import { LanguageSwitcherProps } from "../../../routes";
import { LanguageProvider } from "../../../routes/layout";

export interface LanguageSwitcherProps {
  // language?: string;
  shVersion?: any;
  enVersion?: any;
}

export const LanguageSwitcher = component$<LanguageSwitcherProps>((props) => {
  const language = useContext(LanguageProvider).value;

  console.log("language that is set is " + language);

  // console.log(props.language);
  // return <div>Language Switcher</div>;
  return <>{language === "zw" ? props.shVersion : props.enVersion}</>;
});
