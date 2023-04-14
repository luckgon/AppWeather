import React from "react";
import react from "react";

import {
    StatusBar,
    StyleSheet,
    Text,
    View,
    Platform,
    TextInput

} from 'react-native';

export default class SearchInput extends React.Component{
    render(){
        return(
            <View style={StyleSheet.container}>

                <TextInput

                    autoCorrect={false}
                    placeholder={this.props.placeholder}
                    placeholderTextColor="black"
                    style={styles.textInput}

                
                />

            </View>

        )

    }

}

const styles = StyleSheet.create({
    container: {
        height: 40,
        marginTop: 20,
        backgroundColor:'#666',
        marginHorizontal: 40,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    textInput: {
        textAlign: 'center', 
        width: '90%',
        backgroundColor:'#ffc300cc',
        borderRadius: 100,
        borderColor: 'black',
        marginTop: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        alignSelf: 'center',
        height: 40,
    },
});  