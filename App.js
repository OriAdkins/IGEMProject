import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Modal, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// login page screen
function LoginPage({ navigation }) {
  // state variables that handle forms (spencers code)
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [submittedData, setSubmittedData] = useState(null);

  // a function that handles the onsubmit request
  const onSubmit = (data) => {
    console.log('Submitted Data:', data);
    setSubmittedData(data);
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={loginStyles.safeArea}>
      <View style={loginStyles.container}>
        <Text style={loginStyles.title}>Login</Text>

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={loginStyles.input}
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
        {errors.username && <Text style={loginStyles.errorText}>{errors.username.message}</Text>}

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={loginStyles.input}
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
        {errors.password && <Text style={loginStyles.errorText}>{errors.password.message}</Text>}

        <TouchableOpacity style={loginStyles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={loginStyles.buttonText}>Log In</Text>
        </TouchableOpacity>

        {submittedData && (
          <View style={loginStyles.submittedContainer}>
            <Text style={loginStyles.submittedTitle}>Submitted Data:</Text>
            <Text style={loginStyles.submittedText}>Username: {submittedData.username}</Text>
            <Text style={loginStyles.submittedText}>Password: {submittedData.password}</Text>
          </View>
        )}

        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

// home screen function
function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false); // state to set modal visible
  const [selectedDevice, setSelectedDevice] = useState('Connect to Device'); // state to track selected device
  const [deviceDisplay, setDeviceDisplay] = useState('No Device Conencted'); // state to set device display

  // sets device and modal visibility on button click
  const handleDeviceSelect = (device) => {
    setSelectedDevice(device);
    setModalVisible(false);
    setDeviceDisplay(device);
  };

  // run test button to use specified device and naviagte to results page
  const onRunTest = () => {
    //selectedDevice
    navigation.navigate('Results');
  };

  return (
    <SafeAreaView style={homeStyles.container}>
      <StatusBar style="auto" />

      {/* main button that opens modal */}
      <TouchableOpacity
        style={homeStyles.mainButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={homeStyles.mainButtonText}>{'Select Device'}</Text>
      </TouchableOpacity>

      {/* device display (would be an image if we knew what it looked like) */}
      <View style={homeStyles.mainBox}>
        <Text style={homeStyles.displayText}>{deviceDisplay}</Text>
      </View>

      {/* modal screen */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={homeStyles.modalContainer}>
          <View style={homeStyles.modalContent}>
            <Text style={homeStyles.modalTitle}>Available Devices</Text>

            <TouchableOpacity
              style={homeStyles.deviceButton}
              onPress={() => handleDeviceSelect('Device 1')}
            >
              <Text style={homeStyles.deviceText}>Device 1</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={homeStyles.deviceButton}
              onPress={() => handleDeviceSelect('Device 2')}
            >
              <Text style={homeStyles.deviceText}>Device 2</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={homeStyles.deviceButton}
              onPress={() => handleDeviceSelect('Device 3')}
            >
              <Text style={homeStyles.deviceText}>Device 3</Text>
            </TouchableOpacity>

            {/* closes modal by setting visibility */}
            <TouchableOpacity
              style={homeStyles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={homeStyles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* button to run device -> naviage to next screen */}
      <TouchableOpacity
        style={homeStyles.runButton}
        onPress={() => onRunTest()}
        >
        <Text style={homeStyles.mainButtonText}>{'Run Test'}</Text>
      </TouchableOpacity>


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

// styling for Login Page
const loginStyles = StyleSheet.create({
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
});

// styling for Home Screen
const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D3056',
    paddingTop: '10%', 
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  mainButton: {
    backgroundColor: '#6096A6',
    paddingVertical: 20,
    paddingHorizontal: 60,
    borderRadius: 8,
    marginTop: '15%',  
    alignSelf: 'center',
  },
  mainButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mainBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 50,
    marginBottom: 75,
    width: 270,
    height: 100,
    borderRadius: 14,
  },
  displayText: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  runButton: {
    backgroundColor: '#6096A6',
    paddingVertical: 20,
    paddingHorizontal: 60,
    borderRadius: 8, 
    alignSelf: 'center',
    marginBottom: 40,
  },

  // modal Styles
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
