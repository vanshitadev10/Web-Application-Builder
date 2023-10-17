import actionTypes from "../constants/actionTypes";

const initialState = {
  activeTab: 0,
  previewMode: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.index,
      };
    case actionTypes.CHANGE_PREVIEW_MODE:
      return {
        ...state,
        previewMode: action.mode,
      };
    default:
      return state;
  }
}

export default reducer;
