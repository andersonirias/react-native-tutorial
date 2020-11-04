import React, { Component } from 'react'
import { FlatList } from 'react-native'
import Styles from './styles'
import PromotionCard from './../PromotionCard'

class PromotionsList extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      data: [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'Bota Impermeável Bull Terrier Alpina Dry – Masculina',
          price: 'De: R$399,99 - Por: R$299,99',
          imageUri: 'https://irias.com.br/blog/wp-content/uploads/2020/11/bota-impermeavel-bull-terrier-alpina-dry-masculina-img-150x150-1.jpg',
          linkUrl: 'https://www.centauro.com.br/bota-bull-terrier-alpina-dry-masculina-855804.html'
        }
      ] 
    }
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
