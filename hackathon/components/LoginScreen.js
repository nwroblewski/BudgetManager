import React from 'react';
import {Text, TextInput, Button, View, StyleSheet} from 'react-native';


class LoginScreen extends React.Component{
    constructor(props){
      super(props);
      this.state = {text: 'Username'};
    }
    
    render(){
      return(
        <View style={styles.container}>
          <Text>Budget Managing app will be here</Text>
          <TextInput style = {styles.textinput}
            onChangeText = {(text) => this.setState({text})}
            placeholder = 'Username'
            editable = {true}
          />
        <Button
          title = "Login"
          onPress = {() => this.props.navigation.navigate('Profile',{
            name: this.state.text,
          })}
        />
        </View>
      );
    }
  }
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textinput: {
      width: 80,
      height: 40,
      fontSize: 15,
      justifyContent: 'center',
    },
});