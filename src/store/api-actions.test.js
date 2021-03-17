import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../services/api';
import {ActionType} from './action';
import {fetchFilmsList} from './api-actions';
import {APIRoute} from '../const';

const api = createAPI(() => {});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = fetchFilmsList();

    apiMock
      .onGet(APIRoute.FILMS)
      .reply(200, [
        {
          "name": `test`,
          "poster_image": `test`,
          "preview_image": `test`,
          "background_image": `test`,
          "background_color": `test`,
          "description": `test`,
          "rating": 0,
          "scores_count": 0,
          "director": `test`,
          "starring": [],
          "run_time": 0,
          "genre": `test`,
          "released": 0,
          "id": 1,
          "is_favorite": false,
          "video_link": `test`,
          "preview_video_link": `test`
        }
      ]);

    return filmsLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(3);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.SET_IS_FILMS_LIST_LOADING,
        payload: true,
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.LOAD_FILMS,
        payload: {
          films: [
            {
              id: 1,
              name: `test`,
              rating: 0,
              description: `test`,
              director: `test`,
              starring: [],
              genre: `test`,
              released: 0,
              posterImage: `test`,
              previewImage: `test`,
              backgroundImage: `test`,
              backgroundColor: `test`,
              scoresCount: 0,
              runTime: 0,
              isFavorite: false,
              videoLink: `test`,
              previewVideoLink: `test`,
            }
          ],
          isDataLoaded: true,
        }
      });
      expect(dispatch).toHaveBeenNthCalledWith(3, {
        type: ActionType.SET_IS_FILMS_LIST_LOADING,
        payload: false,
      });
    });
  });
});
