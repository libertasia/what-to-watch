import {dataReducer} from './data-reducer';
import {ActionType} from '../action';
import {AuthorizationStatus} from '../../const';

const films = [
  {
    id: 1,
    name: `The Grand Budapest Hotel`,
    posterImage: `http://picsum.photos/248/152?r=${Math.random()}`,
    previewImage: `http://picsum.photos/248/152?r=${Math.random()}`,
    backgroundImage: `http://picsum.photos/248/152?r=${Math.random()}`,
    backgroundColor: `#ffffff`,
    videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    rating: 8.9,
    scoresCount: 240,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    runTime: 99,
    genre: `Comedy`,
    released: 2014,
    isFavorite: false
  },
  {
    id: 2,
    name: `Stand By Me`,
    posterImage: `http://picsum.photos/248/152?r=${Math.random()}`,
    previewImage: `http://picsum.photos/248/152?r=${Math.random()}`,
    backgroundImage: `http://picsum.photos/248/152?r=${Math.random()}`,
    backgroundColor: `#ffffff`,
    videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `Rob Reiner's adaptation of Stephen King's novella The Body is a stirring, touching adventure film which knows the real world is exciting and scary enough just as it is. It's also a coming-of-age movie which celebrates the intensity of childhood friendship, while gently mourning the transience of such bonds. Which is why, unlike its central character, it'll never get old.`,
    rating: 7,
    scoresCount: 180,
    director: `Rob Reiner`,
    starring: [`River Phoenix`, `Wil Wheaton`, `Corey Feldman`, `Jerry O'Connell`],
    runTime: 89,
    genre: `Drama`,
    released: 1986,
    isFavorite: false
  },
  {
    id: 3,
    name: `Amelie`,
    posterImage: `http://picsum.photos/248/152?r=${Math.random()}`,
    previewImage: `http://picsum.photos/248/152?r=${Math.random()}`,
    backgroundImage: `http://picsum.photos/248/152?r=${Math.random()}`,
    backgroundColor: `#ffffff`,
    videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `Despite being caught in her imaginative world, Amelie, a young waitress, decides to help people find happiness. Her quest to spread joy leads her on a journey where she finds true love.`,
    rating: 9,
    scoresCount: 355,
    director: `Jean-Pierre Jeunet`,
    starring: [`Audrey Tautou`, `Mathieu Kassovitz`, `Jamel Debbouze`],
    runTime: 120,
    genre: `Romance`,
    released: 2001,
    isFavorite: false
  },
];

const film = {
  id: 6,
  name: `The Exorcist`,
  posterImage: `http://picsum.photos/248/152?r=${Math.random()}`,
  previewImage: `http://picsum.photos/248/152?r=${Math.random()}`,
  backgroundImage: `http://picsum.photos/248/152?r=${Math.random()}`,
  backgroundColor: `#ffffff`,
  videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  description: `An actress notices dangerous changes in the behavior and physical make-up of her 12-year-old daughter. Meanwhile, a young priest begins to doubt his faith while dealing with his mother's sickness.`,
  rating: 8.8,
  scoresCount: 174,
  director: `William Friedkin`,
  starring: [`Linda Blair`, `Ellen Burstyn`, `Jason Miller`, `Max von Sydow`],
  runTime: 128,
  genre: `Thriller`,
  released: 1973,
  isFavorite: true
};

const reviews = [
  {
    id: 1,
    user: {
      id: 17,
      name: `Emely`
    },
    rating: 9.8,
    comment: `This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted.`,
    date: `2021-01-27T13:18:14.644Z`
  },
  {
    id: 2,
    user: {
      id: 13,
      name: `Zak`
    },
    rating: 8.4,
    comment: `This movie is perfect in all its categories: credits, sound track, production, casting, writing, photography, editing, acting, and direction.\nI was amazed with the freedom of the use of the camera. This movie will change the way movies are made. Slow-mo, stills, black and white, and color were all used to brilliant effect.`,
    date: `2021-01-27T13:18:14.644Z`
  },
  {
    id: 3,
    user: {
      id: 17,
      name: `Emely`
    },
    rating: 5.7,
    comment: `This movie really touched my heart, it really is the best movie of the year and everyone should see this masterpiece.`,
    date: `2021-02-06T13:18:14.644Z`
  }
];
describe(`Data-Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    const initialState = {
      authorizationStatus: AuthorizationStatus.INIT,
      isDataLoaded: false,
      isDataLoading: false,
      isPromoLoaded: false,
      isPromoLoading: false,
      isFilmLoaded: false,
      isReviewsLoaded: false,
      isFilmsListLoading: false,
      films: [],
      film: {
        backgroundColor: ``,
        backgroundImage: ``,
        description: ``,
        director: ``,
        genre: ``,
        id: -1,
        isFavorite: false,
        name: ``,
        posterImage: ``,
        previewImage: ``,
        previewVideoLink: ``,
        rating: 0,
        released: 0,
        runTime: 0,
        scoresCount: 0,
        starring: [``],
        videoLink: ``
      },
      reviews: [],
      favoriteFilms: [],
      promo: {
        backgroundImage: ``,
        genre: ``,
        name: ``,
        posterImage: ``,
        released: 0,
      },
    };
    expect(dataReducer(undefined, {}))
      .toEqual(initialState);
  });

  it(`Reducer should update films and isDataLoaded status by a given value`, () => {
    const state = {
      films: [],
      isDataLoaded: false,
    };
    const loadFilmsAction = {
      type: ActionType.LOAD_FILMS,
      payload: {films, isDataLoaded: true},
    };

    expect(dataReducer(state, loadFilmsAction))
      .toEqual({films, isDataLoaded: true});
  });
  it(`Reducer should change isFilmsListLoading status by a given value`, () => {
    const state = {
      isFilmsListLoading: false,
      otherFiled: `shouldNotChange`,
    };
    const setIsFilmsListLoadingAction = {
      type: ActionType.SET_IS_FILMS_LIST_LOADING,
      payload: true,
    };

    expect(dataReducer(state, setIsFilmsListLoadingAction))
      .toEqual({isFilmsListLoading: true, otherFiled: `shouldNotChange`});
  });
  it(`Reducer should update promo Film and isPromoLoaded status by a given value`, () => {
    const state = {
      promo: {},
      isPromoLoaded: false,
    };
    const loadPromoFilmAction = {
      type: ActionType.LOAD_PROMO_FILM,
      payload: {film, isPromoLoaded: true},
    };

    expect(dataReducer(state, loadPromoFilmAction))
      .toEqual({promo: film, isPromoLoaded: true});
  });
  it(`Reducer should change isPromoLoading status by a given value`, () => {
    const state = {
      isPromoLoading: false,
      otherFiled: `shouldNotChange`,
    };
    const setIsPromoLoadingAction = {
      type: ActionType.SET_IS_PROMO_LOADING,
      payload: true,
    };

    expect(dataReducer(state, setIsPromoLoadingAction))
      .toEqual({isPromoLoading: true, otherFiled: `shouldNotChange`});
  });
  it(`Reducer should update favoriteFilms by a given value`, () => {
    const state = {
      favoriteFilms: [],
    };
    const loadFavoriteFilmsListAction = {
      type: ActionType.LOAD_FAVORITE_FILMS_LIST,
      payload: films,
    };

    expect(dataReducer(state, loadFavoriteFilmsListAction))
      .toEqual({favoriteFilms: films});
  });
  it(`Reducer should update Film and isFilmLoaded status by a given value`, () => {
    const state = {
      film: {},
      isFilmLoaded: false,
    };
    const loadFilmAction = {
      type: ActionType.LOAD_FILM,
      payload: {film, isFilmLoaded: true},
    };

    expect(dataReducer(state, loadFilmAction))
      .toEqual({film, isFilmLoaded: true});
  });
  it(`Reducer should update reviews and isReviewsLoaded status by a given value`, () => {
    const state = {
      reviews: [],
      isReviewsLoaded: false,
    };
    const loadReviewsAction = {
      type: ActionType.LOAD_REVIEWS,
      payload: {reviews, isReviewsLoaded: true},
    };

    expect(dataReducer(state, loadReviewsAction))
      .toEqual({reviews, isReviewsLoaded: true});
  });
  it(`Reducer should update authorizationStatus by a given value`, () => {
    const state = {authorizationStatus: AuthorizationStatus.INIT};
    const requiredAuthorizationAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH
    };

    expect(dataReducer(state, requiredAuthorizationAction))
      .toEqual({authorizationStatus: AuthorizationStatus.AUTH});
  });
  it(`Reducer should update film/promo film by a given value`, () => {
    const state = {
      film: {id: 6},
      promo: {id: 6},
    };
    const setFavoriteStatusAction = {
      type: ActionType.SET_FAVORITE_STATUS,
      payload: film,
    };

    expect(dataReducer(state, setFavoriteStatusAction))
      .toEqual({film, promo: film});
  });
});
