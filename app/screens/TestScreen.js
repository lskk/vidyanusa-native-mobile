import React, { Component } from 'react'
import { AppRegistry, ScrollView } from 'react-native'
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

const imageSources = [
    {uri: 'http://shoutem.github.io/img/ui-toolkit/examples/image-3.png'},
    {uri: 'http://shoutem.github.io/img/ui-toolkit/examples/image-4.png'},
]

const TestScreen = () => {
        return (
            <Screen
                style={{ paddingTop: 70 }}
            >

                <NavigationBar
                    style={{
                        container: {
                            backgroundColor: '#BDC3C7'
                        },
                    }}
                    leftComponent={<Icon name="sidebar" />}
                    centerComponent={<Title>TITLE</Title>}
                    styleName={'inline'}
                />
                <ScrollView >
                    <Tile styleName={'text-centric inflexible'}>
                        <Title>
                            Shoutem UI
                        </Title>
                    </Tile>
                    <Divider styleName={'section-header'}>
                        <Caption>INPUTS</Caption>
                    </Divider>
                    <TextInput placeholder={'Type here'} />
                    <Divider styleName={'section-header'}>
                        <Caption>BUTTONS</Caption>
                    </Divider>
                    <View
                        style={styles.row}
                        styleName={'md-gutter'}
                    >
                        <Button styleName={'dark'}>
                            <Icon name="add-event" />
                            <Text>ADD TO CALENDAR</Text>
                        </Button>
                        <Button styleName={'md-gutter-left'}>
                            <Text>Button 2</Text>
                        </Button>
                    </View>
                    <Divider styleName={'section-header'}>
                        <Caption>CARDS</Caption>
                    </Divider>
                    <Tile styleName={'stretch'}>
                        <Image
                            styleName={'large'}
                            source={imageSources[0]}
                        />
                        <View styleName={'content'}>
                            <Subtitle>Large Card with Image and Caption</Subtitle>
                            <Caption>21 hours ago</Caption>
                        </View>
                    </Tile>
                    <Divider styleName={'section-header'}>
                        <Caption>...AND MORE!</Caption>
                    </Divider>
                </ScrollView>

            </Screen>
        )

}

const styles = {
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    row: {
        flexDirection: 'row',
    },
}

export default TestScreen;
