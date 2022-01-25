import { Route, Routes } from 'react-router';
import Header from './Components/Header';
import Missions from './Components/Missions';
import MyProfile from './Components/MyProfile';
import Rockets from './Components/Rockets';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact element={<Rockets />} path="/" />
        <Route exact element={<Missions />} path="/missions" />
        <Route exact element={<MyProfile />} path="/myprofile" />
      </Routes>
    </div>
  );
}

export default App;
