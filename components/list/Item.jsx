import { View, Text, StyleSheet, Image, Pressable } from 'react-native'

const Item = ({ productName, productQuantity, productType, productBought }) => {

  const imageType = (type) => {

    console.log('Tipo de alimento', type)
    
    switch (type) {

      case 'Fruit':
        return <Image style={styles.productImage} source={require('../../assets/apple.png')}/>
      case 'Vegetable':
        return <Image style={styles.productImage} source={require('../../assets/cart.png')}/>
      case 'Backery':
        return <Image style={styles.productImage} source={require('../../assets/croissant.png')}/>
      case 'Fish':
        return <Image style={styles.productImage} source={require('../../assets/fish.png')}/>
      case 'Meat':
        return <Image style={styles.productImage} source={require('../../assets/meat.png')}/>
    }

  }

  const purchasedProduct = () => {
    productBought = true
  }
  return (
    
    <View style={styles.item} >

    {
      imageType(productType)
    }

        <Pressable onPress={purchasedProduct}>

          <View style={styles.productDates}>

            <Text>Producto: {productName}</Text>
            <Text>Cantidad: {productQuantity}</Text>
            {
              productBought == true
                ? <Text style={{color: '#77B80A'}}>Comprado</Text>
                : null
            }

          </View>

        </Pressable>

    </View> 

  )
}

const styles = StyleSheet.create({
    item: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderColor: 'black',
      borderWidth: 2,
      borderRadius: 12,
      padding : 6,
      paddingHorizontal: 30,
      backgroundColor: '#77B80A',
      marginBottom: 15
    },
    productImage: {
      position: 'relative',
      width: 60,
      height: 60,
      marginRight: 75
    },
    productDates: {
      alignItems: 'center',
      fontSize: 18,
      borderRadius: 12,
      backgroundColor: '#E8B775',
      padding: 7,
      marginHorizontal: 10
    }
})

export default Item