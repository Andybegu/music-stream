import React,{useContext, useEffect, useState} from "react";
import Navbar from "../componenet/navbar";
import "./css/home.css"
import "./css/home.scss"
import { ThemeContext } from "../api/Theme"; 
import { Skeleton } from "@material-ui/lab";
import MobileTopNavigation from "../componenet/components/MobileTopNavigation";
import SideBar from "../componenet/components/SideBar";
import About from "./About";


const getCurrPage=(pathName)=>{
  switch (pathName){
    case "/home/about":
        return <About/>
        default:
    if(pathName.startsWith("/home/playlist")){
        return <About/>;
    }
    return null
  }
  
}

const Home =()=>{
const [screenSize,setScreenSize]=useState(undefined)
// const [currMusic, setCurrMusic] = useState(null);
    const [Page, setCurrPage] = useState(<About/>);

let pathname=window.location.pathname
useEffect(()=>{
    setCurrPage(getCurrPage(pathname))
},[pathname])

const handleResize=()=>{
    setScreenSize(window.innerWidth)
}
window.addEventListener("resize",handleResize);

useEffect(()=>{
    handleResize();
    window.removeEventListener("resize",handleResize)
})

    const useStyle=useContext(ThemeContext)
    const [loading,setLoading]=useState(false);

useEffect(()=>{
setLoading(true);
},[])

    return(
        <div style={useStyle.component} className={"home-container"}>
     {
        !loading? <div className="home-skeleton">
            <Skeleton animation={"wave" }variant={"rect"} height={"100vh"} />
        </div>
     :
   <div>{
    screenSize <=970 ?
    <MobileTopNavigation/>:
    <Navbar/>
    }
    <section className={"home-music-container"}>
     <div>
        <SideBar/>
     </div>
    </section>
  </div>
     }
        </div>
    )
}

export default Home