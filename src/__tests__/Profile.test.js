import React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { screen, render } from '@testing-library/react';
import Profile from '../Components/MyProfilePage';
import store from '../redux/store';

describe('Profile page testing', () => {
  test('Check if MyProfile component is rendered correctly', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <Profile />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('Check for inital render', () => {
    render(<Provider store={store}><Profile /></Provider>);
    expect(screen.getByText('My Missions')).toBeVisible();
    expect(screen.getByText('No current missions')).toBeVisible();
    expect(screen.getByText('My Rockets')).toBeVisible();
    expect(screen.getByText('No rockets reserved')).toBeVisible();
  });
});
