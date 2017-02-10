import React, { Component } from 'react';
import {connect} from 'react-redux';
import RecipeList from '../components/RecipeList/RecipeList';
import { Link } from 'react-router';

class App extends Component {

  constructor(props,context) {
    super(props, context);

    this.state = {
      recipe: Object.assign(
        {},
        this.props.recipe
      ),
      errors: {},
    };

    this.deleteRecipe = this.deleteRecipe.bind(this);

  }

  deleteRecipe(recipe) {
    console.log(recipe);
  }

  render() {
    return (
        <div className="App-header">
          <h1>Recipes</h1>
          <RecipeList recipes={this.props.recipes} deleteRecipe={this.deleteRecipe}/>
          <Link to={'/add-recipe'}>Add New Recipe</Link>
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
