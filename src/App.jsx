import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { MovieDetail } from './components/MovieDetail';
import { MoviesList } from './components/MoviesList';
import Playlist from './components/Playlist';
import TopBar from './components/TopBar';

const App = () => (
  <>
    <BrowserRouter>
      <TopBar />
      <Switch>
        <Route exact path="/movies" render={(props) => <MoviesList {...props} />} />
        <Route exact path="/movies/:id" render={(props) => <MovieDetail {...props} />} />
        <Route exact path="/playlist" render={(props) => <Playlist {...props} />} />
        <Route exact path="**" render={() => <Redirect to="/movies" />} />
      </Switch>
    </BrowserRouter>
  </>
);

export default App;