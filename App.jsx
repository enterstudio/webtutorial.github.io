import {
    HashRouter as Router,
    Link,
    Match
} from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';

const App = () => {
    return(
        <Router>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                </ul>
                <Match exactly pattern="/" component={Home}></Match>
                <Match exactly pattern="/about" component={About}></Match>
            </div>
        </Router>
    );
};

export default App;