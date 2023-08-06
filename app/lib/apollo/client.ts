import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

let client: ApolloClient<any> | null = null;

export const getClient = (token: string) => {
  // create a new client if there's no existing one
  // or if we are running on the server.
  if (!client || typeof window === "undefined") {
    client = new ApolloClient({
      link: new HttpLink({
        uri: process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT ,
        headers: {
          Authorization: `Bearer ${token}`,
          //'FO2sYjxQlDWD0Zwqk5FCq2qQx8dAwR3KB9KhyrV1BCZhuUzHvC2dHSwclfQuepwd',
        },
      }),
      cache: new InMemoryCache(),
    });
  }

  return client;
};