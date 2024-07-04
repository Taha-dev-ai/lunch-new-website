import React from 'react'
import './component/Signupp.css'
import { NavLink } from 'react-router-dom';

function Signup() {
  return (
    <div className='signup-page'>
      <form className="form">
    <p className="title">Register </p>
    <p className="message">Signup now and get full access to our app. </p>
        <div className="flex">
        <label>
            <input className="input" type="text" placeholder="Firstname" required=""/>
            {/* <span>Firstname</span> */}
        </label>

        <label>
            <input className="input" type="text" placeholder="Lastname" required=""/>
            {/* <span>Lastname</span> */}
        </label>
    </div>  
            
    <label>
        <input className="input" type="email" placeholder="Email" required=""/>
        {/* <span>Email</span> */}
    </label> 
        
    <label>
        <input className="input" type="password" placeholder="Password" required=""/>
        {/* <span>Password</span> */}
    </label>
    <label>
        <input className="input" type="password" placeholder="Confirm password" required=""/>
        {/* <span>Confirm password</span> */}
    </label>
    <button className="button">Submit</button>
    {/* <p className="signin">Already have an acount ? <a href="#action">Signin</a> </p> */}
    <p className="signin">Already have an acount ? <NavLink to="/login" className="" activeClassName="active">Signin</NavLink> </p>
</form>
    </div>
  )
}

export default Signup
