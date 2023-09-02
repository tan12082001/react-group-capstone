import React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { screen, render } from '@testing-library/react';
import Profile from '../Components/MyProfilePage';
import store from '../redux/store';
import configureMockStore from 'redux-mock-store';
import FilteredMissions from '../Components/MissionComponents/FilterMissions';
// import FilteredRockets from '../Components/RocketComponents/FilterRockets';

const mock = configureMockStore([]);

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
  test('check the filtered missions', () => {
    const store = mock({
      missions: {
        missions: [
          {
            missionName: 'Mission 1',
            missionJoin: true,
          },
          {
            missionName: 'Mission 2',
            missionJoin: false,
          },
          {
            missionName: 'Mission 3',
            missionJoin: true,
          }
        ]
      },

    })
    const checkt = render(<Provider store={store}><FilteredMissions /></Provider>);
    // expect(checkt).toMatchSnapshot(); this is also giving the same output as below lines.
    expect(checkt.getByText('Mission 1')).toBeVisible();
    expect(checkt.getByText('Mission 3')).toBeVisible();
  })
  /* test('check filtered rockets', () => {
    const store = mock({
      rockets: {
        rockets: [
          {
            name: 'Rocket 1',
            reserved: true,
          }
        ]
      }
    })
    render(<Provider store={store}><FilteredRockets /></Provider>);
    expect(screen.getByText('Rocket 1')).toBeVisible();
  }) */
});
