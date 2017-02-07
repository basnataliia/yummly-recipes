import React, { Component } from 'react';
import {connect} from 'react-redux';
import RecipeList from '../components/RecipeList/RecipeList';
import { Link } from 'react-router';

class App extends Component {

  render() {
    return (
        <div className="App-header">
          <h1>Recipes</h1>
          <RecipeList recipes={this.props.recipes}/>
          <Link to={'/add-recipe'}>Add New Recipe</Link>
        </div>
    );
  }
}

// export default App;
function mapStateToProps(state, ownProps) {
  return {
    recipes: state.recipes
  };
}
export default connect(mapStateToProps)(App);
