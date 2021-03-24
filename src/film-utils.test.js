import {getFilmsByGenre, getGenreList, adaptFilmToClient, getTimeInUserFormat, getNumber} from './film-utils';
import {DEFAULT_GENRE} from './const';
import {mockFilms, mockFilm} from './test-mocks';

describe(`FilmUtils work correctly`, () => {
  it(`getFilmsByGenre work correctly`, () => {
    const genre = DEFAULT_GENRE;
    const expectedResult = mockFilms;

    expect(getFilmsByGenre(mockFilms, genre)).toEqual(expectedResult);
  });
  it(`getFilmsByGenre work correctly`, () => {
    const genre = `Drama`;
    const expectedResult = [{
      id: 2,
      name: `Stand By Me`,
      posterImage: `https://i.picsum.photos/id/604/248/152.jpg?hmac=Yu4rnPqlL8pPa8b7cdPSosfFApQXtQmy56BW52elqto`,
      previewImage: `https://i.picsum.photos/id/604/248/152.jpg?hmac=Yu4rnPqlL8pPa8b7cdPSosfFApQXtQmy56BW52elqto`,
      backgroundImage: `https://i.picsum.photos/id/604/248/152.jpg?hmac=Yu4rnPqlL8pPa8b7cdPSosfFApQXtQmy56BW52elqto`,
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
      isFavorite: true
    },
    {
      id: 3,
      name: `Amelie`,
      posterImage: `https://i.picsum.photos/id/604/248/152.jpg?hmac=Yu4rnPqlL8pPa8b7cdPSosfFApQXtQmy56BW52elqto`,
      previewImage: `https://i.picsum.photos/id/604/248/152.jpg?hmac=Yu4rnPqlL8pPa8b7cdPSosfFApQXtQmy56BW52elqto`,
      backgroundImage: `https://i.picsum.photos/id/604/248/152.jpg?hmac=Yu4rnPqlL8pPa8b7cdPSosfFApQXtQmy56BW52elqto`,
      backgroundColor: `#ffffff`,
      videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      description: `Despite being caught in her imaginative world, Amelie, a young waitress, decides to help people find happiness. Her quest to spread joy leads her on a journey where she finds true love.`,
      rating: 9,
      scoresCount: 355,
      director: `Jean-Pierre Jeunet`,
      starring: [`Audrey Tautou`, `Mathieu Kassovitz`, `Jamel Debbouze`],
      runTime: 120,
      genre: `Drama`,
      released: 2001,
      isFavorite: true
    }];

    expect(getFilmsByGenre(mockFilms, genre)).toEqual(expectedResult);
  });
  it(`getGenreList work correctly`, () => {
    const expectedResult = [DEFAULT_GENRE, `Comedy`, `Drama`];

    expect(getGenreList(mockFilms)).toEqual(expectedResult);
  });
  it(`adaptFilmToClient work correctly`, () => {
    const film = {
      "id": 6,
      "name": `The Exorcist`,
      "poster_image": `https://i.picsum.photos/id/604/248/152.jpg?hmac=Yu4rnPqlL8pPa8b7cdPSosfFApQXtQmy56BW52elqto`,
      "preview_image": `https://i.picsum.photos/id/604/248/152.jpg?hmac=Yu4rnPqlL8pPa8b7cdPSosfFApQXtQmy56BW52elqto`,
      "background_image": `https://i.picsum.photos/id/604/248/152.jpg?hmac=Yu4rnPqlL8pPa8b7cdPSosfFApQXtQmy56BW52elqto`,
      "background_color": `#ffffff`,
      "video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      "description": `An actress notices dangerous changes in the behavior and physical make-up of her 12-year-old daughter. Meanwhile, a young priest begins to doubt his faith while dealing with his mother's sickness.`,
      "rating": 8.8,
      "scores_count": 174,
      "director": `William Friedkin`,
      "starring": [`Linda Blair`, `Ellen Burstyn`, `Jason Miller`, `Max von Sydow`],
      "run_time": 128,
      "genre": `Thriller`,
      "released": 1973,
      "is_favorite": true,
    };
    const expectedResult = mockFilm;

    expect(adaptFilmToClient(film)).toEqual(expectedResult);
  });
  it(`getNumber work correctly`, () => {
    const number = 4;
    const expectedResult = `04`;

    expect(getNumber(number)).toEqual(expectedResult);
  });
  it(`getNumber work correctly`, () => {
    const number = 23;
    const expectedResult = `23`;

    expect(getNumber(number)).toEqual(expectedResult);
  });
  it(`getTimeInUserFormat work correctly`, () => {
    const timeHour = 45678;
    const timeNoHour = 564;
    const expectedResultHours = `12:41:18`;
    const expectedResultNoHours = `09:24`;

    expect(getTimeInUserFormat(timeHour, true)).toEqual(expectedResultHours);
    expect(getTimeInUserFormat(timeNoHour, false)).toEqual(expectedResultNoHours);
  });
});
