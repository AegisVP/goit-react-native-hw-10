import React from 'react';
import { Button, Image, ImageBackground, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const style = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    height: '100%',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
  },
  registrationWindowContainer: {
    backgroundColor: '#FAFAFA',
    width: '100%',
    height: '68%',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  registrationWindow: {
    width: '100%',
    height: '100%',
    bottom: 0,
    overflow: 'scroll',
  },
  registrationTitle: {
    fontSize: 30,
    fontWeight: 500,
    width: '100%',
    textAlign: 'center',
    marginTop: 72,
    marginBottom: 32,
  },
  avatarContainer: {
    position: 'absolute',
    width: 120,
    height: 120,
    left: '50%',
    transform: 'translateX("-50%"), translateY("-70px")',
    display: 'block',
    overflow: 'hidden',
    backgroundColor: '#f6f6f6',
    borderRadius: 16,
    zIndex: 1,
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  textInput: {
    height: 50,
    width: '90%',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#e8e8e8',
    padding: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 16,
  },
  showPassText: {
    position: 'absolute',
    right: -90,
  },
  mainButton: {
    height: 50,
    width: '90%',
    backgroundColor: '#ff6c00',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    padding: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 43,
  },
  mainButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 400,
  },
});

export default function RegistrationScreen() {
  return (
    <ImageBackground source={require('../../assets/images/register_bg.jpg')} style={style.backgroundImage}>
      <View style={{ height: '100%' }}>
        <KeyboardAvoidingView style={style.registrationWindowContainer}>
          <View style={style.avatarContainer}>
            <Image source={require('../../assets/images/avatar.jpg')} style={style.avatarImage} />
          </View>
          <ScrollView style={style.registrationWindow}>
            <Text style={style.registrationTitle}>Registration</Text>
            <TextInput value='' placeholderTextColor='#bdbdbd' placeholder='Login' textContentType={'username'} style={style.textInput} />
            <TextInput value='' placeholderTextColor='#bdbdbd' placeholder='Email address' textContentType={'emailAddress'} style={style.textInput} />
            <TextInput
              value=''
              placeholderTextColor='#bdbdbd'
              placeholder='Password'
              secureTextEntry={true}
              textContentType={'password'}
              clearButtonMode={'while-editing'}
              style={style.textInput}
            />
            <TouchableOpacity style={style.mainButton} activeOpacity={0.5}>
              <Text style={style.mainButtonText}>Register</Text>
            </TouchableOpacity>
            <Button title={'Have an account? Log-in'}></Button>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  );
}
