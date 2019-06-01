import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';


class Event extends Component {
  render(){
    return(
      <div className={ this.props.eventName==="eventone"?"container img_one":this.props.eventName==="eventtwo"?"container img_two":"container img_three"}>
  <div className="overlay">
    <div className = "items"></div>
    <div className = "items head">
      <p>{this.props.text}</p>
      <hr/>
    </div>
    <div className = "items price">

      <p className="new"><span className="collected">150 000 DZD</span> collected from 200 000 DZD</p>
    </div>
    <div className="items cart">

      <NavLink to="/home" className="btn">donate</NavLink>
  </div>
</div>
</div>


    );
  }
}

export default Event;
