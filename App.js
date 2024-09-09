import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Modal, Button, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CustomButton from './components/Button';

//login page function
function LoginPage({ navigation }) {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [submittedData, setSubmittedData] = useState(null);

  const onSubmit = (data) => {
    console.log('Submitted Data:', data);
    setSubmittedData(data);
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Enter Username"
              placeholderTextColor="#A9A9A9"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="username"
          rules={{ required: 'You must enter your username' }}
        />
        {errors.username && <Text style={styles.errorText}>{errors.username.message}</Text>}

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Enter Password"
              placeholderTextColor="#A9A9A9"
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
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

// Main Home Page, where all the magic is.
function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState('Connect to Device'); // state variable to track selected modal

  // function to handle device selection, all it does is update the state of the main button.\
  // when clicked it will close the modal and set the name of the button to whatever was cliked
  const handleDeviceSelect = (device) => {
    setSelectedDevice(device); // update button
    setModalVisible(false);    // close modal on selection
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      {/* button object for modal (uses state variable setModalVisible) */}
      <TouchableOpacity
        style={styles.mainButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.mainButtonText}>{selectedDevice}</Text>
      </TouchableOpacity>

      {/* modal popup for devices */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Available Devices</Text>

            <TouchableOpacity
              style={styles.deviceButton}
              onPress={() => handleDeviceSelect('Device 1')}
            >
              <Text style={styles.deviceText}>Device 1</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.deviceButton}
              onPress={() => handleDeviceSelect('Device 2')}
            >
              <Text style={styles.deviceText}>Device 2</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.deviceButton}
              onPress={() => handleDeviceSelect('Device 3')}
            >
              <Text style={styles.deviceText}>Device 3</Text>
            </TouchableOpacity>

            {/* closes the modal */}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//css for styling
const styles = StyleSheet.create({
  // Login Screen Styles
  safeArea: {
    flex: 1,
    backgroundColor: '#1D3056',
  },
  container: {
    flex: 1,
    backgroundColor: '#1D3056',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: 'white',
    marginBottom: 40,
    fontWeight: 'bold',
  },
  input: {
    width: '90%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    color: 'black',
    backgroundColor: 'white',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#6096A6',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  submittedContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  submittedTitle: {
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  submittedText: {
    color: 'white',
  },

  // Home Screen Styles
  mainButton: {
    backgroundColor: '#6096A6',
    paddingVertical: 20,
    paddingHorizontal: 60,
    borderRadius: 8,
    marginTop: 50,
  },
  mainButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  // Modal Styles
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  deviceButton: {
    backgroundColor: '#6096A6',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginVertical: 10,
  },
  deviceText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#FF6B6B',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 8,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});