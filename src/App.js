import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";


import Home from "./Components/Home";
import Header from './Components/Header';
import Gallery from './Components/Gallery';
import PathNotFound from './Components/PathNotFound';

class App extends React.Component {

navigate = (query) => {
    window.location.assign(`/search/${query}`);
}


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
          <Header onSubmit={this.navigate}/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/search/:query' render={(props)=> <Gallery  search={props.match.params.query}/>} />
            <Route exact path='/batman' render={()=><Gallery search="batman"/>} />
            <Route exact path='/cars' render={()=><Gallery search="cars"/>} />
            <Route exact path='/gadgets' render={()=><Gallery search="gadgets"/>} />
            <Route path='*' component={PathNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
