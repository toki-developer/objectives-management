import "/src/styles/globals.css";

import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { apolloClient } from "src/apollo/apolloClient";

const App = (props: AppProps) => {
  useEffect(() => {
    document.body.classList.add("bg-gray-900", "text-white");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ApolloProvider client={apolloClient}>
      <props.Component {...props.pageProps} />
    </ApolloProvider>
  );
};

export default App;
