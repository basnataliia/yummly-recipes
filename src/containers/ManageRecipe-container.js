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

    this.updateRecipeState = this.updateRecipeState.bind(this);
  }

  updateRecipeState(event) {
    const field = event.target.name;
    let recipe = this.state.recipe;
    recipe[field] = event.target.value;
    return this.setState({recipe: recipe});
  }


  render() {
    return (
      <div>
        <h2>Update recipe</h2>
        <RecipeForm
          allFlavours={this.props.flavours}
          onChange={this.updateRecipeState}
          recipe={this.state.recipe}
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
