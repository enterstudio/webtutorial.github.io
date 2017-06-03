import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Link} from 'react-router-dom';
import Header from './Header.jsx';
import Rute from './Rute.jsx';

const Layout = () => (
    <div>
        <Header/>
        <Rute/>
    </div>
); 

ReactDOM.render((
    <HashRouter>
        <Layout/>
    </HashRouter>
), document.getElementById("root"));