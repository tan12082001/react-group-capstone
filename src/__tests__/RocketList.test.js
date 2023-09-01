// rocketList.test.js
import React from 'react';
import { render, fireEvent, queryByText } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import RocketList from '../Components/RocketComponents/RocketList';
import { reserveRocket, cancelReservation } from '../redux/rocketsSlice';

// Mock the useSelector and useDispatch hooks
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('RocketList', () => {
  const rockets = [
    {
      id: 1,
      name: 'Falcon 9',
      type: 'Reusable',
      reserved: false,
      flickr_images: ['rocket1.jpg'],
    },
    {
      id: 2,
      name: 'Starship',
      type: 'Reusable',
      reserved: true,
      flickr_images: ['rocket2.jpg'],
    },
  ];

  beforeEach(() => {
    useSelector.mockReturnValue(rockets);
    useDispatch.mockReturnValue(jest.fn());
  });

  it('should render the list of rockets', () => {
    const { getByText, getByAltText } = render(<RocketList />);
    

    // Verify if the rocket details are rendered correctly
    const rocket1Name = getByText('Falcon 9');
    const rocket1Type = getByText('Reusable');
    const rocket1ReserveButton = getByText('Reserve Rocket');
    const rocket1Image = getByAltText('Falcon 9');

    expect(rocket1Name).toBeInTheDocument();
    expect(rocket1Type).toBeInTheDocument();
    expect(rocket1ReserveButton).toBeInTheDocument();
    expect(rocket1Image).toBeInTheDocument();

    const rocket2Name = getByText('Starship');
    const rocket2Type = getByText('Reusable');
    const rocket2ReserveButton = getByText('Cancel Reservation');
    const rocket2Image = getByAltText('Starship');

    expect(rocket2Name).toBeInTheDocument();
    expect(rocket2Type).toBeInTheDocument();
    expect(rocket2ReserveButton).toBeInTheDocument();
    expect(rocket2Image).toBeInTheDocument();
  });

  it('should call reserveRocket action when reserve button is clicked for an unreserved rocket', () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    const { getByText } = render(<RocketList />);
    const reserveButton = getByText('Reserve Rocket');

    fireEvent.click(reserveButton);

    expect(dispatch).toHaveBeenCalledWith(reserveRocket(1));
  });

  it('should call cancelReservation action when reserve button is clicked for a reserved rocket', () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    const { getByText } = render(<RocketList />);
    const reserveButton = getByText('Cancel Reservation');

    fireEvent.click(reserveButton);

    expect(dispatch).toHaveBeenCalledWith(cancelReservation(2));
  });
});