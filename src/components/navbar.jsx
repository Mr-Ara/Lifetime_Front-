import { Component } from "react";
import { Link,Redirect,useNavigate,Router,BrowserRouter } from "react-router-dom";
import "../styles/navbar.css";
import "./SignupLogin";



class NavBar extends Component {
  
  render() {
    
    return (
      <>
        <div className="navbar">
          <div className="login">
           
          
           <Link from='/' to='/signupLogin'  className="button-86"
              role="button"> Login </Link>
           
          </div>
          <div className="left-options">
            
            <span id="binance" > Binance Verification</span>
            <span id="vip">VIP </span>
            <span id="recovery">Assets Recovery </span>
          </div>
          <div className="logo">
            <h1>LifeTime Traders</h1>
            <img src={require("../img/loggree.png")} alt="Logo" />
          </div>
          <div className="right-options">
            <span id="Contact">Contact</span>
            <span id="FreeSignal">Free Signal</span>
            <span id="Market">Market</span>
          </div>

          {/* <div className='basket'>
            <button onClick = {this.buttonHandller}>
              {} items
            </button>
          </div> */}
        </div>
      </>
    );
  }

 
}

export default NavBar;



