import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';

class Rute extends React.Component
{
    render()
    {
        return(
            <main>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                </Switch>
            </main>
        );
    }
}
export default Rute;