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

describe('Header checking...', () => {
  test('should render and go to mission page', async () => {
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
    const missionName = await waitFor(() => screen.getByText('Thaicom'));
    expect(missionName).toBeInTheDocument();
  });
  test('should render and go to Myprofile page', () => {
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
    const myProfileBtn = screen.getByRole('link', { name: /my profile/i });
    fireEvent.click(myProfileBtn);
    const profileHeading = screen.getByRole('heading', { name: /my missions/i });
    expect(profileHeading).toBeInTheDocument();
  });
});
