import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

export default class NextScreen extends Component{

    constructor(props){
        super(props);
        this.state = {nextInputValue:'Type to send back'};
    }

    handleTextInputChange = (t) => this.setState({nextInputValue:t});

    handleBackButton = () => {
        this.props.navigation.state.params.backBtn(this.state.nextInputValue);
        this.props.navigation.goBack();
    }

    render(){
        return <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
            <Text style={{fontSize:25}}>{this.props.navigation.getParam('text','a default value')}</Text>
            <TextInput placeholder="Enter some text" onChangeText={this.handleTextInputChange}/>
            <Button title="Send Data Back" onPress={this.handleBackButton} />
        </View>
    }
}