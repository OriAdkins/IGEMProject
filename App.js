import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

import CustomButton from './components/Button';
/*
export default function App() {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [submittedData, setSubmittedData] = useState(null);

  const onSubmit = (data) => {
    console.log('Submitted Data:', data);
    setSubmittedData(data);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <Controller
          control={control}
          render={({ field }) => (
            <TextInput
              {...field}
              style={styles.input}
              placeholder="Enter Username"
              placeholderTextColor="#A9A9A9"
            />
          )}
          name="username"
          rules={{ required: 'You must enter your username' }}
        />
        {errors.name && <Text style={styles.errorText}>{errors.name.message}</Text>}

        <Controller
          control={control}
          render={({ field }) => (
            <TextInput
              {...field}
              style={styles.input}
              placeholder="Enter Password"
              placeholderTextColor="#A9A9A9"
            />
          )}
          name="password"
          rules={{ required: 'You must enter your password' }}
        />
        {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

        <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
  
        {submittedData && (
          <View style={styles.submittedContainer}>
            <Text style={styles.submittedTitle}>Submitted Data:</Text>
            <Text style={styles.submittedTitle}>Username: {submittedData.username}</Text>
            <Text style={styles.submittedTitle}>Password: {submittedData.password}</Text>
          </View>
        )}
        
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1D3056',
  },
  container: {
    flex: 1,
    backgroundColor: '#1D3056',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    fontFamily: "Impact,Charcoal,sans-serif",
  },
  input: {
    width: '90%',
    height: 70,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 30,
    padding: 8,
    color: 'black',
    backgroundColor: 'white',
    fontSize: 20,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#6096A6',
    paddingVertical: 24,
    paddingHorizontal: 70,
    borderRadius: 8,
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  submittedContainer: {
    marginTop: 20,
  },
  submittedTitle: {
    fontWeight: 'bold',
    color: 'white',
  },
});
*/

////////////////////////////////

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CustomButton label="Device 1"/>
      <CustomButton label="Device 2"/>
      <CustomButton label="Device 3"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#36454F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#6096A6',
    paddingVertical: 24,
    paddingHorizontal: 70,
    borderRadius: 8,
    marginTop: 30,
  },
});