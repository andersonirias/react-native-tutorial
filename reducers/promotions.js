const promotions = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PROMOTION':
      return [
        ...state,
        {
          id: action.data.id,
          title: action.data.title,
          price: action.data.price,
          imageUri: action.data.imageUri,
          linkUrl: action.data.linkUrl
        }
      ]
    case 'CLEAR_PROMOTIONS':
      return state = []
    default:
      return state
  }
}

export default promotions
