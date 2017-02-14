import React, {PropTypes} from 'react';
import RecipeItem from '../RecipeItem/RecipeItem';
import {GridList} from 'material-ui/GridList';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding:'20px 0px',
  },
    gridList: {
    overflowY: 'auto',
  },
};

const RecipeList = ({recipes, deleteRecipe}) => {
  return (
    <div style={styles.root}>
    <GridList
      style={styles.gridList}
      cols={3}
      cellHeight={200}
      padding={20}
      >
      {recipes.map(recipe =>
        <RecipeItem key={recipe.id} recipe={recipe} deleteRecipe={deleteRecipe} />
      )}
    </GridList>
  </div>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired,
  deleteRecipe: PropTypes.func.isRequired,
};

export default RecipeList;
