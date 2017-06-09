import * as cst from '../constants/person.js';

const reducer = (
  state = [
    { name: 'soufiane', age: '24' },
    { name: 'devlin', age: '25' },
    { name: 'sixuan', age: '22' },
  ]
  , action) => {
  switch (action.type) {
    case cst.ADD: {
      return [...state, action.payload];
    }
    default: return state;
  }
};

export default reducer;
