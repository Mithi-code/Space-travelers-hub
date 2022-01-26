import {
  render,
  fireEvent,
  screen,
  waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Missions from '../Missions';
import store from '../../Redux/store/store';

describe('Missions checking...', () => {
  test('should render and wait to for missions to render', async () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    const joinMissionBtn = await waitFor(() => screen.findByTestId('9D1B7E0'));
    expect(joinMissionBtn).toBeInTheDocument();
  });

  test('should render and click on join mission and should appear leave mission button and active member tag', async () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    const joinMissionBtn = await waitFor(() => screen.findByTestId('9D1B7E0'));
    fireEvent.click(joinMissionBtn);
    const leaveMissionBtn = await screen.findByText('Leave Mission');
    const activeMember = await screen.findByText('ACTIVE MEMBER');
    expect(leaveMissionBtn).toBeInTheDocument();
    expect(activeMember).toBeInTheDocument();
  });
});
