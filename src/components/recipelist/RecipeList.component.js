import React, { Component } from 'react'
import { View, SafeAreaView, FlatList, Text, ListItem } from 'react-native';
import styles from './RecipeList.component.style';
import RecipeItem from './RecipeItem.component'



function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default class RecipeList extends Component {
  constructor(props) {
    super(props)
    const { navigation } = this.props;
    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
      token: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.MGBf-reNrHdQuwQzRDDNPMo5oWv4GlZKlDShFAAe16s',
    };
  }

  componentDidMount() {
    this.getRecipeList();
  }
  getRecipeList = () => {
    const url = `http://35.160.197.175:3006/api/v1/recipe/cooking-list`;
    this.setState({ loading: true });

    fetch(url, {
      headers: new Headers({
        'Authorization': this.state.token
      })
    })
      .then(res => res.json())
      .then(res => {
        console.log(JSON.stringify(res))
        this.setState({
          data: res,
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });

  }
  renderItem = ({ item }) => (
    <RecipeItem
      name={item.name}
      photo={item.photo}
      firstName={item.firstName}
      lastName={item.lastName}
    />
  );
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }

}