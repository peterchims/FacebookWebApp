import React from 'react'
import './loginPage.css'

function LoginPage(){
    return(
        <div className="Login">
            <div className='facebook'>
                <div className='facebooktext'>
                    facebook
                </div>
                <div className='title'>
                    Facebook helps you connect and share
                    <br />with the people in your life.
                </div>
            </div>
            <div className='LoginContainer'>
                <div className='LoginDetails'>
                <input type="email" placeholder='Email Address or Phone Number'></input>
                 <input type='password' placeholder="Password"></input>
                 <button className='btn'>
                    Login
                 </button>
                  </div>
                  <div className='forget'>
                    <a href='forget'> Forgetten  Password?</a>
                    <button className='btns'>
                        Create New Account
                    </button>
                  </div>
          
                  <div className='page'>
                    <a href="createpage">Create a Page</a>  for a celebrity, brand or business.
                  </div>
            </div>
        
        </div>
    );
}
export default LoginPage;