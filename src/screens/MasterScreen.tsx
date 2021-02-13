import React, { useEffect, useState } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View, BackHandler, FlatList, Platform, Keyboard, Alert } from 'react-native';
import { SafeAreaView, StackActions } from 'react-navigation';
import { DrawerActions, NavigationDrawerProp } from 'react-navigation-drawer';



/**
 * https://reactnavigation.org/docs/4.x/typescript
 */
type Props = {
    navigation: NavigationDrawerProp<{ userId: string, routeName: string }>;
}

let idCounter = 0;

export const keyExtractor = (item: any) => {
    if (!item.uniqueId) {
        item.uniqueId = idCounter;
        idCounter++;
    }

    return item.uniqueId.toString();
}

const MasterScreen = (props: Props) => {

    const [data, setData] = useState(null);

    const loadDataFirstTime = () => {


        setTimeout(() => {
            setData([{}, {}])
        }, 1000)

        setTimeout(() => {
            setData([{}, {}])
        }, 4000)
    }

    useEffect(() => {
        loadDataFirstTime();
    }, []);

    const renderItem = () => {
        return <Text>Placeholder</Text>
    }

    const onEndReached = () => {
        console.log("End reached with data length", data.length)
        Alert.alert("TEST")
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList data={data}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                onEndReached={onEndReached}
                onEndReachedThreshold={0.5}
                bounces={true}
                removeClippedSubviews={true}
                keyboardShouldPersistTaps='always'


            />
        </SafeAreaView>

    );

}

MasterScreen.navigationOptions = {}

export { MasterScreen }