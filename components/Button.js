import { StyleSheet, View, Pressable, Text, Link } from 'react-native';

export default function Button({ label }) {
  return (
    <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => alert('You pressed the button')}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 3,
    backgroundColor: '#6096A6',
  },
  button: {
    borderRadius: 10,
    padding: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 18,
  },
});
