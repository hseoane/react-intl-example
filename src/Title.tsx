import { FormattedMessage } from "react-intl";

export const Title = () => {
  return (
    <div>
      <FormattedMessage
        id="title.welcome"
        values={{
          name: "Bobby",
        }}
        defaultMessage="Welcome, {name}!"
      />
    </div>
  );
};
