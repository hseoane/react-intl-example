import "./styles.css";
import { IntlProvider } from "react-intl";
import { Title } from "./Title";
import { Body } from "./Body";

export default function App() {
  return (
    <IntlProvider locale="en" defaultLocale="en">
      <Title />
      <Body />
    </IntlProvider>
  );
}
