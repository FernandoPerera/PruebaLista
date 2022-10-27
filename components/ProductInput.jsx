import { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native';

const ProductInput = ({ onProductAdd }) => {

  const [ product, setProduct ] = useState({
    name:'',
    quantity: 0,
    bought: false
  })

  const changeTextHandler= (value) => {
    setProduct(
      {name: value, quantity: product.quantity} 
    )
  }

  const changeQuantityHandler= (value) => {
    setProduct(
      {name: product.name, quantity: value}
    )
  }

  const addProductHandler = () => {
      onProductAdd(product.name, product.quantity)
    
      setProduct('')
  } 

  return (
    <View style={ styles.inputContainer }>

      <View style={ {flexDirection:'row'} }>

        <TextInput style={ styles.productName }
            placeholder='Introduzca un producto'
            keyboardType='default'
            onChangeText={changeTextHandler}
            value={ product.name } />

        <TextInput style={ styles.productQuantity }
            placeholder='Quantity'
            keyboardType='numeric'
            onChangeText={changeQuantityHandler}
            value={ product.quantity } 
            />

      </View>

      <View style={ {flexDirection:'row'} }>

      <TextInput style={ styles.productType }
        placeholder='Type'
        keyboardType='numeric'
        />

      <View style={styles.addButton}>
        <Button 
          title='Añadir' 
          onPress={addProductHandler}/>
      </View>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({

  inputContainer: {
    flex:1,
    alignContent: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#77B80A',
    width: '80%',
    height: 80,
    borderRadius: 10,
    marginTop: 45
  },
  productName: {
    flex: 2,
    color: '#395012',
    backgroundColor: '#E8B775',
    borderRadius: 12,
    padding : 13,
    marginHorizontal: 10

  },
  productQuantity:{
    flex: 1,
    color: '#395012',
    backgroundColor: '#E8B775',
    borderRadius: 12,
    padding: 10, 
    marginHorizontal: 15
  },
  productType:{
    flex: 2,
    color: '#395012',
    backgroundColor: '#E8B775',
    borderRadius: 12,
    padding: 3, 
    marginHorizontal: 10
  },
  addButton : {
    flex: 1,
    marginHorizontal: 15,
    backgroundColor: '#E8B775',
    borderRadius: 12,
    padding: 3, 
  }
})

export default ProductInput