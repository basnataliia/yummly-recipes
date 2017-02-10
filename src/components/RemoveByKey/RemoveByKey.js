import {PropTypes} from 'react';

export default function RemoveByKey(myObj, deleteKey) {
  return Object.keys(myObj)
    .filter(key => key !== deleteKey)
    .reduce((result, current) => {
      result[current] = myObj[current];
      return result;
  }, {});
};

RemoveByKey.propTypes = {
  obj: PropTypes.object.isRequired,
  deleteKey: PropTypes.string.isRequired
};
