import React, { Component } from 'react'
import { FlatList } from 'react-native'
import Styles from './styles'
import PromotionCard from './../PromotionCard'
import axios from 'axios'
import { connect } from 'react-redux'
import store from './../../store/'
import { 
  addPromotion, 
  pageIncrement, 
  pageBackToStart, 
  clearPromotions, 
  setRefreshTrue, 
  setRefreshFalse 
} from './../../actions'

class PromotionsList extends Component {
  constructor(props) {
    super(props)
  }
  
  request = () => {
    const page = store.getState().promotionPage.page
    axios.get('https://irias.com.br/tutorials/react-native/api.php?page=' + page).then(response => { 
      response.data.forEach(element => {
        this.props.dispatch(setRefreshFalse)
        this.props.dispatch(addPromotion(element))
      })
    })
  }

  componentDidMount() {
   this.request()
  }

  loadNewPage() {
    this.props.dispatch(pageIncrement)
    this.request()
  }

  refresh() {
    this.props.dispatch(setRefreshTrue)
    this.props.dispatch(clearPromotions)
    this.props.dispatch(pageBackToStart)
    this.request()
  }

  render() {
    return(
      <FlatList 
        style={ Styles.promotionsList }
        data={ this.props.promotions.data }
        renderItem={ ({ item }) => (
          <PromotionCard data={ item } />
        )}
        keyExtractor={ item => item.id }
        onEndReachedThreshold={ 0.01 }
        onEndReached={ () => {
          this.loadNewPage()
        }}
        refreshing={ this.props.promotions.refreshing }
        onRefresh={ () => {
          this.refresh()
        }}
      />
    )
  }
}

const mapStateToProps = (state) => {
  const  promotions = { 
    data: state.promotions,
    refreshing: state.promotionsRefresh.refreshing
  }
  return { promotions }
}

export default connect(mapStateToProps)(PromotionsList)
