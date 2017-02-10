import React from 'react';
import TextInput from '../TextInput/TextInput';
import FlavourList from '../FlavourList/FlavourList';

const RecipeForm = ({recipe, allFlavours, onSave, onChange, loading, errors, onStartClick, isAddNew}) => {
  return (
    <form>
      <TextInput
        name="recipeName"
        label="Name"
        value={recipe.recipeName}
        onChange={onChange}
        error={errors.recipeName}/>

      <FlavourList allFlavours={allFlavours} recipe={recipe} onStartClick={onStartClick} isAddNew={isAddNew}/>

      <input
          type="submit"
          disabled={loading}
          value={loading ? 'Saving...' : 'Save'}
          onClick={onSave}/>
    </form>
  );
};

RecipeForm.propTypes = {
  recipe: React.PropTypes.object.isRequired,
  allFlavours: React.PropTypes.array.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool,
  isAddNew: React.PropTypes.bool,
  errors: React.PropTypes.object,
  onStartClick: React.PropTypes.func
};

export default RecipeForm;
