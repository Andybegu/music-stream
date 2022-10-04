import React from "react";
import SearchBar from "./searchBar";
import '../assets/scss/MobTopNav.scss';
import Brand from "./brand";
import SideBar from "./SideBar";

const MobileTopNavigation =()=>{

        return(
            <nav className="mob-top-navigation">
                <Brand/>
                <SearchBar/>
                <SideBar/>
            </nav>
        );
    }

export default MobileTopNavigation;