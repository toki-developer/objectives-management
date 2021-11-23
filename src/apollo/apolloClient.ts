import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { supabase } from "src/utils/libs/initSupabase";

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
});

const authLink = setContext((_, { headers }) => {
  const token = supabase.auth.session()?.access_token;
  return token ? { headers: { ...headers, authorization: `Bearer ${token}` } } : { headers };
});

export const apolloClient = new ApolloClient({
  link: typeof window === "undefined" ? httpLink : authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
