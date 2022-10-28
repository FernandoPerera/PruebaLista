import { StyleSheet } from 'react-native'

import { Dropdown } from 'react-native-element-dropdown';

const DropdownType = ({ changeTypeHandler, product }) => {

  const type = [
    { label: 'Fruta', value: 'Fruit' },
    { label: 'Vegetal', value: 'Vegetable' },
    { label: 'Backery', value: 'Backery' },
    { label: 'Pescado', value: 'Fish' },
    { label: 'Carne', value: 'Meat' },
  ]

  return (
    <>
        
        <Dropdown style={styles.dropdown}
        placeholderStyle={{fontSize:16}}
        selectedTextStyle={{fontSize:16}}
        inputSearchStyle={{height:40, fontSize:16}}
        labelField='label'
        valueField='value'
        placeholder='Type'
        data={type}
        value={ product.type }   
        onChange={ changeTypeHandler }

      />

    </>
  ) 
}

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    width: 100,
    backgroundColor: '#E8B775',
    borderRadius: 8,
    paddingHorizontal: 8,
  },
})

export default DropdownType