import { useState } from "react";
import { Myprojects } from "./Myprojects";
import  "./Main.css";
const Main = () => {
  const [ButtonActive , setActive] = useState("all");
  const [arr , setArr] = useState(Myprojects);
  const handleClick = (buttonCategory) => {
        setActive(buttonCategory)
        const newArr = Myprojects.filter((item)=>{
          const ZZZ = item.category.find((myItem)=>{
            return myItem === buttonCategory;
             })
          return ZZZ === buttonCategory;
      })
    setArr(newArr);
  }
    return (
        <main className="flex ">
          <section className="  left-section flex">
                <button onClick={()=>{
                handleClick("all")
                setArr(Myprojects)
                }} className={ButtonActive=="all" ? "active" : null}>
                  
                  All projects</button>
                <button onClick={()=>{
                   handleClick("css")
                }} className={ButtonActive=="css" ? "active" : null} >
                  
                  HTML & CSS</button>
                <button onClick={()=>{
                       handleClick("js")
                }} className={ButtonActive=="js" ? "active" : null}>
                  JavaScript</button>
                <button onClick={()=>{
                 handleClick("laravel")
                }} className={ButtonActive=="laravel" ? "active" : null}>
                  Laravel</button>
                <button onClick={()=>{
                handleClick("react")
                }} className={ButtonActive=="react" ? "active" : null}>
                  React</button>
                <button onClick={()=>{
                  handleClick("NE")
                }} className={ButtonActive=="NE" ? "active" : null}>
                  Node & Express</button>
            </section> 
            {/* Right section */}
            <section className="  flex right-section ">
              {arr.map((item)=>{
                return(
                        <article key ={item.imgPath} className="card">
                            <img width={266} src={item.imgPath} alt="" />
                            <div style={{width:"266px"}} className="box ">
                                <h1 className="title">{item.ProjectTitle}</h1>
                                <p className="sub-title">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis nisi cupiditate, illum asperiores odio voluptate laborum. Magni ipsa sunt nihil fugiat repellat</p>
                                <div className="flex icons">
                                    <div style={{gap:"11px"}} className="flex">
                                        <div className="icon-link"></div>
                                        <div className="icon-github"></div>
                                    </div>
                                      <a className="link" href="">
                                        more
                                        <span style={{alignSelf :"end"}} className="icon-arrow_forward"></span>
                                      </a>
                                </div>
                            </div>
                       </article>
                )
              })}
            </section> 
        </main>
    );
}

export default Main;
