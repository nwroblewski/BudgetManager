import React from 'react';
import {Text, TextInput, Button, View, StyleSheet,FlatList, Alert} from 'react-native';
import {List,ListItem} from 'react-native-elements'

// each of spendings will be displayed as name + price, upon clicking it
//some additional informations will be displayed
class SpendingsScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list: [{
                id: '1',
                name: 'Beer',
                price: 50.12
            },{
                id: '2',
                name: 'Groceries',
                price: 130.11
            }],
            showAddScreen: false
        }
    }
    
    addSpending(item){
        this.state.items.push(item)
    }

    viewSpendingScreen = () => {
        return(
            <View style = {styles.container}>
                <FlatList
                        data={this.state.list}
                        renderItem={this.renderRow}
                        keyExtractor={item => item.id}
                    />
            </View>
        );
    }
    
    renderRow = ( {item} ) => {
        return (
            <Text style = {styles.itemWrapper}>
                <Text style = {styles.itemName}>
                    {item.name}{"\n"}
                </Text>
                <Text style = {styles.item}>
                    {item.price}
                </Text>
            </Text>
    )}
    render(){
        return(
            <View style = {styles.container}>
            <FlatList
                    data={this.state.list}
                    renderItem={this.renderRow}
                    keyExtractor={item => item.id}
                />
                <Button style = {styles.addButton}
                    title = '+'
                    onPress = {() => {Alert.alert('tutaj cos bedzie')}}
                />
            </View>
        );
    }
}
export default SpendingsScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 30,
      alignContent: 'center',
    },
    textinput: {
      width: 80,
      height: 40,
      fontSize: 15,
      justifyContent: 'center',
    },
    item: {
        fontSize: 20,
    },
    itemName: {
        fontSize: 26,
        color: '#fff',
    },
    itemWrapper: {
        margin: 10,
        backgroundColor: '#999',
        padding: 15,
        borderRadius: 15,
        overflow: 'hidden',
        width: '80%',
        alignSelf: 'center',
    },
    addButton: {
        borderRadius: 50,
        overflow: 'hidden',
        height: 50,
        width: 50,
        backgroundColor: '#ccc',
        padding: 20,
        marginBottom: 50,
        fontSize: 30,
    }
});