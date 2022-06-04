import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Text>App</Text>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
