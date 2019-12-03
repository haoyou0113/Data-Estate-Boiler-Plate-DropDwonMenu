import * as constants from './constants';

const defaultState = {
  focused: false,
  listSelected: [],
  checkedValues: [],
  Categories: 'Categories',
  options: [
    { label: 'Accommodation', value: 'Accommodation' },
    { label: 'Tour', value: 'Tour' },
    { label: 'Attractions & Experiences', value: 'Attractions & Experiences' }
  ]
};

export default (state = defaultState, action) => {
  if (action.type === constants.SEARCH_FOCUS) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.focused = true;
    return newState;
  }
  if (action.type === constants.SEARCH_BLUR) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.focused = false;
    return newState;
  }
  if (action.type === constants.LIST_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.listSelected = [...action.value];
    if (newState.listSelected.length == 0) {
      newState.Categories = 'Categories';
    } else if (newState.listSelected.length == 1) {
      newState.Categories = newState.listSelected[0];
    } else {
      newState.Categories = `Categories - ${newState.listSelected.length}`;
    }
    return newState;
  }
  if (action.type === constants.CLEAR_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.listSelected = [];
    newState.Categories = 'Categories';
    return newState;
  }

  return state;
};
