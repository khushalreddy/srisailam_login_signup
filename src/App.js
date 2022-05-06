import React,{Fragment} from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/NavbarPage';
import Home from './components/pages/Home'
import About from './components/pages/About'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import AuthState from './context/auth/AuthState';
import Footer from './components/layout/Footer';
import SuccessfulLogin from './components/pages/SuccessfulLogin';
const App = () =>{
  return (
    <AuthState>
    <Router>
      <Fragment>
      <div className='sd-main'>
      <Navbar />
      
      <Switch>
        <Route exact path='/' component = {Home} />
        <Route exact path='/about' component = {About} />
        <Route exact path = '/register' component={Register} />
        <Route exact path = '/login' component={Login} />
        <Route exact path = '/success' component={SuccessfulLogin} />
      </Switch>
      </div>
      <Footer />
      
    </Fragment>
    </Router>
    </AuthState>
    
  );
}

export default App;
