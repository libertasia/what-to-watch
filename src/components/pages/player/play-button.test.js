import React from 'react';
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import PlayButton from './play-button';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';

const mockStore = configureStore({});
const history = createMemoryHistory();

describe(`Test PlayButton`, () => {
  it(`Should PlayButton render correctly if isPlaying is false`, () => {
    const isPlaying = false;

    render(
        <Provider store={mockStore({})}>
          <Router history={history}>
            <PlayButton isPlaying={isPlaying} onButtonClick={jest.fn()}/>
          </Router>
        </Provider>
    );

    expect(screen.getByText(/Play/i)).toBeInTheDocument();
  });

  it(`Should PlayButton render correctly isPlaying is true`, () => {
    const isPlaying = true;

    render(
        <Provider store={mockStore({})}>
          <Router history={history}>
            <PlayButton isPlaying={isPlaying} onButtonClick={jest.fn()}/>
          </Router>
        </Provider>
    );

    expect(screen.getByText(/Pause/i)).toBeInTheDocument();
  });

  it(`When user click 'PlayButton' should be called handler`, () => {
    const onPlayButtonClickHandler = jest.fn();

    render(
        <Provider store={mockStore({})}>
          <Router history={history}>
            <PlayButton
              isPlaying={false}
              onButtonClick={onPlayButtonClickHandler}/>
          </Router>
        </Provider>
    );

    userEvent.click(screen.getByRole(`button`));

    expect(onPlayButtonClickHandler).toBeCalled();
  });
});
