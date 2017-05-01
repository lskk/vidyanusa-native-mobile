import React, { Component } from 'react'
import { AppRegistry, ScrollView, Dimensions } from 'react-native'
import {
    View,
    Text,
    Image,
    Tile,
    Screen,
    Caption,
    Divider,
    Icon,
    Button,
    TextInput,
} from '@shoutem/ui'


const win = Dimensions.get('window');

const LoginScreen = () => {
    return (
        <Screen style={styles.container}>
            <ScrollView>
                <Tile styleName={'text-centric inflexible'}>
                    <View>
                        <Image
                            style={styles.image}
                            source={require('../../assets/logo/vidyanusa-logo.jpg')}
                        />
                    </View>
                </Tile>
                <Divider style={styles.divider} styleName="section-header">
                    <Caption>LOGIN</Caption>
                </Divider>
                <View style={styles.box}>
                    <TextInput style={styles.textInput} placeholder={'Username'} />
                    <TextInput style={styles.textInput} placeholder={'Password'} secureTextEntry />
                    <Button style={styles.button} styleName={'dark'}>
                        <Text>MASUK</Text>
                        <Icon name="right-arrow" />
                    </Button>
                </View>
                <View style={styles.signup}>
                    <Caption>Belum mempunyai akun ? </Caption><Caption styleName={'bold'}>Silahkan daftar</Caption>
                </View>
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
        backgroundColor: '#FFFFFF'

    },
    divider:{
        alignSelf: 'stretch',
        justifyContent: 'center',
        padding: 10,
    },
    row: {
        flexDirection: 'row',
    },
    image: {
        margin: 10,
        alignSelf: 'stretch',
        height: 100,
        width: (win.width-20),
        resizeMode: 'contain'
    },
    textInput: {
        backgroundColor: '#ECF0F1',
    },
    box: {
        margin: 10,
        padding:5,
        backgroundColor: '#ECF0F1',
        borderRadius: 5,
    },
    button: {
        marginTop: 15,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 5,
    },
    signup:{
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'center',
    }
}

export default LoginScreen;
