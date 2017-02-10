import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as recipeActions from '../actions/recipeActions';
import RecipeForm from '../components/RecipeForm/RecipeForm';

class ManageRecipeContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      recipe: Object.assign({}, this.props.recipe),
      errors: {}
    };

    this.flavoursObject = this.state.recipe.flavors;
    console.log('this.props.recipe', this.props.recipe);
    console.log('this.flavoursObject ', this.flavoursObject );

    this.updateRecipeState = this.updateRecipeState.bind(this);
    this.updateRecipe = this.updateRecipe.bind(this);
    this.onStartClick = this.onStartClick.bind(this);
  }

  updateRecipeState(event) {
    console.log('this.props.recipe', this.props.recipe);

    const field = event.target.name;
    let recipe = this.state.recipe;
    recipe[field] = event.target.value;

    // recipe['flavors'] = this.flavoursObject;

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


      // Object.filter = function( obj, predicate) {
      //     var result = {}, key;
      //
      //     for (key in obj) {
      //         if (obj.hasOwnProperty(key) && !predicate(obj[key])) {
      //             result[key] = obj[key];
      //         }
      //     }
      //
      //     return result;
      // };
      //
      // var filtered = Object.filter(this.flavoursObject, );
      // console.log('filtered', filtered);

      // recipe['flavors'] = obj;
      // this.flavoursObject[name] = value;
      // console.log('this.flavoursObject', this.flavoursObject);
      // Object.filter = function (this.flavoursObject, obj) {
      //
      // }

      // ...this.flavoursObject.filter(recipe => recipe.id !== obj.id)
      // Object.assign({},this.flavoursObject, obj)


      // console.log('star valius is:', value, name);



      let recipe = this.state.recipe;
      // let obj = recipe.flavors;
      // obj[name] = value;
      recipe['flavors'] = obj;
      //
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
  const recipeId = ownProps.params.id; //form the path `/recipes/:id`
  let recipe = {id: '', recipeName: ''};

  if(recipeId) {
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
