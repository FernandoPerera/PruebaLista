import { View } from 'react-native'
import Item from './Item'

const ListItem = ({ productList }) => {
  
        {console.log('List Item -> ', productList)}
  return (
          
    <View>
      {
        productList.map( (product) => (
          <Item 
            key={product.id}
            id={product.id} 
            productName={product.name}
            productQuantity={product.quantity}
            productType={product.type}/>
          ))
      }
    </View>
    )
}

export default ListItem