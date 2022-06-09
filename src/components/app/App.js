import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './App.css'

import AppHeader from "../appHeader/AppHeader";
import MainPage from '../mainPage/MainPage';
import LoginPage from '../loginPage/LoginPage';
import TopTracksPage from '../topTracksPage/TopTracksPage';
import TopArtistsPage from '../topArtistsPage/TopArtistsPage';
import TopGenresPage from '../topGenresPage/TopGenresPage';

function App() {

  return (
    <Router>
      <AppHeader/>
      <Routes>
          <Route exact path="SpotifyStatistics.React-Redux/" element={<LoginPage/>}/>
          <Route exact path="/main" element={<MainPage/>}/>
          <Route exact path="/tracks" element={<TopTracksPage/>}/>
          <Route exact path="/atrists" element={<TopArtistsPage/>}/>
          <Route exact path="/genres" element={<TopGenresPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
