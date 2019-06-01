import React,{Component} from 'react';
import Signin from "./Signin.js";
import Register from './Register.js';
import {NavLink,Route} from "react-router-dom";
class Auth extends Component {

  render(){
    return (

      <div className="Auth_wrapper">
      <div className="form">
        <div className="buttons">
          <NavLink to="/auth/register" activeClassName="switchAuth_active" className="switchAuth">register</NavLink>
          <NavLink to="/auth/signin" activeClassName="switchAuth_active" className="switchAuth">sign up</NavLink>
        </div>
        <Route exact path="/auth/signin" component={Signin}/>
        <Route exact path="/auth/register" component={Register}/>
        </div>
      </div>
    );
  }
}
export default Auth;
