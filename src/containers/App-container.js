import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as recipeActions from '../actions/recipeActions';
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

  deleteRecipe(recipeId) {
    console.log(recipeId);
    this.props.actions.deleteRecipe(recipeId);
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


function mapStateToProps(state, ownProps) {
  return {
    recipes: state.recipes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(recipeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
