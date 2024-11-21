import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from '../utilities/styles';

const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [role, setRole] = useState('');

  const handleLogin = () => {
    const lowerRole = role.toLowerCase();
    if (lowerRole === 'chef') {
      navigation.navigate('View (Chef)');
    } else if (lowerRole === 'customer') {
      navigation.navigate('View (Customer)');
    } else {
      Alert.alert('Error', 'Please enter either chef or customer');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Login</Text>
      <TextInput
        placeholder="Enter role (chef/customer)"
        style={styles.input}
        onChangeText={setRole}
        value={role}
      />
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
