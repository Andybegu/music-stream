import React,{useContext} from "react"
import Brand from "./components/brand"
import SearchBar from "./components/searchBar"
import "./assets/scss/Navigation.scss"
import {ThemeContext} from "../api/Theme";
const Navbar=()=>{
  const useStyle=useContext(ThemeContext)
    return(
       <nav style={useStyle.component} className="head-nav">
       <Brand/>
       <SearchBar/>
       </nav>
    )
}

export default Navbar