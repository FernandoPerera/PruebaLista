import { useState } from 'react'
import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native'

import ProductInput from './components/Input/ProductInput'
import ListItem from './components/list/ListItem'

import 'react-native-get-random-values'
import uuid from 'react-native-uuid'

export default function App() {

  const [ productList, setProductList ] = useState([])

  const addProductHandler = (productName, productQuantity, productType) => {

    setProductList( currentItems => [
      ...currentItems, 
      {id: uuid.v4(), name: productName, quantity: productQuantity, type: productType}
    ])

  }

  const clearList = () => {
    setProductList( '' )
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.productSpace}>

        <ProductInput onProductAdd={addProductHandler}/>

      </View>

      <View style={styles.product}>

      <ScrollView>
              
              {productList.length == 0
                ? <View style={styles.emptyList}>
                    <Text style={styles.emptyText}>Aún no hay productos</Text>
                  </View>

                :  <ListItem productList={productList}/>}
            
      </ScrollView>

      </View>

      <Pressable style={styles.clearContainer} onPress={clearList}>
                <View style={styles.clearList}>

                  <Text style={{fontSize: 19}}>Clear</Text>

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
  emptyList : {
    alignItems: 'center',
    width: '90%',
    borderWidth: 2,
    borderRadius: 12,
    backgroundColor: '#77B80A',
    margin: 10,
    padding: 10,
  },
  emptyText : {
    fontSize: 18,
    padding: 5,
    color: '#395012'
  },
  clearContainer: {
    alignItems: 'center',
    flex: 0.5,
  },
  clearList: {
    padding: 15,
    width: '90%',
    borderWidth: 2,
    borderRadius: 12,
    backgroundColor: '#E8B775'
  }, 
});
