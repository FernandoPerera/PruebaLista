import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.productSpace}>

        <Text>Product Input</Text>

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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
