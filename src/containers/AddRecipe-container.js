import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as recipeActions from '../actions/recipeActions';
import RecipeForm from '../components/RecipeForm/RecipeForm';
import GetRandomInt from '../components/GetRandomInt/GetRandomInt';
import { Link } from 'react-router';

const flavoursObject = {
  bitter: 0,
  meaty: 0,
  piquant: 0,
  salty: 0,
  sour: 0,
  sweet: 0
};

class AddRecipeContainer extends React.Component {

  constructor(props,context) {
    super(props, context);

    this.state = {
      recipe: Object.assign(
        {},
        this.props.recipe
      ),
      errors: {},
      // recipeFlavoursTest: {
      //   bitter: 0,
      //   meaty: 0,
      //   piquant: 0,
      //   salty: 0,
      //   sour: 0,
      //   sweet: 0
      // },
    };

    this.updateRecipeState = this.updateRecipeState.bind(this);
    this.createRecipe = this.createRecipe.bind(this);
    this.onStartClick = this.onStartClick.bind(this);
    // this.updateFlavorsState = this.updateFlavorsState.bind(this);
  }

  updateRecipeState(event) {
    const field = event.target.name;
    let recipe = this.state.recipe;
    recipe[field] = event.target.value;
    const randomNumber = GetRandomInt(1000, 10000);
    recipe['id'] = `${event.target.value}-${randomNumber}`;
    recipe['flavors'] = flavoursObject;
    return this.setState({recipe: recipe});
  }

  createRecipe(event) {
    event.preventDefault();
    this.props.actions.createRecipe(this.state.recipe);
    this.context.router.push('/');
  }

  // updateFlavorsState(obj) {
  //   var testval = {...this.state.recipeFlavoursTest, ...{flavoursObject: obj}};
  //   return this.setState({
  //     recipeFlavoursTest: testval
  //   });
  //
  // }

  onStartClick(value, name) {
    //  return flavoursObject[name] = value;

    return {...flavoursObject, ...{flavoursObjectT: flavoursObject[name] = value}};
    // var testVal = {
    //   bitter: 5,
    //   meaty: 0,
    //   piquant: 0,
    //   salty: 2,
    //   sour: 0,
    //   sweet: 1
    // }
    // return this.setState({recipeFlavoursTest: testVal});
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
