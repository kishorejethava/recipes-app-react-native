import { Component } from "react";
import { View } from "react-native";
import styles from './RecipeDetail.component.style'


export default class RecipeDetail extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.mainContainer}>
                <Text>{'Kishore Jethava'}</Text>

            </View>
        );
    }

}