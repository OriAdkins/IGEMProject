import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

// danger bar
const getTmaColor = (tma) => {
  if (tma >= 67) return 'red';
  if (tma >= 33) return 'yellow';
  return 'green';
};

const ResultsScreen = ({ route, navigation }) => {
  const { results } = route.params;

  const tmaColor = getTmaColor(results.TMA);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Test Results</Text>

      <View style={[styles.resultsBox, { backgroundColor: tmaColor }]}>
        <Text style={styles.label}>TMA: {results.TMA} ppm</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D3056',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    color: 'white',
    marginBottom: 40,
    fontWeight: 'bold',
  },
  resultsBox: {
    padding: 20,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
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
});

export default ResultsScreen;
