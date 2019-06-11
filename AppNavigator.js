import React, {Component} from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import Home from './screens/Home';
import NextScreen from './screens/NextScreen';

const AppNavigator = createStackNavigator(
    {
        HomeView:{screen:Home},
        NextView:{screen:NextScreen}
    },
    {
        initialRouteName:'HomeView'
    }
);
let AppContainer = createAppContainer(AppNavigator);
export class MyNavigation extends Component{
    render(){
        return <AppContainer/>
    }
}