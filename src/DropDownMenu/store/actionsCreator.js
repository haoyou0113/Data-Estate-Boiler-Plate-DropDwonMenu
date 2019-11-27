import * as constants from './constants';
export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
});
export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
});
export const listValue = value => ({
  type: constants.LIST_VALUE,
  value
});
