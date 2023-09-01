import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Profile from '../Components/MyProfilePage';
import store from '../redux/store';

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
