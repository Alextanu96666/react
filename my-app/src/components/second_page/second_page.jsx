import React from "react";
import "./second_page.css";

const Section2 = ({ items }) => {
  const style1 = {
    backgroundImage:
      "url(" + items[0].acf.second_page[0].second_page_bild_1.url + ")",
    height: "70vh",
    position: "relative",
    backgroundSize: "cover",
    width: "40%",
    float: "left"
  };
  const style2 = {
    backgroundImage:
      "url(" + items[0].acf.second_page[0].second_page_bild_2.url + ")",
    height: "70vh",
    position: "relative",
    backgroundSize: "cover",
    width: "60%",
    float: "left"
  };
  return (
    <div className="wrapper-section-2">
      <div className="my-second-page">
        {items.map(myvariable =>
          myvariable.acf.second_page.map((flexible, index) => {
            console.log(flexible);
            return (
              <React.Fragment>
                <div className="first-row" key={index}>
                  <div className="text-block1 text-block">
                    <div className="text-inner-content">
                      <h1 className="title-1 title">
                        {flexible.second_page_title_1}
                      </h1>
                      <p className="text-1 this-is-text">
                        {flexible.second_page_text_1}
                      </p>
                    </div>
                  </div>
                  <div className="img-block" style={style1}></div>
                </div>
                <div className="second_row">
                  <div className="img-block" style={style2}></div>
                  <div className="text-block2 text-block">
                    <div className="text-inner-content">
                      <h1 className="title-2 title">
                        {flexible.second_page_title_2}
                      </h1>
                      <p className="text-2 this-is-text">
                        {flexible.second_page_text_2}
                      </p>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Section2;