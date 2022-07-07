import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import AllStarships from './pages/AllStarships/AllStarships';
import StarshipDetails from './pages/StarshipDetails/StarshipDetails';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<AllStarships />}/>
        <Route path='/starship' element={<StarshipDetails />}/>
      </Routes>
    </>
  );
}

export default App;
