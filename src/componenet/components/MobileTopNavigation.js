import React from "react";
import SearchBar from "./searchBar";
import '../assets/scss/MobTopNav.scss';
import Brand from "./brand";

const MobileTopNavigation =()=>{

        return(
            <nav className="mob-top-navigation">
                <Brand/>
                <SearchBar/>
            </nav>
        );
    }

export default MobileTopNavigation;