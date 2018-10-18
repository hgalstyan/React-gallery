import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

import SearchForm from "./SearchForm";

export default class Nav extends Component {

 /*
  *Navigates to new search root based on user input
  *@param query
  */
 

	render(){
		return(
			<div className="main-nav">
		        <ul>
		          <li><NavLink to='/batman'>Batman</NavLink></li>
		          <li><NavLink to='/cars'>Cars</NavLink></li>
		          <li><NavLink to='/gadgets'>Gadgets</NavLink></li>
		        </ul>
	        </div>
	    );
    }        
}


