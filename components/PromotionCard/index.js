import React, { Component } from 'react'
import { View, Text, TouchableHighlight, Image, Linking } from 'react-native'
import Styles from './styles'

class PromotionCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View style={ Styles.centeredView }>
        <View style={ Styles.cardView }>
          <Image style={ Styles.promotionImage } source={ {uri: this.props.data.imageUri} }  />
          <View style={ Styles.descriptionText }>
            <Text style={ Styles.titleText }>{ this.props.data.title }</Text>
            <Text style={ Styles.priceText }>{ this.props.data.price }</Text>
            <TouchableHighlight
                style={ Styles.linkButton }
                onPress={ async () => {
                  const supported = await Linking.canOpenURL(this.props.data.linkUrl);
                  if (supported) {
                    await Linking.openURL(this.props.data.linkUrl);
                  }
                }}
              >
              <Text style={ Styles.textLinkButton }>Ir para loja</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
}

export default PromotionCard
