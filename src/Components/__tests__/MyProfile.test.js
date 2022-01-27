import {
  render, fireEvent, screen, waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from '../../Redux/store/store';
import Header from '../Header';
import Rockets from '../Rockets';
import Missions from '../Missions';
import MyProfile from '../MyProfile';

describe('Myproifle  checking...', () => {
  test('should render and add Thaicom mission to myprofile page ', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact element={<Rockets />} path="/" />
            <Route exact element={<Missions />} path="/missions" />
            <Route exact element={<MyProfile />} path="/myprofile" />
          </Routes>
        </BrowserRouter>
      </Provider>,
    );
    const missionsLinkBtn = screen.getByRole('link', { name: /missions/i });
    fireEvent.click(missionsLinkBtn);
    const JoinmissionBtn = await waitFor(() => screen.findByTestId('9D1B7E0'));
    fireEvent.click(JoinmissionBtn);
    const myProfileLinkBtn = screen.getByRole('link', { name: /missions/i });
    fireEvent.click(myProfileLinkBtn);
    const missionName = screen.getByText('Thaicom');
    expect(missionName).toBeInTheDocument();
  });
});
