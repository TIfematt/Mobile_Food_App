import React from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import styles from './search.style'
import { icons } from '../../constants'


const Search = () => {
  return (
    <>
      <Image 
        source={icons.magnifyingGlass}
        style={styles.glass}
      />
      <TextInput 
        placeholder='Search Menu' 
        style={styles.box} 
        placeholderTextColor='#5D5959'
        // inlineImageLeft={icons.magnifyingGlass}
      />
    </>
  )
}

export default Search