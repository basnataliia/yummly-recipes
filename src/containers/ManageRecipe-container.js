import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as recipeActions from '../actions/recipeActions';
import RecipeForm from '../components/RecipeForm/RecipeForm';
import RemoveByKey from '../components/RemoveByKey/RemoveByKey';

class ManageRecipeContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      recipe: Object.assign({}, this.props.recipe),
      flavours:  Object.assign({}, this.props.flavours),
      errors: {}
    };

    console.log('this.props.recipe', this.props.recipe);

    this.flavoursObject = this.state.recipe.flavors;
    this.isAddNew = false;
    this.updateRecipeState = this.updateRecipeState.bind(this);
    this.updateRecipe = this.updateRecipe.bind(this);
    this.onStartClick = this.onStartClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.recipe.id != nextProps.recipe.id) {
      this.setState({recipe: Object.assign({}, nextProps.recipe)});
      this.setState({flavours: Object.assign({}, nextProps.flavours)});
    }
  }

  updateRecipeState(event) {
    const field = event.target.name;
    let recipe = this.state.recipe;
    recipe[field] = event.target.value;
    return this.setState({recipe: recipe});
  }

  updateRecipe(event) {
    event.preventDefault();
    this.props.actions.updateRecipe(this.state.recipe);
    this.context.router.push('/');
  }

    onStartClick(value, name) {
      let obj = {};
      obj[name] = value;

      let recipe = this.state.recipe;
      let flavoursWithoutKey = {};
      if(recipe.flavors) {
        flavoursWithoutKey = RemoveByKey(recipe.flavors, name);
      }

      let updatedFlavorsObj = Object.assign({}, flavoursWithoutKey, obj)
      recipe['flavors'] = updatedFlavorsObj;
      return this.setState({recipe: recipe});
    }

  render() {
    return (
      <div>
        <h2>Update recipe</h2>
        <RecipeForm
          allFlavours={this.props.flavours}
          onChange={this.updateRecipeState}
          onSave={this.updateRecipe}
          recipe={this.state.recipe}
          onStartClick={this.onStartClick}
          isAddNew={this.isAddNew}
          errors={this.state.errors}
          />
      </div>
    );
  }
}

ManageRecipeContainer.propTypes = {
  recipe: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  flavours: PropTypes.array.isRequired
};

ManageRecipeContainer.contextTypes = {
  router: PropTypes.object
};

function getRecipeById(recipes, id) {
  const recipe = recipes.filter(recipe => recipe.id === id);
  if(recipe) return recipe[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  console.log('state', state);
  const recipeId = ownProps.params.id; //form the path `/recipes/:id`
  let recipe = {id: '', recipeName: ''};

  if(recipeId && state.recipes.length > 0) {
    recipe = getRecipeById(state.recipes, recipeId);
  }

  return {
    recipe: recipe,
    flavours: state.flavours
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(recipeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageRecipeContainer);
