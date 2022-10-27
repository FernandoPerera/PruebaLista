import { useState } from 'react'

import { StyleSheet, Text, View, Pressable } from 'react-native';
import ProductInput from './components/ProductInput';

export default function App() {

  const [ productList, setProductList ] = useState([])

  const addProductHandler = (productName, productQuantity) => {

    setProductList( currentItems => [
      ...currentItems, 
      {name: productName, quantity: productQuantity}
    ])

  }

  return (
    <View style={styles.container}>
      
      <View style={styles.productSpace}>

        <ProductInput onProductAdd={addProductHandler}/>

      </View>

      <View style={styles.product}>

        <Text>List Item</Text>

      </View>

      <Pressable style={styles.clearContainer}>

        <View style={styles.clearText}>

          <Text>Clear</Text>

        </View>

      </Pressable>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',   
    width: '100%',
    backgroundColor: '#BF7226',
  },  
  product : {
    flex : 3, 
    width: '90%',
    borderWidth: 2,
    borderRadius: 12,
    backgroundColor: '#E8B775',
    margin: 10,
    marginBottom: 30,
    padding: 10,
  },
  productSpace : {
    flex: 1.25
  },
  clearContainer: {
    alignItems: 'center',
    flex: 0.5,
  },
  clearText: {
    padding: 15,
    width: '90%',
    borderWidth: 2,
    borderRadius: 12,
    backgroundColor: '#E8B775'
  }, 
});
