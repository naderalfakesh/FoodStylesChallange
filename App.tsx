import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Provider } from 'react-redux';
import { client } from './src/services/graphql';
import { store } from './src/store';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <SafeAreaView>
          <Text>App</Text>
        </SafeAreaView>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
