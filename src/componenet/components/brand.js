import React from "react";
import {Link} from "react-router-dom";
import "../assets/scss/Brand.scss";
import Logo from "../assets/img/headphonesLogo.svg"

const Brand=()=>{
    return(
        <div  className={"brand"}>
                <Link to={"/home"}>
                    <h1>
                        M
                        <img src={Logo} width={"30px"} alt=""/>
                        sic
                    </h1>
                </Link>
            </div>
    )
}
export default Brand