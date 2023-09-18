import React from 'react'
import styles from './welcome.styles'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { images, icons } from '../../constants'
import { useRouter } from "expo-router";

const Welcome = () => {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <Image 
        source={images.logo}
        resizeMode='contain'
        style={styles.logo}
      />
      <View >
        <Text style={styles.title}>
          Welcome to WaraChow
        </Text>
        <Text style={styles.description}>
          Order the best meals in Lagos and have them delivered to your doorstep in 
          little or no time. Doesn’t that sound delicious???
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/signin')}>
        <Image 
          source={icons.arrowRight}
        />
      </TouchableOpacity>
    </View> 
  )
}

export default Welcome