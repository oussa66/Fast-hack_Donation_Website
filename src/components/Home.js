import React ,{Component}from 'react';
import blackPhone from "./blackPhone.png";
import whitePhone from "./whitePhone.png";
import shadowPhone from "./shadowPhone.png";
import {NavLink,Route} from 'react-router-dom';
import Event from "./Event.js";

class Home extends Component {
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
  render(){

    const events=[
      {text:"help to draw smile on cancer kids" ,name:"eventone"},
      {text:"donate for daily iftar this ramadan" , name:"eventtwo"},
      {text:"help renovating the mosque" , name:"eventthree"}
    ]
    let eventHandler = events.map((event) => {
        return (<Event eventName={event.name} text={event.text}/>)
      });
    return (


      <div className="Home_wrapper">
      <section className="wrapper_top">
      <div className="wrapper_inner_top">

        <h2 > LOGO </h2>
        <p>Ubi legam quorum qui vidisse et laborum elit multos ab duis.</p>
        <ul className="Home_buttons">
          <NavLink to="/auth/register"  className="home_link">register</NavLink>
          <NavLink to="/auth/signin"     className="home_link">sign-in</NavLink>
        </ul>
        </div>
      </section>
      <section className="wrapper_bottom">
      <div className="home_text_wrapper">

          <h1 className="Home_title">DOWNLOAD THE APP</h1>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
        <div className="home_image_wrapper">
          <img className="phone_img blackPhone" src={blackPhone} alt="dele3"/>
          <img className="phone_img whitePhone" src={whitePhone} alt="dele3"/>
          <img className="shadow_img shadowPhone" src={shadowPhone} alt="dele3"/>
        </div>
        </section>
        <hr className={this.state.posY>750? "section_line":"no_line"}/>
        <section className="event_wrapper">
          {eventHandler}

        </section>

        </div>

    );
  }
}
export default Home;
