
import "./Hero.css";
const Hero = () => {
    return (
      <section className="Hero flex">
        <div className="left-section ">
            <div className="parent-avatar flex">
                <img src="./photo-modified.png" alt="" className="avatar" />
                <div className="icon-verified"></div>
            </div>
            <h1 className="title">
              Software Enginner , founder
              </h1>
            <p className="sub-title">
              I am Hamza Jaada, a Software Engineer and the founder of ADRIA
            </p>
              <div className="all-icons flex ">
                  <div className="icon icon-linkedin-square"></div>
                  <div className="icon icon-instagram"></div>
                  <div className="icon icon-github"></div>
              </div>
          </div>
          <div className="right-section animation border">
            Animation
            </div>
        </section>
    );
}

export default Hero;
