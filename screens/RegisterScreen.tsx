import { StyleSheet } from 'react-native';


import EditScreenInfo from '../components/EditScreenInfo';
import SignUp from '../components/SignUp';
import { Text, View } from '../components/Themed';

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <SignUp/>
    </View>

  );

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
