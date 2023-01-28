import { useState } from "react";
import { FormattedMessage } from "react-intl";

const CounterText = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <FormattedMessage
        id="body.message2"
        defaultMessage="Message 2 goes here"
        values={{
          b: (chunks) => <i>{chunks}</i>,
          count,
        }}
      />
      <button onClick={() => alert("aaa")}>aaa</button>
      <button
        onClick={() => setCount((count) => (count > 1 ? count - 1 : count))}
      >
        -
      </button>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
    </>
  );
};

export const Body = () => {
  return (
    <>
      {" "}
      <div>
        <FormattedMessage
          id="body.message1"
          defaultMessage="Message 1 goes here"
          values={{
            b: (chunks) => <i>{chunks}</i>,
            message: "This is the formatted message.",
          }}
        />
      </div>
      <div>
        <CounterText />
      </div>
    </>
  );
};
