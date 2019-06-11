import React, {Component} from 'react';
import {View, TextInput, Button} from 'react-native';

export default class Home extends Component{

    static navigationOptions = {
        title:"Home",
        headerStyle:{
            backgroundColor:'blue'
        },
        headerTitleStyle:{
            color:'white'
        }
    }

    render(){
        return <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <TextInput placeholder="Enter something here" />
            <Button title="Send & Move to Next Screen" />
        </View>
    }
}
