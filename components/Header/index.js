import React, { Component } from 'react'
import { View, Image } from 'react-native'
import Styles from './styles'
import PromotionFormSearch from './../PromotionFormSearch'

const Logo = require('./../../assets/logo.png')

class Header extends Component {
  render() {
    return(
      <View style={ Styles.sectionHeader }>
        <Image source={ Logo } style={ Styles.logoIcon } />
        <PromotionFormSearch />
      </View>
    )
  }
}

export default Header
