import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as recipeActions from '../actions/recipeActions';
import RecipeForm from '../components/RecipeForm/RecipeForm';
// import GetRandomInt from '../components/GetRandomInt/GetRandomInt';
import { Link } from 'react-router';

class AddRecipeContainer extends React.Component {
  constructor(props,context) {
    super(props, context);

    this.state = {
      recipe: Object.assign({}, this.props.recipe),
      errors: {}
    };

    this.updateRecipeState = this.updateRecipeState.bind(this);
    this.createRecipe = this.createRecipe.bind(this);
  }



  updateRecipeState(event) {
    const field = event.target.name;
    let recipe = this.state.recipe;
    recipe[field] = event.target.value;

    const getRandomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    let randomNumber = getRandomInt(1000, 1000);
    // let randomNumber = 123121;
    recipe['id'] = `${event.target.value}-${randomNumber}`;
    return this.setState({recipe: recipe});
  }

  createRecipe(event) {
    //this.props.dispatch(recipeActions.createRecipe(this.state.recipe));
    event.preventDefault();
    this.props.actions.createRecipe(this.state.recipe);
  }

  render() {
    return (
      <div>
        <h2>Add Recipe</h2>
          <Link to={'/'}>All Recipes</Link>
          <RecipeForm
            allFlavours={this.props.flavours}
            onChange={this.updateRecipeState}
            onSave={this.createRecipe}
            recipe={this.state.recipe}
            errors={this.state.errors}
            />
      </div>
    );
  }
}

AddRecipeContainer.PropTypes = {
  recipes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  flavours: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  let recipe = {id: '', recipeName: ''};
  return {
    recipes: state.recipes,
    flavours: state.flavours,
    recipe: recipe
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //createRecipe: recipe => dispatch(recipeActions.createRecipe(recipe))
    actions: bindActionCreators(recipeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipeContainer);
