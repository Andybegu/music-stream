import React from "react"
import logo from '../componenet/assets/img/download.jpeg';
import HeadPhone from "../componenet/assets/img/headP2.png"
import {Link} from "react-router-dom";
const LandingPage=()=>{
    return(
        <section id="main">
                <div className="nav-item">
                    <a className="navbar-brand" href="/">Music</a>
                </div>
                <div className="main-row">
                    <div className="main-row-img">
                        <img className="head-phone-img" src={HeadPhone} alt=""/>
                    </div>
                    <div className="main-row-text">
                        <h1>Music for everyone</h1>
                        <p>Without music, life would be a mistake</p>
                        <Link to={"/home"} className="btn">
                            Start Listening
                        </Link>
                    </div>
                </div>
        </section>
    );
}

export default LandingPage