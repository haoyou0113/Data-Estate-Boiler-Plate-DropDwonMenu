import * as constants from './constants';

const defaultState = {
  focused: false,
  list: ['Accommodation', 'Tour', 'Attractions & Experiences'],
  listSelected: []
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
    newState.listSelected = [...newState.listSelected, action.value];
    return newState;
  }
  //   switch (action.type) {
  //     case constants.SEARCH_FOCUS:
  //       const newState = JSON.parse(JSON.stringify(state));
  //       newState.focused = true;
  //       return newState;
  //     // 结合之前的对象返回新的对象 类似return newstate
  //     case constants.SEARCH_BLUR:
  //       const newState = JSON.parse(JSON.stringify(state));
  //       newState.focused = false;
  //       return newState;
  //     default:
  return state;
};
