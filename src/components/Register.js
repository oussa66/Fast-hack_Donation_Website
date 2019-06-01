import React ,{Component} from 'react';
class Register extends Component {
  
  render(){
    return (
      <div className="form_menu_ register">
      <form className="formfields register">
      <div className="form_item">
        <label className="form_label" htmlFor="name">e-mail adress</label>
        <input className="form_input" type="name" name="name" id="name" placeholder="enter your name " />
      </div>
        <div className="form_item">
          <label className="form_label" htmlFor="email">e-mail adress</label>
          <input className="form_input" type="email" name="email" id="email" placeholder="enter your email " />
        </div>
        <div className="form_item">
          <label className="form_label" htmlFor="password">password</label>
          <input className="form_input"  type="pasword" name="password" id="password" placeholder="enter your password " />
        </div>
        <div className="form_item">
               <label className="form_CheckboxLabel">
                   <input className="form_Checkbox" type="checkbox" name="hasAgreed"/> I agree all statements in <a href="" className="form_TermsLink">terms of service</a>
               </label>
             </div>

        <div className="form_item">
          <button className="form_submit"> Register</button>
        </div>
      </form>
      </div>
    )
  }
}
export default Register;
