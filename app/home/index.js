import { useState } from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { Stack, useRouter } from "expo-router";
import styles from './home.styles'
import { ScreenHeaderBtn, Search } from "../../components";
import { COLORS, icons } from "../../constants";
import { LinearGradient } from "expo-linear-gradient";



const Home = () => {
  const router = useRouter()
  return (
    <SafeAreaView style={{flex: 1}}>
      <Stack.Screen 
        options={{
          headerShadowVisible: false,
          headerStyle: {backgroundColor: COLORS.primary},
          headerTitle: '',
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.hambugger}
              dimension='60%'
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.basket} dimension='60%' />
          ),
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.hero}>
            <Text style={styles.heroText}>
              Welcome
            </Text>
            <Text style={styles.heroDesc}>
              Homemade meals prepared with love. Richest ingredients. 
            </Text>
            <View style={{marginTop: 10}}>
              <Search />
            </View>
          </View>
        </View>
        <View style={styles.rectangle}></View>
        <LinearGradient
          colors={['#FBEDEA', '#FFFDFD']}
          style={{flex: 1, justifyContent:'center', alignItems: 'center'}}
          locations={[0, 1]}
        >
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>

        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home