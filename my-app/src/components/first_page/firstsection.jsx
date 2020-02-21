import React from "react";
import "./firstsection.css";



const Section = ({ items }) => {
  console.log(items[0].acf.backgroundImage.url);
  const style = {
    backgroundImage: "url(" + items[0].acf.backgroundImage.url + ")",
    height: "120vh",
    position: "relative",
    backgroundSize: "cover"
    
  };

  return (
    
              items.map(myvariable => myvariable.acf.firstsectiontext.map((content, index) => {
                return (
                  <div className ="my-first-section" key = {index} style={style}>
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
                            <button id="the-kontakt-button">{content.button1}</button>
                            <button id="the-bokning-button">{content.button2}</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }))
              
  );
};

export default Section;
