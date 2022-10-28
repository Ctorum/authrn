import React, {useContext} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import AuthContext from '../../contexts/auth';

// import { Container } from './styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

const SignIn: React.FC = () => {
  const {signIn, signed, user} = useContext(AuthContext);

  console.log(signed);
  console.log(user);

  async function handleSignIn() {
    await signIn();
  }

  return (
    <View style={styles.container}>
      <Button title="Sign in" onPress={handleSignIn} />
    </View>
  );
};

export default SignIn;
