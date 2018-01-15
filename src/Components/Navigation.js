import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

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
				<SearchForm onSubmit={this.navigate}/>
		        <ul>
		          <li><NavLink to='/search/batman'>Batman</NavLink></li>
		          <li><NavLink to='/search/cars'>Cars</NavLink></li>
		          <li><NavLink to='/search/gadgets'>Gadgets</NavLink></li>
		        </ul>
	        </div>
	    );
    }        
}


