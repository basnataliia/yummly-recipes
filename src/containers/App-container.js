import React, { Component } from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';
import RecipeList from '../components/RecipeList/RecipeList';


import { GET_ALL_RECIPES_URL } from '../constants/api-url';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    // this.state = {
    //   // recipes: [],
    //   recipes: {},
    // };
  }


  componentDidMount() {
    $.get(GET_ALL_RECIPES_URL)
    .then(result => {
      console.log('result,', result);
      this.setState({
        recipes: result
      });
    });
  }

  recipeRow(recipe, index) {
    return <div key={index}>{recipe.recipeName}</div>;
  }

  render() {
    return (
        <div className="App-header">
          <h1>Recipes</h1>
          {/* {this.props.recipes.map(this.recipeRow)} */}
          <RecipeList recipes={this.props.recipes}/>
        </div>
    );
  }
}

// export default App;
function mapStateToProps(state, ownProps) {
  return {
    recipes: state.recipes
  };
}
export default connect(mapStateToProps)(App);
