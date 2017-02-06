import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as recipeActions from '../actions/recipeActions';

class AddRecipeContainer extends React.Component {
  constructor(props,context) {
    super(props, context);

    this.state = {
      recipe: {recipeName: ""}
    };

    this.onRecipeNameChange = this.onRecipeNameChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onRecipeNameChange(event) {
    const recipe = this.state.recipe;
    recipe.recipeName = event.target.value;
    this.setState({recipe: recipe});
  }

  onClickSave() {
    //this.props.dispatch(recipeActions.createRecipe(this.state.recipe));
    this.props.actions.createRecipe(this.state.recipe);
  }

  recipeRow(recipe, index) {
    return <div key={index}>{recipe.recipeName}</div>;
  }

  render() {
    return (
      <div>
        <h1>Recipes</h1>
        {this.props.recipes.map(this.recipeRow)}

        <h2>Add Recipe</h2>
        <input
          type="text"
          onChange={this.onRecipeNameChange}
          value={this.state.recipe.recipeName} />

          <input
            type="submit"
            value="Save"
            onClick={this.onClickSave} />
      </div>
    );
  }
}

AddRecipeContainer.PropTypes = {
  recipes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    recipes: state.recipes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //createRecipe: recipe => dispatch(recipeActions.createRecipe(recipe))
    actions: bindActionCreators(recipeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipeContainer);
