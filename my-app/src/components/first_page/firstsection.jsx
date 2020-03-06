import React from "react";
import "./firstsection.css";
import { HashLink as Link } from "react-router-hash-link";

const Section = ({ items }) => {
  const hidePhone = () => {
    let btn = document.getElementById("the-bokning-button");
    btn.innerHTML = "Ring Oss";
  };
  const style = {
    backgroundImage: "url(" + items[0].acf.backgroundImage.url + ")",
    height: "100vh",
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center"
  };
  
  return items.map(myvariable =>
    myvariable.acf.firstsectiontext.map((content, index) => {
      const phone = "tel://" + content.phone_number 
      
      const showPhone = () => {
        let btn = document.getElementById("the-bokning-button");
        btn.innerHTML = content.phone_number;
      };
      return (
        <div className="my-first-section" key={index} style={style}>
          <div className="overlay">
            <div className="content-box">
              <div className="content-box-inner">
                <div className="Title">
                  <h1>{content.title}</h1>
                </div>
                <div className="little-text">
                  <p> {content.little_text}</p>
                </div>
                <div className="the-buttons">
                  <Link to="/kontakt#top" id="the-kontakt-button">
                    {content.button1}
                  </Link>
                  <a
                    href={phone}
                    id="the-bokning-button"
                    
                  >
                    Ring Oss
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    })
  );
};

export default Section;
