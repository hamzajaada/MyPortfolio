
import { useEffect, useState } from "react";
import "./Header.css";
const Header = () => {
  const [Showmodel , setShowmodel] = useState(false);
  const [theme , setTheme] = useState(localStorage.getItem("currentMode") ?? "dark");

  useEffect(()=> {
    if (theme == "light") {
        document.body.classList.remove("dark")
        document.body.classList.add("light")
    } 
    else{
      document.body.classList.remove("light")
        document.body.classList.add("dark")
    }
  
  
  },[theme]);

    return (
        <header className=' flex'>
          < button  className="icon-menu menu flex"/>
          <div/>
           <nav>
             <ul className='flex'>
                <li><a href="">About</a></li>
                <li><a href="">Articles</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Speaking</a></li>
                <li><a href="">Contact</a></li>
             </ul>
           </nav>
           <button onClick={()=>{
              // setShowmodel(true)
              // send value to LS
              localStorage.setItem("currentMode",theme === "dark" ? "light" : "dark")
              // get value from LS
             setTheme(localStorage.getItem("currentMode"))
           }}className="mode flex">
            { theme == "dark" ? (<span className="icon-moon"></span>) : (<span className="icon-weather-sunny"></span>)}
           </button>

          {Showmodel && 
          (<div className=" fixed">
            <ul className="modal">
              <li ><button className="icon-close" onClick={()=>{
                setShowmodel(false)
              }}/></li>
              <li><a href="">About</a></li>
              <li><a href="">Articles</a></li>
              <li><a href="">Project</a></li>
              <li><a href="">Speaking</a></li>
              <li><a href="">Uses</a></li>
            </ul>
            </div>
          )}


          
        </header>
    );
}

export default Header;
