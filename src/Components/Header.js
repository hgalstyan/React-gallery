import React from 'react';
import SearchForm from './SearchForm';
import Nav from './Nav';

const Header = (props) => (
  <header>
    <SearchForm
      onSubmit={props.onSubmit}
    />
    <Nav
    />
  </header>
);

export default Header;