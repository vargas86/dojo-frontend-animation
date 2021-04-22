import React from 'react';
import './App.scss';
import Auth from './components/auth/auth';
import Reset from './components/auth/reset';
import Logged from './components/auth/logged';
import Home from './components/home/home';
import Dashboard from './components/dashboard/dashboard';
import Classroom from './components/classroom/classroom';
import Profile from './components/profile/profile';
import Navbar from './components/navigation/navbar';



import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div>
    <Router>
      <Switch>
        <Route exact path='/' component={Auth} />
        <Route exact path='/forgotpassword' component={Reset} />
        <Route exact path='/logged' component={Logged} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/classroom' component={Classroom} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/nav' component={Navbar} />
      </Switch>
    </Router>
    
    </div>
  );
}

export default App;
