import { View } from 'react-native'
import Item from './Item'

const ListItem = ({ removeProductHandler, productList }) => {
  
        {console.log('List Item -> ', productList)}
  return (
          
    <View>
      {
        productList.map( (product) => (
          <Item 
            key={product.id}
            id={product.id} 
            productName={product.name}
            productQuantity={product.quantity}/>
          ))
      }
    </View>
    )
}

export default ListItem