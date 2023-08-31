import '@testing-library/jest-dom';
import React from 'react';
import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Missions from '../Components/MissionsPage';
import store from '../redux/store';
import EachMission from '../Components/MissionComponents/EachMission';

describe('Test for Missions', () => {
  test('Case 1: Missions page loading', () => {
    render(<Provider store={store}><Missions /></Provider>);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
  test('Case 2: Missions page snapshot', () => {
    const check = render(<Provider store={store}><Missions /></Provider>);
    expect(check).toMatchSnapshot();
  });
  test('Case 3: Test for data rendering', () => {
    const mission = {
      missionName: 'Mission 1',
      missionDescription: 'This is the first mission.',
      missionId: '123456',
      missionJoin: false,
    };
    render(<Provider store={store}><EachMission mission={mission} /></Provider>);
    expect(screen.getByText('Mission 1')).toBeInTheDocument();
    expect(screen.getByText('This is the first mission.')).toBeInTheDocument();
  });
  test('Case 4: Test for Join Mission', () => {
    const mission = {
      missionName: 'Mission 1',
      missionDescription: 'This is the first mission.',
      missionId: '123456',
      missionJoin: false,
    };
    render(<Provider store={store}><EachMission mission={mission} /></Provider>);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Join Mission');
    expect(screen.getByText('NOT A MEMBER')).toBeInTheDocument();
  });
  test('Case 5: Test for Leave Mission', () => {
    const mission = {
      missionName: 'Mission 1',
      missionDescription: 'This is the first mission.',
      missionId: '123456',
      missionJoin: true,
    };
    render(<Provider store={store}><EachMission mission={mission} /></Provider>);
    const button = screen.getByRole('button');
    expect(button.textContent).toBe('Leave Mission');
    expect(screen.getByText('Active Memeber')).toBeVisible();
  });
});
