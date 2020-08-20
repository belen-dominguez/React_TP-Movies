import React, { useState, useEffect }  from 'react';
import './components/styles/main.scss';
import {   BrowserRouter as Router,  Switch,  Route,  Link, Redirect} from "react-router-dom";
import Header from "./components/navigation/Header"
import Home from "./components/layout/Home"
import Movies from "./components/layout/Movies"
import Tv from "./components/layout/Tv"
import Person from "./components/pages/Person"
import DisplayAll from "./components/pages/DisplayAll"
import SearchForm from  "./components/Cards/SearchForm"
import Creditos from './components/character/Creditos';
import HomeMovie from './components/layout/HomeMovie';
import Reparto from './components/movie/Reparto';
import Similares from './components/movie/Similares';
import Videos from './components/movie/Videos';
import Episodios from './components/movie/Episodios';
import Info from './components/movie/Info';

function App() {
 
 

 

  return (
    <Router>
    <div className="App">
        <Header />

        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            {/* <Route exact path="/person/:select/:child">
                <Person />
            </Route> */}

            <Route exact path="/person/:select/info">
                <Person />
            </Route>
            <Route exact path="/person/:select/credits">
                <Person />
            </Route>
            <Route exact path="/movie">
                <Movies />
            </Route>
            <Route exact path="/tv">
                <Tv />
            </Route>
            
            <Route exact path="/genre/:from/:genre/">
                <DisplayAll />
            </Route>
            <Route  exact path="/genre/:from/:genre/:num">
                <DisplayAll  />
            </Route>
            <Route exact path="/search/:id">
                <SearchForm  />
            </Route>
           
            <Route exact path="/:from/:uid/info">
                <HomeMovie />
            </Route>
            <Route exact path="/:from/:uid/reparto">
                <HomeMovie />
            </Route>
            <Route exact path="/:from/:uid/similares">
                <HomeMovie />
            </Route>
            <Route exact path="/:from/:uid/videos">
                <HomeMovie />
            </Route>
            <Route exact path="/:from/:uid/episodios">
                <HomeMovie />
            </Route>
            
            {/* <Route exact path="/:from/:uid/:child">
                <HomeMovie />
            </Route> */}
            <Route exact path="/search/:id/:num">
                <SearchForm />
            </Route>
            
            
             <Route exact path="/:from/:category/">
                <DisplayAll />
            </Route>
            <Route exact path="/:from/:category/:num">
                <DisplayAll />
            </Route>
         </Switch>
    </div>
    </Router>
  );
}

export default App;
