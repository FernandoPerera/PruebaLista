import { View, Text, StyleSheet, Image } from 'react-native'

const Item = ({ productName, productQuantity, productType }) => {

  const imageType = (type) => {

    console.log('Tipo de alimento', type)
    
    switch (type) {

      case 'Fruit':
        return <Image style={styles.productImage} source={require('../../assets/apple.png')}/>
        break;
      case 'Vegetable':
        return <Image style={styles.productImage} source={require('../../assets/cart.png')}/>
        break;
      case 'Backery':
        return <Image style={styles.productImage} source={require('../../assets/croissant.png')}/>
      break;
      case 'Fish':
        return <Image style={styles.productImage} source={require('../../assets/fish.png')}/>
      break;
      case 'Meat':
        return <Image style={styles.productImage} source={require('../../assets/meat.png')}/>
        break;
    }

  }
  return (
    
    <View style={styles.item} >

    {
      imageType(productType)
    }

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