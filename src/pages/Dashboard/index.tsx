import React, {useContext} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import AuthContext from '../../contexts/auth';

// import { Container } from './styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

const Dashboard: React.FC = () => {
  const {signOut, signed, user} = useContext(AuthContext);

  console.log(signed);
  console.log(user);

  async function handleSignOut() {
    await signOut();
  }

  return (
    <View style={styles.container}>
      <Button title="Sign out" onPress={handleSignOut} />
    </View>
  );
};

export default Dashboard;
