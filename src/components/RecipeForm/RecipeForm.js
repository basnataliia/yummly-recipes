import React, {PropTypes} from 'react';
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
  recipe: PropTypes.object.isRequired,
  allFlavours: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  isAddNew: PropTypes.bool,
  errors: PropTypes.object,
  onStartClick: PropTypes.func
};

export default RecipeForm;
