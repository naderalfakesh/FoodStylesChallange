import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ACCESS_TOKEN, BASE_URL } from './constants';

const client = new ApolloClient({
  uri: BASE_URL,
  cache: new InMemoryCache(),
  headers: { authorization: `Bearer ${ACCESS_TOKEN}` },
});

export default client;
