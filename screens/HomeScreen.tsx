import React from 'react';
import { View, Text } from 'react-native';
import { useMenu } from '../utilities/LoadMenu';
import { calculateAveragePricePerCourse, calculateTotalItems } from '../utilities/Calculations';
import styles from '../utilities/styles';

const HomeScreen: React.FC = () => {
  const { menu } = useMenu();
  const totalItems = calculateTotalItems(menu);
  const averagePrices = calculateAveragePricePerCourse(menu);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Home</Text>
      <Text>Total items: {totalItems}</Text>
      {Object.keys(averagePrices).map(course => (
        <Text key={course}>
          {course}: ${averagePrices[course].toFixed(2)}
        </Text>
      ))}
    </View>
  );
};

export default HomeScreen;
