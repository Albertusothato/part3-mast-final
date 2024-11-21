import React, { useState } from 'react';
import { View, Text, TextInput, Picker, TouchableOpacity, FlatList, Alert } from 'react-native';
import { useMenu, addMenuItem } from '../utilities/LoadMenu';
import styles from '../utilities/styles';

const EnterScreen: React.FC = () => {
  const { menu, setMenu } = useMenu();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('');
  const [price, setPrice] = useState('');

  const handleAdd = () => {
    if (name && description && course && price) {
      addMenuItem({ name, description, course, price: parseFloat(price) }, menu, setMenu);
      Alert.alert('Success', 'Item added!');
    } else {
      Alert.alert('Error', 'All fields are required');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Enter Menu</Text>
      <TextInput
        placeholder="Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Description"
        style={styles.input}
        value={description}
        onChangeText={setDescription}
      />
      <Picker
        selectedValue={course}
        onValueChange={setCourse}
        style={styles.picker}
      >
        <Picker.Item label="Select Course" value="" />
        <Picker.Item label="Appetizer" value="Appetizer" />
        <Picker.Item label="Main Course" value="Main Course" />
        <Picker.Item label="Dessert" value="Dessert" />
      </Picker>
      <TextInput
        placeholder="Price"
        style={styles.input}
        value={price}
        keyboardType="numeric"
        onChangeText={setPrice}
      />
      <TouchableOpacity onPress={handleAdd} style={styles.button}>
        <Text style={styles.buttonText}>Add Item</Text>
      </TouchableOpacity>
      <FlatList
        data={menu}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default EnterScreen;
