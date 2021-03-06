import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as recipeActions from '../actions/recipeActions';
import RecipeForm from '../components/RecipeForm/RecipeForm';
import RecipeViewDetails from '../components/RecipeViewDetails/RecipeViewDetails';
import RemoveByKey from '../components/RemoveByKey/RemoveByKey';
import { GET_RECIPE_BY_ID_URL, APP_ID, APP_KEY } from '../constants/api-url';
import $ from 'jquery';

class ManageRecipeContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      recipe: Object.assign({}, this.props.recipe),
      flavours:  Object.assign({}, this.props.flavours),
      recipeFullDesc: {},
      recipes: Object.assign({}, this.props.recipes),
      // recipeFullDesc: Object.assign({}, this.props.recipeFullDesc),
      errors: {}
    };


    this.updateRecipeView = false;
    this.flavoursObject = this.state.recipe.flavors;
    this.isAddNew = false;
    this.updateRecipeState = this.updateRecipeState.bind(this);
    this.updateRecipe = this.updateRecipe.bind(this);
    this.onStartClick = this.onStartClick.bind(this);
  }

  componentWillMount() {
    let recipeId = this.props.params.id;
		$.get(GET_RECIPE_BY_ID_URL + `${recipeId}?_app_id=${APP_ID}&_app_key=${APP_KEY}`)
		.then(response => {
	      this.setState({
	        recipeFullDesc: response
	      });
	    }).catch(error => {
        throw(error);
      });
	}

  componentWillReceiveProps(nextProps) {
    if(this.props.recipe.id !== nextProps.recipe.id) {
      this.setState({recipe: Object.assign({}, nextProps.recipe)});
      this.setState({flavours: Object.assign({}, nextProps.flavours)});
      this.setState({recipes: Object.assign({}, nextProps.recipes)});
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
      // let updatedFlavorsObj = Object.assign({}, recipe.flavors, obj)
      recipe['flavors'] = updatedFlavorsObj;
      return this.setState({recipe: recipe});
    }

  render() {
    if(this.props.location.state.updateRecipeView) {
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
      );}
    else {
      // if(!this.state.recipeFullDesc.length){
      // if(Object.keys(this.state.recipeFullDesc).length === 0 ){
      if(!this.state.recipeFullDesc){
    		return null;
    	}
      return (
        <div>
         <div>View Recipe!!!</div>
         <RecipeViewDetails
            recipe={this.state.recipeFullDesc}
            allFlavours={this.props.flavours}
            isAddNew={this.isAddNew}
         />
       </div>
      )
    }
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
  if(recipe && recipe.length > 0) return recipe[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const recipeId = ownProps.params.id; //form the path `/recipes/:id`
  let recipe = {id: '', recipeName: ''};

  if(recipeId && state.recipes.length > 0) {
    recipe = getRecipeById(state.recipes, recipeId);
  }

  return {
    recipe: recipe,
    flavours: state.flavours,
    recipes: state.recipes,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(recipeActions, dispatch),
  };
}



export default connect(mapStateToProps, mapDispatchToProps)(ManageRecipeContainer);
