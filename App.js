import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [inputValuesArray, setInputValuesArray] = useState([]);
  const [idCounter, setIdCounter] = useState(0);

  const handleInputValueChange = (text) => {
    setInputValue(text);
  };

  const handleSendButtonPress = () => {
    const newItem = { id: idCounter, value: inputValue };
    setInputValuesArray([...inputValuesArray, newItem]);
    setInputValue('');
    setIdCounter(idCounter + 1);
  };

  const handleDeleteItem = (id) => {
    const updatedList = inputValuesArray.filter((item) => item.id !== id);
    setInputValuesArray(updatedList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Erison</Text>
      <Text style={{ color: 'blue' }}>React Native</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={handleInputValueChange}
        />
        <Button title="+" onPress={handleSendButtonPress} style={styles.buttonStyle} />
      </View>
      <View style={styles.inputValuesContainer}>
        {inputValuesArray.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.inputValueContainer}
            onPress={() => handleDeleteItem(item.id)}
          >
            <Text style={styles.inputValueText}>{item.value}</Text>
            <Icon name="trash-2" size={20} color="red" />
          </TouchableOpacity>
        ))}
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'black',
  },
  buttonStyle: {
    backgroundColor: '#007AFF',
    borderBottomColor: '#007AFF',
    borderRadius: 5,
    borderBottomWidth: 1,
  },
  inputValuesContainer: {
    marginTop: 20,
  },
  inputValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  inputValueText: {
    fontSize: 18,
    marginVertical: 5,
  },
});