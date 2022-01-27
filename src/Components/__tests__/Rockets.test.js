import {
  render, fireEvent, screen, waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../Redux/store/store';
import Rockets from '../Rockets';

describe('Rockets checking...', () => {
  test('should render and wait to for Rockets to render', async () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    const reserveRocketBtn = await waitFor(() => screen.findByTestId('falcon1'));
    expect(reserveRocketBtn).toBeInTheDocument();
  });

  test('should render and click on reverse Rocket and should appear cancel reservation button and reserved tag', async () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    const reserveRocketBtn = await waitFor(() => screen.findByTestId('falcon1'));
    fireEvent.click(reserveRocketBtn);
    const cancelBtn = await screen.findByText('Cancel Reservation');
    const reserved = await screen.findByText('Reserved');
    expect(cancelBtn).toBeInTheDocument();
    expect(reserved).toBeInTheDocument();
  });
});
