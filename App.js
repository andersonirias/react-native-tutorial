import React from 'react'
import { Provider } from 'react-redux'
import {
  SafeAreaView,
  StatusBar,
} from 'react-native'
import Header from './components/Header'
import PromotionsList from './components/PromotionsList'
import store from './store/'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <StatusBar />
        <SafeAreaView>
          <Header />
          <PromotionsList />
        </SafeAreaView>
      </Provider>
    )
  }
}

export default App
