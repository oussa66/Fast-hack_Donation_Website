import React ,{Component} from 'react';
import Header from './Header.js';
import { HashRouter as Router,Route} from "react-router-dom";
import Auth from "./components/Auth.js";
import Home from './components/Home.js';

import './App.css';

class App extends Component {

  render(){
    let linksarr=[
      {label:'home',link:"/home"},
      {label:'about',link:"#about"},
      {label:'contact',link:"#contact"},
      {label:'auth',link:"/auth/signin"}
    ]
    return(


        <div className="wrapper">

        <Header links={linksarr} />


        <Route path="/auth" component={Auth}/>
        <Route path="/home" component={Home}/>
        </div>


    )
  }
}


export default App;
