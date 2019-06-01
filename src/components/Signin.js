import React ,{Component} from 'react';
class Signin extends Component {

  render(){
    return (
      <div className="form_menu">
      <form className="formfields">
        <div className="form_item">
          <label className="form_label" htmlFor="email">e-mail adress</label>
          <input className="form_input" type="email" name="email" id="email" placeholder="enter your email " />
        </div>
        <div className="form_item">
          <label className="form_label" htmlFor="password">password</label>
          <input className="form_input"  type="pasword" name="password" id="password" placeholder="enter your password " />
        </div>
        <div className="form_item">
          <button className="form_submit"> sign-in</button>
        </div>
      </form>
      </div>
    )
  }
}
export default Signin;
