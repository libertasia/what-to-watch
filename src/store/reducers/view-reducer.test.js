import {viewReducer} from './view-reducer';
import {ActionType} from '../action';
import {DEFAULT_GENRE, DEFAULT_VISIBLE_FILMS_COUNT, TabTypes} from '../../const';

describe(`View-Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    const initialState = {
      activeGenre: DEFAULT_GENRE,
      activeTab: TabTypes.OVERVIEW,
      visibleFilmsCount: DEFAULT_VISIBLE_FILMS_COUNT,
      isReviewFormDisabled: false,
    };
    expect(viewReducer(undefined, {}))
      .toEqual(initialState);
  });

  it(`Reducer should change activeGenre by a given value`, () => {
    const state = {
      activeGenre: DEFAULT_GENRE,
      otherFiled: `shouldNotChange`,
    };
    const changeGenreAction = {
      type: ActionType.CHANGE_GENRE,
      payload: `someGenre`,
    };

    expect(viewReducer(state, changeGenreAction))
      .toEqual({activeGenre: `someGenre`, otherFiled: `shouldNotChange`});
  });
  it(`Reducer should increase visibleFilmsCount by a constant value`, () => {
    const state = {
      visibleFilmsCount: DEFAULT_VISIBLE_FILMS_COUNT,
      otherFiled: `shouldNotChange`,
    };
    const increaseVisibleFilmsCountAction = {
      type: ActionType.INCREASE_VISIBLE_FILMS_COUNT,
    };

    expect(viewReducer(state, increaseVisibleFilmsCountAction))
      .toEqual({visibleFilmsCount: state.visibleFilmsCount + DEFAULT_VISIBLE_FILMS_COUNT, otherFiled: `shouldNotChange`});
  });
  it(`Reducer should reset activeGenre to a default value`, () => {
    const state = {
      activeGenre: `someGenre`,
      otherFiled: `shouldNotChange`,
    };
    const resetGenreAction = {
      type: ActionType.RESET_GENRE,
    };

    expect(viewReducer(state, resetGenreAction))
      .toEqual({activeGenre: DEFAULT_GENRE, otherFiled: `shouldNotChange`});
  });
  it(`Reducer should reset activeTab to a default value`, () => {
    const state = {
      activeTab: `someTitle`,
      otherFiled: `shouldNotChange`,
    };
    const resetActiveTabAction = {
      type: ActionType.RESET_ACTIVE_TAB,
    };

    expect(viewReducer(state, resetActiveTabAction))
      .toEqual({activeTab: TabTypes.OVERVIEW, otherFiled: `shouldNotChange`});
  });
  it(`Reducer should set activeTab by a given value`, () => {
    const state = {
      activeTab: `someTitle`,
      otherFiled: `shouldNotChange`,
    };
    const setActiveTabAction = {
      type: ActionType.SET_ACTIVE_TAB,
      payload: `newTitle`,
    };

    expect(viewReducer(state, setActiveTabAction))
      .toEqual({activeTab: `newTitle`, otherFiled: `shouldNotChange`});
  });
  it(`Reducer should reset visibleFilmsCount to a default value`, () => {
    const state = {
      visibleFilmsCount: 23,
      otherFiled: `shouldNotChange`,
    };
    const resetVisibleFilmsCountAction = {
      type: ActionType.RESET_VISIBLE_FILMS_COUNT,
    };

    expect(viewReducer(state, resetVisibleFilmsCountAction))
      .toEqual({visibleFilmsCount: DEFAULT_VISIBLE_FILMS_COUNT, otherFiled: `shouldNotChange`});
  });
  // WIP
  // it(`Reducer should change isReviewFormDisabled status by a given value`, () => {
  //   const state = {
  //     visibleFilmsCount: 23,
  //     otherFiled: `shouldNotChange`,
  //   };
  //   const resetVisibleFilmsCountAction = {
  //     type: ActionType.RESET_VISIBLE_FILMS_COUNT,
  //   };

  //   expect(viewReducer(state, resetVisibleFilmsCountAction))
  //     .toEqual({visibleFilmsCount: DEFAULT_VISIBLE_FILMS_COUNT, otherFiled: `shouldNotChange`});
  // });
});
