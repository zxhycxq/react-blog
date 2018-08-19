import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultStatus = fromJS ({
  focused: false,
  mouseIn: false,
  list: [],
  page:1,
  totalPage:1
})

export default (state = defaultStatus, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      return state.set ('focused', true);
    case constants.SEARCH_BLUR:
      return state.set ('focused', false);
    case constants.MOUSE_IN:
      return state.set ('mouseIn', true);
    case constants.mouse_Leave:
      return state.set ('mouseLeave', true);
    case constants.change_Page:
      return state.set ('changePage', action.page);
    case constants.CHANGE_LIST:
      return state.merge({
        list:action.data,
        totalPage:action.totalPage,
      })
      // return state.set ('list', action.data).set('totalPage',action.totalPage);
    default :
      return state;
  }
}
