import React, { Component } from 'react'
import { AppRegistry, ScrollView, Dimensions } from 'react-native'
import {
    View,
    Text,
    Image,
    Tile,
    Heading,
    Title,
    Subtitle,
    Screen,
    Caption,
    Divider,
    Card,
    Icon,
    NavigationBar,
    Button,
    TextInput,
} from '@shoutem/ui'

import FullWidthImage from '../../components/FullWidthImage'

const win = Dimensions.get('window');

const LoginScreen = () => {
    return (
        <Screen style={styles.container}>
            <ScrollView>
                <Tile styleName={'text-centric inflexible'}>
                    <View>
                        <Image
                            style={styles.image}
                         //   resizeMode={'contain'}
                            source={require('../../assets/logo/vidyanusa-logo.jpg')}
                        />
                    </View>
                </Tile>

            </ScrollView>

        </Screen>
    )

}

const styles = {
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        margin: 10
    },
    row: {
        flexDirection: 'row',
    },
    image: {
      //  flex: 1,
       // alignItems : 'center',
    //  padding: 100,
        alignSelf: 'stretch',
        height: 100,
       // alignSelf:'center',
       // margin: 10,
        width: win.width,
       // flexDirection: 'row',
      //  justifyContent: 'space-around'
        resizeMode: 'contain'
    }
}

export default LoginScreen;
