import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import styles from './RecipeItem.component.style';

export default class RecipeItem extends Component {
    constructor(props) {
        super(props)
        const { navigation } = this.props;
        console.log(navigation)
    }
    render() {
        return (
            <TouchableOpacity
                style={styles.mainContainer}
                onPress={() => this.props.navigation.navigate('RecipeDetail', { token: responseJson.token })}
                underlayColor='#fff'>

                <View style={styles.inputContainer}>
                    <Image style={styles.imageRecipe}
                        source={{ uri: this.props.photo }} />

                    <Text>{this.props.name}</Text>
                    <Text>{this.props.firstName + ' ' + this.props.lastName}</Text>
                </View>
            </TouchableOpacity>

        );
    }

}