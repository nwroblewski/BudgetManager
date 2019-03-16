import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class ProfileScreen extends React.Component{
    render(){
    const {navigation} = this.props;
    const userName = navigation.getParam('name', 'noName')    
      return(
        <View style={styles.container}>
          <Text>{JSON.stringify(userName).replace(/"/g,'')}</Text>
        </View>
      );
    }
}
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

