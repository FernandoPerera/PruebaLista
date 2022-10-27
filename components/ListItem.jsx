import { View, Text, StyleSheet } from 'react-native'

const ListItem = ({productName, productQuantity}) => {
  return (
    
        <View>

            <Text style={{fontSize: 18}}>{productName}</Text>
            <Text style={{fontSize: 18}}>{productQuantity}</Text>

        </View>

  )
}

export default ListItem