import {ActionType} from '../action';
import {DEFAULT_GENRE, DEFAULT_VISIBLE_FILMS_COUNT, TabTypes} from '../../const';

const initialState = {
  activeGenre: DEFAULT_GENRE,
  activeTab: TabTypes.OVERVIEW,
  visibleFilmsCount: DEFAULT_VISIBLE_FILMS_COUNT,
  isReviewFormDisabled: false,
};

const viewReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        activeGenre: action.payload,
      };
    case ActionType.INCREASE_VISIBLE_FILMS_COUNT:
      return {
        ...state,
        visibleFilmsCount: state.visibleFilmsCount + DEFAULT_VISIBLE_FILMS_COUNT,
      };
    case ActionType.RESET_GENRE:
      return {
        ...state,
        activeGenre: DEFAULT_GENRE,
      };
    case ActionType.RESET_ACTIVE_TAB:
      return {
        ...state,
        activeTab: TabTypes.OVERVIEW,
      };
    case ActionType.SET_ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.payload,
      };
    case ActionType.RESET_VISIBLE_FILMS_COUNT:
      return {
        ...state,
        visibleFilmsCount: DEFAULT_VISIBLE_FILMS_COUNT,
      };
    case ActionType.SET_IS_REVIEW_FORM_DISABLED:
      return {
        ...state,
        isReviewFormDisabled: action.payload
      };
  }

  return state;
};

export {viewReducer};
