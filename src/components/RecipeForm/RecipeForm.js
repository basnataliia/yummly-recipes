import React from 'react';
import TextInput from '../TextInput/TextInput';
import FlavourList from '../FlavourList/FlavourList';

const RecipeForm = ({recipe, allFlavours, onSave, onChange, loading, errors}) => {
  return (
    <form>
      <TextInput
        name="recipeName"
        lable="Name"
        value={recipe.recipeName}
        onChange={onChange}
        error={errors.recipeName}/>

      <FlavourList allFlavours={allFlavours}/>

      <input
          type="submit"
          disabled={loading}
          value={loading ? 'Saving...' : 'Save'}
          onClick={onSave}/>
    </form>
  );
};

RecipeForm.PropTypes = {
  recipe: React.PropTypes.object.isRequired,
  allFlavours: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default RecipeForm;
