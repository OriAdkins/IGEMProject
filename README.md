# IGEM Project for TMAU Patients

## Purpose

The purpose of this app is to assist TMAU Patients with tracking various hormones by utilizing a (in development) scanner.

The app will track these various compounds and then notify the user when they should be taking various supplements/medicince, ect.

**Note:** This app is ONLY for demo purposes, it is non-functional as the scanner is still in development, the purpose of this is to showcase what an app utilizing the scanner could look like, and how it could function. Features will be listed below in functional and planned sections.

### Technologies Used:
React Native: A framework for building native apps using React.\
React Navigation: Used for navigation between different screens in the app.\
@react-navigation/native: The core library for navigation.\
@react-navigation/stack: Allows for stack-based navigation (screen-to-screen transitions).\
React Hook Form: A library for managing forms and form validation.\
useForm: Hook to handle form states and submission.\
Controller: A component to integrate with TextInput fields, simplifying data flow between form elements.\
Expo: A framework and platform for universal React apps, providing useful components.\
React State Hooks: Used for managing local component states.\
useState: For creating and managing local state variables.\
useEffect: Used for handling side effects like updating the navigation header title dynamically.

### Function Overview:
#### 1. getTmaColor:
Description: This function takes the TMA value (a test metric) and returns a color based on the value:\
Red: TMA >= 67\
Yellow: TMA >= 33\
Green: TMA < 33\
Usage: It is used to determine the background color of the results box in the ResultsScreen based on the test results.
#### 2. resultsScreen:
Description: The ResultsScreen displays test results and a button that allows users to navigate back to the home screen. It takes the results from route.params and calculates the background color of the test result box using the getTmaColor function.\
Key Elements:\
SafeAreaView: Ensures content is rendered within safe bounds of a device's screen.\
TouchableOpacity: A touchable button that navigates back using navigation.goBack().
#### 3. LoginPage:
Description: The LoginPage allows the user to enter their username and password using controlled form inputs. It uses React Hook Form to manage form validation and submission. Upon submission, it navigates to the HomeScreen, passing the username.\
Key Elements:\
useForm: For handling form states and validation.\
Controller: Connects form input to the form state.\
navigation.navigate: Used to transition to the HomeScreen.
#### 4. HomeScreen:
Description: The HomeScreen is where the user can select a device and run a test. It displays a modal for device selection and dynamically updates the header with the logged-in username using useEffect and navigation.setOptions.\
Key Elements:\
useEffect: Updates the navigation header with the username.\
Modal: A modal for displaying the available devices for selection.\
TouchableOpacity: Buttons for device selection and running the test.
#### 5. AppComponent:
Description: The App component defines the stack navigator for the app. It sets up three main routes: Login, Home, and Results. It uses the Stack.Navigator from React Navigation to allow navigation between these screens.\
Key Elements:\
NavigationContainer: The main container for managing navigation.\
Stack.Navigator: Creates a stack-based navigation flow between screens.\
initialRouteName: Defines the initial screen shown when the app starts (Login).

### List of Features (Functional & Future):

* User Login: Allows a user to login with a username and password. 
  * Would be further expanded upon using an external database to store user info, allowing for secure access to private data\
  * Planned Technologies: Firebase - DB, or a SQL server instance to store persistent data
* Device List/Connection: Allows a user to find, and ‘pair’ a device to their app.
  * Would later be expanded upon using an external API to connect to a real TMAU scanner, however since the scanner is still in development, this feature is here for demonstration purposes
  * Planned Library: react native BLE manager
* Scanner Test: Allows a user to perform a ‘test’ or ‘scan’ using their connected scanner
  * As of now, this takes the user to a mock results screen, where results will be displayed. Currently this shows a mock value, as the scanner is still in development.
  * On future versions, this screen would take in the data from the scanner, parse through it, and print out results based on the data stream from the scanner.
  * Planned Technologies: TMAU Scanner being developed by IGEM, parse through data with bluetooth manager.




## Feature List

### Functional
* Login screen
* View for home page, which shows if a device is connected
* Screen that shows hormone levels, and if they are 'good' or 'bad'

### Planned if full release
* Full bluetooth connectivity
* Logic to understand scanner instream
* Full database which would allow for historical data tracking

## Developers

Ori Adkins\
Spencer Choy\
Liam Salem
