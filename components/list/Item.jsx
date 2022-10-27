import { View, Text, StyleSheet, Image } from 'react-native'

const Item = ({productName, productQuantity}) => {
  return (
    
    <View style={styles.item} >

    <Image style={styles.productImage} source={require('../../assets/grocery.png')}/>

        <View style={{fontSize:18}}>

            <Text>{productName}</Text>
            <Text>{productQuantity}</Text>

        </View>

    </View> 

  )
}

const styles = StyleSheet.create({
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: 'black',
      borderWidth: 2,
      borderRadius: 12,
      padding : 5,
      paddingHorizontal: 30,
      backgroundColor: '#77B80A',
      marginBottom: 15
    },
    productImage: {
      width: 60,
      height: 60,
      marginRight: 75
    },
    productDates: {
      fontSize: 18,
    }
})

export default Item