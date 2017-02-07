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

function mapStateToProps(state, ownProps) {
  let recipe = {id: '', recipeName: ''};

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
