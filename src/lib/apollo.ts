import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/clgcjbcdl4a5o01t3dllcctox/master',
  cache: new InMemoryCache()
})