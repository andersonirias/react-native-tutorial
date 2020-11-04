import React from 'react'
import {
  SafeAreaView,
  StatusBar,
} from 'react-native'

import Header from './components/Header'
import PromotionsList from './components/PromotionsList'

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <Header />
        <PromotionsList />
      </SafeAreaView>
    </>
  );
};

export default App;

