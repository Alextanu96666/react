import React from "react";
import "./third_page.css";

const Section3 = ({ items }) => {
  const style = {
    backgroundImage:
      "url(" + items[0].acf.third_page[0].third_section_bild.url + ")",
    height: "100vh",
    position: "relative",
    backgroundSize: "cover",
    width: "40%",
    float: "left"
  };
  return (
    <React.Fragment>
      {items.map(myvar =>
        myvar.acf.third_page.map(variable => {
          return (
            <div>
              <div className="text-block-third">
                <div className="inner-text-block-content-third">
                  <h2 className="title-third">{variable.title_text_1}</h2>
                  <p className="text-paragraph">{variable.main_text_1}</p>
                  <h2 className="title-third">{variable.title_text_2}</h2>
                  <p className="text-paragraph">{variable.main_text_2}</p>
                  <h2 className="title-third">{variable.title_text_3}</h2>
                  <p className="text-paragraph">{variable.main_text_3}</p>
                </div>
              </div>
              <div className="right-img" style = {style}></div>
            </div>
          );
        })
      )}
    </React.Fragment>
  );
};

export default Section3;
