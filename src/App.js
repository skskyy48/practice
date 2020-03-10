import React from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom'
import {
  Home,
  About,
  Fixtures,
  Leauges,
  FixtureInfo,
  TeamInfo
} from './pages'
import Header from './component/Header'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className='App'>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route exact path="/fixtures" component={Fixtures}/>
      <Route exact path="/leagues" component={Leauges}/>
      <Route path="/fixtures/:id" component={FixtureInfo}/>
      <Route path ="/team/:id" component={TeamInfo}/>
      </div>
    </BrowserRouter>
  );
}

export default App;