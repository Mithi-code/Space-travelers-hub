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
      <h1 className="text-3xl font-bold underline text-red-500">Hello world</h1>
    </div>
  );
}

export default App;
