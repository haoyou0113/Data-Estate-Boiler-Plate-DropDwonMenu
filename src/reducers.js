import { combineReducers } from 'redux';
import { reducer as DropDownMenu } from './DropDownMenu/store';

const appName = (state = '', action) => {
  //Action switch statements
  return state;
};

export default combineReducers({
  appName,
  DropDownMenu
});
