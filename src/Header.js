import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Home from './components/Home.js'
class Header extends Component {
  constructor(){
    super()
    this.state={
      posY:0,
    }
    this.handleScroll=this.handleScroll.bind(this);
  }
    componentDidMount(){
      return window.addEventListener('scroll', this.handleScroll);
    }
    handleScroll(){
      this.setState({posY:window.scrollY});
    }
    render() {
        let linksMark = this.props.links.map((link,index) => {
            return (
                <li className="list-item" key={index}>
                    <NavLink to={link.link} className="menu-link" >{link.label}</NavLink>

                </li>);
        });

        return  (
            <nav  className={this.state.posY>650? "navbar scrolled":"navbar top"}>
                <h1 className="logo">
                  <NavLink to="/" component={Home}
                    className="logo">LOGO</NavLink></h1>

                <div className="menu-right">
                <ul className="links">
                    {linksMark}
                    </ul>


                </div>

            </nav>
          );
    }
}

export default Header;
