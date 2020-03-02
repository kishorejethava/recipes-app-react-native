import React from 'react';
import Login from './src/components/login/Login.component'
import RecipeList from './src/components/recipelist/RecipeList.component'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import RecipeDetail from './src/components/recipedetail/RecipeDetail.component'
import RecipeItem from './src/components/recipelist/RecipeItem.component'



const AppNavigator = createStackNavigator(
  {
    Login: Login,
    RecipeList: RecipeList,
    RecipeItem: RecipeItem,
    RecipeDetail : RecipeDetail
  },
  {
    initialRouteName: 'Login',
  }
);

class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

export default createAppContainer(AppNavigator);
