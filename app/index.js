import { Stack } from "expo-router"
import { View, StyleSheet, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Welcome } from "../components"
import { LinearGradient } from 'expo-linear-gradient';

const Home = () => {
  return (
    <SafeAreaView  style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false 
        }}
        
      />
      <LinearGradient 
        colors={['rgba(255, 255, 255, 0.00) 0%', '#040000']} 
        style={{flex: 1}}
        locations={[0.4, 1]}
        >
          <View>
            <Welcome />
          </View>
      </LinearGradient>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 100,
    // backgroundColor: COLORS.blackAndWhiteBackground,
  }
})

export default Home