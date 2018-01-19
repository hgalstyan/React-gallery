import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";


import Home from "./Components/Home";
import Navigation from './Components/Navigation';
import ImageWrapper from './Components/ImageWrapper';
import PathNotFound from './Components/PathNotFound';
import SearchRequest from './Components/SearchRequest';

class App extends React.Component {

constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Navigation />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/search' component={SearchRequest}/>
            <Route path='/search/:query' render={(props)=> <ImageWrapper  search={props.match.params.query}/>} />
            <Route exact path='/batman' render={()=><ImageWrapper search="batman"/>} />
            <Route exact path='/cars' render={()=><ImageWrapper search="cars"/>} />
            <Route exact path='/gadgets' render={()=><ImageWrapper search="gadgets"/>} />
            <Route path='*' component={PathNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
