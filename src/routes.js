import { createStackNavigator } from 'react-navigation-stack';
import Main from './main';
import Home from './Home';
import Game from './Game';
import { createAppContainer } from 'react-navigation';
import React, { Component } from 'react';

const AppNavigator = createStackNavigator({
    Main,
    Home,
    Game,
})

const AppContainer = createAppContainer(AppNavigator)

export default class App extends Component {
    render() {
        return <AppContainer />;

    }
}