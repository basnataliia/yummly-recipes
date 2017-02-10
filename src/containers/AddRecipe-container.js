import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as recipeActions from '../actions/recipeActions';
import RecipeForm from '../components/RecipeForm/RecipeForm';
import GetRandomInt from '../components/GetRandomInt/GetRandomInt';
import { Link } from 'react-router';

class AddRecipeContainer extends React.Component {

  constructor(props,context) {
    super(props, context);

    this.state = {
      recipe: Object.assign(
        {},
        this.props.recipe
      ),
      errors: {},
    };

    this.flavoursObject = {
      bitter: 0,
      meaty: 0,
      piquant: 0,
      salty: 0,
      sour: 0,
      sweet: 0
    };

    this.updateRecipeState = this.updateRecipeState.bind(this);
    this.isAddNew = true;
    this.createRecipe = this.createRecipe.bind(this);
    this.onStartClick = this.onStartClick.bind(this);
  }

  updateRecipeState(event) {
    const field = event.target.name;
    let recipe = this.state.recipe;
    recipe[field] = event.target.value;
    const randomNumber = GetRandomInt(1000, 10000);
    recipe['id'] = `${event.target.value}-${randomNumber}`;
    recipe['flavors'] = this.flavoursObject;
    // console.log('this.flavoursObject', this.flavoursObject);
    this.setState({recipe: recipe});
  }

  createRecipe(event) {
    event.preventDefault();
    this.props.actions.createRecipe(this.state.recipe);
    this.context.router.push('/');
  }

  onStartClick(value, name) {
    this.flavoursObject[name] = value;
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
            isAddNew={this.isAddNew}
            onStartClick={this.onStartClick}
            />
      </div>
    );
  }
}

AddRecipeContainer.propTypes = {
  recipes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  flavours: PropTypes.array.isRequired
};

AddRecipeContainer.contextTypes = {
  router: PropTypes.object
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
