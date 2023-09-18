import React, { useState } from 'react'
import { 
  Image, SafeAreaView, Text, TextInput, TouchableOpacity, View, Modal, Button, ScrollView
} from 'react-native'
import { Stack, Link, useRouter} from "expo-router"
import styles from './signin.styles'
import { LinearGradient } from 'expo-linear-gradient';
import { icons, images } from '../../constants';
// import { BlurView } from '@react-native-community/blur'; 
import { BlurView } from 'expo-blur';

const Signin = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const router = useRouter()

  const handleSignIn = () => router.push('/home')

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen 
        options={{
          headerShown: false 
        }}
      />
      <LinearGradient
        colors={['rgba(204, 85, 0, 0.51)', '#FFFDFD']}
        style={{flex: 1, justifyContent:'center', alignItems: 'center'}}
        locations={[0, 1]}
        >
          <View style={styles.box}>
            <Image 
              source={images.logo}
              resizeMode='contain'
              style={styles.logo}
            />
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <TextInput 
                style={{...styles.input, marginBottom: 39, borderColor: isFocused ? '#FF785B' : 'white', borderWidth: 1}}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder='Email'
              />
              <TextInput 
                style={{...styles.input,  borderColor: isFocused ? '#FF785B' : 'white', borderWidth: 1}}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder='Password'
              />
              <TouchableOpacity style={{marginTop: 27, marginBottom: 50}}>
                <Text style={{fontFamily: 'AKBold'}}>
                  Forget Password?
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={handleSignIn}>
                <Text style={{color: 'white', fontFamily: 'AKBold', fontSize: 14}}>
                  Eat Away
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 59}}>
              <Text style={{fontFamily: 'AKRegular', fontSize: 13}}>
                Sign in with
              </Text>
              <TouchableOpacity style={{marginTop: 47, flexDirection: 'row', gap: 18}}>
                <Image 
                  source={icons.FB}
                  style={{width: 34, height: 34}}
                />
                <Image 
                  source={icons.gmail}
                  style={{width: 34, height: 34}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={{position: 'absolute', bottom: -10}} onPress={toggleModal}>
            <View style={styles.signup}>
              <Image 
                source={icons.navigateUpArrow}
              />
              <Text style={{color:'white', fontSize: 20, fontFamily: 'AKRegular'}}>
                Sign Up
              </Text>
            </View>
          </TouchableOpacity>
      </LinearGradient>
      <Modal 
        visible={isModalVisible} 
        animationType="slide" 
        onRequestClose={toggleModal}
        transparent={true}
        >
         <BlurView
          style={styles.modalBackground}
          intensity={40} 
          tint="light"
          // blurType="light"
          // blurAmount={5}
          >
            <View style={styles.modalContent}>
              {/* <ScrollView > */}
                {/* Sign-up Form */}
                <View style={{width: 38, backgroundColor: '#FF785B', height: 5, borderRadius: 33, marginBottom: 20}}></View>
                <Text style={styles.signupText}>Sign Up</Text>
                <TextInput 
                  style={{...styles.input, marginBottom: 36, borderColor: isFocused ? '#FF785B' : 'gray', borderWidth: 1}}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  placeholder='Username'
                />
                <TextInput 
                  style={{...styles.input, marginBottom: 36, borderColor: isFocused ? '#FF785B' : 'gray', borderWidth: 1}}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  placeholder='Email'
                />
                <TextInput 
                  style={{...styles.input, marginBottom: 36,  borderColor: isFocused ? '#FF785B' : 'gray', borderWidth: 1}}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  placeholder='Password'
                />
                <TextInput 
                  style={{...styles.input, marginBottom: 36, borderColor: isFocused ? '#FF785B' : 'gray', borderWidth: 1}}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  placeholder='Confirm Password'
                />
                <TouchableOpacity style={{...styles.btn,height: 50}}>
                  <Text style={{color: 'white', fontFamily: 'AKBold', fontSize: 17}}>
                    Never Hungry Again!
                  </Text>
                </TouchableOpacity>
                <View style={{marginTop: 20}}>
                  <Text style={{fontFamily: 'AKRegular', fontSize: 17}}>
                    or Sign up with
                  </Text>
                  <TouchableOpacity style={{marginTop: 18, flexDirection: 'row', gap: 18, justifyContent: 'center', alignItems: 'center'}}>
                    <Image 
                      source={icons.FB}
                      style={{width: 34, height: 34}}
                    />
                    <Image 
                      source={icons.gmail}
                      style={{width: 34, height: 34}}
                    />
                  </TouchableOpacity>
                </View>
                {/* <Button title="Close" onPress={toggleModal} /> */}
              {/* </ScrollView> */}
            </View>
        </BlurView>
      </Modal>
    </SafeAreaView>
  )
}

export default Signin