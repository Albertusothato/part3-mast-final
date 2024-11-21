import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useMenu } from '../utilities/LoadMenu';

const ViewScreen: React.FC = () => {
  const { menu } = useMenu();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Customer View</Text>
      {menu.map((item, index) => (
        <Text key={index}>{item.name}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ViewScreen;
