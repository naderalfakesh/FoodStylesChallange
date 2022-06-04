import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { CardListScreen } from './src/screens';
import { client } from './src/services/graphql';
import { store } from './src/store';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <StatusBar barStyle="light-content" translucent />
        {/* In real application screens will be inside the navigation container */}
        <CardListScreen />
      </Provider>
    </ApolloProvider>
  );
};

export default App;
