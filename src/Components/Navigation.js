import React, { Component } from 'react';
import {NavLink, Route} from "react-router-dom";

import SearchForm from "./SearchForm";

export default class Navigation extends Component {

 /*
  *Navigates to new search root based on user input
  *@param query
  */
 navigate = (query) => {
    window.location.assign(`/search/${query}`);
  }

	render(){
		return(
			<div className="main-nav">
				<Route path="/search" render={ () => <SearchForm onSubmit={this.navigate}/>}/>
		        <ul>
		          <li><NavLink to='/batman'>Batman</NavLink></li>
		          <li><NavLink to='/cars'>Cars</NavLink></li>
		          <li><NavLink to='/gadgets'>Gadgets</NavLink></li>
		        </ul>
	        </div>
	    );
    }        
}


