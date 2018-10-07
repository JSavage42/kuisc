import React from 'react';
import {Link } from 'react-router-dom';
import './Header.css';
import links from '../../config/headerlinks';
import a from '../../config/externallinks';

const Header = () => (
    <header>
        <ul>
        {
          links.map((l, index) => <Link to={l.path} key={l.name}><li >{l.name}</li></Link>)
        }
        {
          a.map((l, index) => <a href={l.path} key={l.name}><li >{l.name}</li></a>)
        }
        </ul>
    </header>
);

export default Header;