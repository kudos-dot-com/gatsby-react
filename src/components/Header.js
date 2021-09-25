import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import File from '../images/cv.pdf'
const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h2>
              Hi, I'm <span>{data.name}</span>{" "}
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h2>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                {data.headerTagline[0]
                  ? data.headerTagline[0]
                  : "Building digital"}
              </h1>
              <h1>
               <span>
               {" "}
                {data.headerTagline[1]
                  ? data.headerTagline[1]
                  : "products, brands"}
               </span>
              </h1>
              <h1>
                {" "}
                {data.headerTagline[2]
                  ? data.headerTagline[2]
                  : "and experience"}
              </h1>
              <h1>
                <span>
                {" "}
                {data.headerTagline[3]
                  ? data.headerTagline[3]
                  : "and experience"}
                </span>
              </h1>
            </div>
          </Fade>
          <Fade bottom>
            <p>{data.headerParagraph}</p>
          </Fade>
          <Fade bottom>
            <a className="btn" href={File} download="cv.pdf"> Download Resume </a>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
