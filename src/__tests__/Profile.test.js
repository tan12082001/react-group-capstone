import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Profile from '../Components/MyProfilePage';
import store from '../redux/store';

describe('MyProfile page Test case', () => {
  test('Case 1: MyProfile Page test', () => {
    const check = render(<Provider store={store}><Profile /></Provider>);
    expect(check).toMatchSnapshot();
  });
});
