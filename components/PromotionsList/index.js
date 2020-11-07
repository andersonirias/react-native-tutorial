import React, { Component } from 'react'
import { FlatList } from 'react-native'
import Styles from './styles'
import PromotionCard from './../PromotionCard'
import axios from 'axios'

class PromotionsList extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    axios.get('https://irias.com.br/tutorials/react-native/api.php').then(response => { 
      this.setState({ data: response.data })
    }).catch(() => { 
      console.log('Error retrieving data')
    })
  }

  render() {
    return(
      <FlatList 
        style={ Styles.promotionsList }
        data={ this.state.data }
        renderItem={ ({ item }) => (
          <PromotionCard data={ item } />
        )}
        keyExtractor={ item => item.id } 
      />
    )
  }
}

export default PromotionsList
