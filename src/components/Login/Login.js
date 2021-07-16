import React from 'react';
import './Login.css';
import avatar from '../../images/avatar.png';
import Nav from './../Home/Nav/Nav';
import Footer from '../Footer/Footer';

function Login() {
    return (
        <>
        <Nav></Nav>

        <div className="login-container">
            <form class="modal-content animate my-login" action="/action_page.php" method="post">
    <div class="imgcontainer">
       
      <img src={avatar} alt=" " class="avatar" />
    </div>

    <div class="container">
      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required />

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required />
        
      <button type="submit">Login</button>
       
    </div>

     
  </form>
        </div>

        <Footer></Footer>

        </>
    )
}

export default Login
