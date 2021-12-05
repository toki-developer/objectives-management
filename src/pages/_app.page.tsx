import "/src/styles/globals.css";

import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { apolloClient } from "src/apollo/apolloClient";
import { userVar } from "src/apollo/cache";
import { supabase } from "src/utils/libs/initSupabase";

const App = (props: AppProps) => {
  useEffect(() => {
    supabase.auth.onAuthStateChange((_, session) => {
      userVar(session?.access_token);
    });
    document.body.classList.add("bg-themeGray-bg", "text-white");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ApolloProvider client={apolloClient}>
      <props.Component {...props.pageProps} />
      <Toaster
        toastOptions={{
          className: "!rounded-full !py-1 !px-2 !text-sm font-bold",
        }}
      />
    </ApolloProvider>
  );
};

export default App;
