import { Route, Routes } from 'react-router';
import Header from './Components/Header';
import Missions from './Components/Missions';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact element={<Missions />} path="/missions" />
      </Routes>
    </div>
  );
}

export default App;
