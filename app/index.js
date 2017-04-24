import React, { Component } from 'react';
import { Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import ScarletScreen from './screens/ScarletScreen';
import GrayScreen from './screens/GreyScreen';
import BlueScreen from './screens/BlueScreen';
import MaizeScreen from './screens/MaizeScreen';
import GoldScreen from './screens/GoldScreen';
import BlackScreen from './screens/BlackScreen';
import ModalScreen from './screens/ModalScreen';
import TestScreen from './screens/TestScreen';
import LoginScreen from './screens/LoginScreen'

const TabIcon = ({ selected, title }) => {
    return (
        <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
    );
}

const App = () => {
    return (
        <Router>
            <Scene key="root">
                {/* Tab Container */}
                <Scene key="login"
                       component={LoginScreen}
                   //    title="Test"
                       hideNavBar={true}
                       initial
                />
                <Scene
                    key="tabbar"
                    tabs={true}
                    tabBarStyle={{ backgroundColor: '#FFFFFF' }}
                >
                    {/* Tab and it's scenes */}
                    <Scene key="osu" title="OSU" icon={TabIcon}>
                        <Scene key="scarlet"
                               component={ScarletScreen}
                               title="Scarlet"
                        />
                        <Scene
                            key="gray"
                            component={GrayScreen}
                            title="Gray"
                        />
                    </Scene>

                    {/* Tab and it's scenes */}
                    <Scene key="um" title="UM" icon={TabIcon}>
                        <Scene
                            key="blue"
                            component={BlueScreen}
                            title="Blue"
                        />
                        <Scene
                            key="maize"
                            component={MaizeScreen}
                            title="Maize"
                        />
                    </Scene>

                    {/* Tab and it's scenes */}
                    <Scene key="vu" title="VU" icon={TabIcon}>
                        <Scene
                            key="gold"
                            component={GoldScreen}
                            title="Gold"
                        />
                        <Scene
                            key="black"
                            component={BlackScreen}
                            title="Black"
                        />
                    </Scene>
                </Scene>
                <Scene
                    key="modal"
                    direction="vertical"
                    component={ModalScreen}
                    title="Modal"
                    hideNavBar
                />
            </Scene>
        </Router>
    );
}

export default App;