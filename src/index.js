import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import About from './About'
import Login from './Login'
import Home from './Home'
import Navbar from './Navbar'
 

ReactDOM.render((
  <Router>
    <React.Fragment>
        <Route path='a' component={Navbar} />
        <Route exact path='/about' component={About} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={Home}/>
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
