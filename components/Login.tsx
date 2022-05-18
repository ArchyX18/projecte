import React from 'react';
import LoginScreen from "react-native-login-screen";
import { useNavigation } from '@react-navigation/native';


export default function Login() {
    const navigation = useNavigation();
  return(
    
    <LoginScreen
    logoImageSource={("./assets/images/login/logo.png")}
    onLoginPress={() => {}}
    onHaveAccountPress={() => navigation.navigate('Register')}
    onEmailChange={(email: string) => {}}
    onPasswordChange={(password: string) => {}}
    />
  );
}

//{() => navigation.navigate('Detail', data[item.id])}

