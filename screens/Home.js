import React, { Component } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity } from 'react-native';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { textInputValue: 'Type something here' };
    }

    static navigationOptions = ({ navigation }) => {

        return {
            title: "Home",
            headerStyle: {
                backgroundColor: 'blue'
            },
            headerTitleStyle: {
                color: 'white'
            },
            headerRight: (
                <TouchableOpacity style={{ width: 30, marginRight: 20 }} onPress={() => navigation.navigate('NextView')}>
                    <Text style={{ color: 'white' }}>+1</Text>
                </TouchableOpacity>
            )
        }
    }
    /*
    static navigationOptions = ({ navigation }) => ( // instead of return statement use ()

         {
            title: "Home",
            headerStyle: {
                backgroundColor: 'blue'
            },
            headerTitleStyle: {
                color: 'white'
            },
            headerRight: (
                <TouchableOpacity style={{ width: 30, marginRight: 20 }} onPress={() => navigation.navigate('NextView')}>
                    <Text style={{ color: 'white' }}>+1</Text>
                </TouchableOpacity>
            )
        }
    )
    */

    handleBtn = () => {
        this.props.navigation.navigate('NextView', { text: this.state.textInputValue, rollnum: 233, backBtn: this.handleBackCall });
    }

    handleBackCall = (value) => this.setState({ textInputValue: value });

    hanldeTextField = (txt) => this.setState({ textInputValue: txt })

    render() {
        return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TextInput placeholder="Enter something here"
                onChangeText={this.hanldeTextField} value={this.state.textInputValue}
                style={{ width: 220, height: 40, borderWidth: 2, borderColor: 'red', padding: 4, borderRadius: 4 }}
            />
            <Button title="Send & Move to Next Screen" onPress={this.handleBtn} />
            <Text>{this.state.textInputValue}</Text>

        </View>
    }
}
