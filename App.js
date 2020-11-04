import React from 'react'
import {
  SafeAreaView,
  StatusBar,
} from 'react-native'

import Header from './components/Header'

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <Header />
      </SafeAreaView>
    </>
  );
};

export default App;

