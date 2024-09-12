import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Modal, SafeAreaView, TouchableOpacity, StyleSheet, Image } from 'react-native';

// home screen function
function HomeScreen({ route ,navigation }) {
  // how to keep this variable when user comes back from results.
  const { username } = route.params;
  const [modalVisible, setModalVisible] = useState(false); // state to set modal visible
  const [selectedDevice, setSelectedDevice] = useState('Connect to Device'); // state to track selected device
  const [deviceDisplay, setDeviceDisplay] = useState('No Device Connected'); // state to set device display
  const [isVisible, setIsVisible] = useState(false);

  // sets device and modal visibility on button click
  const handleDeviceSelect = (device) => {
    setSelectedDevice(device);
    setModalVisible(false);
    setDeviceDisplay(device);
    setIsVisible(true); // For device image
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitle: `Welcome, ${username}`,
      headerTitleAlign: 'center',
      headerLeft: () => (
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, username]);

  const handleLogout = () => {
    navigation.navigate('Login'); 
  }

  // run test button to use specified device and navigate to results page
  const onRunTest = () => {
    const results = {
      TMA: 30  // example value
    };
    navigation.navigate('Results', { results });
    //navigation.navigate('Results', { results , username: data.username });
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      {/* main button that opens modal */}
      <TouchableOpacity
        style={styles.mainButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.mainButtonText}>{'Select Device'}</Text>
      </TouchableOpacity>

      {/* device display (would be an image if we knew what it looked like) */}
      <View style={styles.mainBox}>
      {isVisible && (
        <View>
          <Image source={require('../assets/IGEM_device.png')} style={styles.image}/>
        <Text style={styles.displayText}>{deviceDisplay}</Text>
        </View>
      )}
      </View>
      

      {/* modal screen */}
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

            {/* closes modal by setting visibility */}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* button to run device -> navigate to next screen */}
      <TouchableOpacity
        style={styles.runButton}
        onPress={() => onRunTest()}
      >
        <Text style={styles.mainButtonText}>{'Run Test'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  image: {
    resizeMode: 'contain',
    height: 130,
    width: 190,
    borderRadius: 8,
    borderColor: 'black',
  },
  displayText: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 14,
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

export default HomeScreen;
