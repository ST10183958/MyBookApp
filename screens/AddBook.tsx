import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet,TextInput,TouchableOpacity,View, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens import //
import InfoPage from './InfoPage'
// screens import //

export default function App({ navigation }) {
    const [inputValue, setInputValue] = useState(''); 
     const [Inputtitles, setInputtitles] = useState(''); 
    

    
    const handlePress = () => {
    if (inputValue.trim() === '') {
       Alert.alert('Please add input for number of Pages');
    } else {
      navigation.navigate('InfoPage', { inputValue,Inputtitles })
    }
 
  };


  return (
    <SafeAreaView style={styles.container}>

    <View>
      <Text style={styles.AddBookTitle}> Add Book </Text>
      
      <Text>Title of book</Text>
      <TextInput
        style={styles.input}
        value={Inputtitles}
        onChangeText={setInputtitles}
      />

      <Text>Genre </Text>
      <TextInput
        style={styles.input}
      />

      <Text>Author </Text>
      <TextInput
        style={styles.input}
        //onChangeText={onChangeText}
      />

      <Text>Number of pages </Text>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={setInputValue}
      />

      <TouchableOpacity style={styles.AddBookButton} onPress={handlePress}>
          <Text style={styles.AddBookTxt}> Add Book </Text>
      </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
}



const Stack = createNativeStackNavigator();



function Add() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Cart" >
        <Stack.Screen name="" component={AddBook} options={{ headerShown: false }} />
        <Stack.Screen name="InfoPage" component={InfoPage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  AddBookTitle:{
    fontSize:20,
  },
    input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  AddBookButton:{
    backgroundColor:"#527a4d",
    height:50,
    width:100,
    top:20,
    left:130,
    borderRadius:10,
  },
    AddBookTxt:{
    fontSize:20,
    color:"white",
    top:9,
  },
});