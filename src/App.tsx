import { IntlProvider } from "react-intl";
import { Title } from "./Title";
import { Body } from "./Body";
import translations from "./i18n/translations";

const locale = "en-US";
const defaultLocale = "en-US";

export default function App() {
  return (
    <IntlProvider
      locale={locale}
      defaultLocale={defaultLocale}
      messages={translations[locale]}
    >
      <Title />
      <Body />
    </IntlProvider>
  );
}
