import React from "react";
import "./second_page.css";

const Section2 = ({ items }) => {
  const style1 = {
    backgroundImage:
      "url(" + items[0].acf.second_page[0].second_page_bild_1.url + ")",
    minHeight: "50vh",
    position: "relative",
    backgroundSize: "cover",
    width: "45%",
    backgroundPosition: "center"
  };
  const style2 = {
    backgroundImage:
      "url(" + items[0].acf.second_page[0].second_page_bild_2.url + ")",
    minHeight: "50vh",
    position: "relative",
    backgroundSize: "cover",
    width: "55%",
    backgroundPosition: "center"
  };
  return (
    
      
    
    <div className="wrapper-section-2" >
      <div className="my-second-page" >
        {items.map(myvariable =>
          myvariable.acf.second_page.map((flexible, index) => {
            console.log(flexible);
            return (
              <React.Fragment>
                <div className="first-row" key={index} id="second-section-top">
                  <div className="text-block1 text-block">
                    <div className="text-inner-content">
                      <h1 className="title-1 title">
                        {flexible.second_page_title_1}
                      </h1>
                      <p className="text-1 this-is-text">
                        {flexible.second_page_text_1}
                      </p>
                      <h1 className="title-2 title">
                        {flexible.second_page_title_2}
                      </h1>
                      <p className="text-2 this-is-text">
                        {flexible.second_page_text_2}
                      </p>
                     
                    </div>
                  </div>
                  <div className="img-block1" style={style1}></div>
                </div>
                <div className="second_row" id="second-section-bottom">
                  <div className="img-block2" style={style2}></div>
                  <div className="text-block2 text-block">
                    <div className="text-inner-content">
                      <h1 className="title-3 title">
                        {flexible.second_page_title_3}
                      </h1>
                      <p className="text-3 this-is-text">
                        {flexible.second_page_text_3}
                      </p>
                      <h1 className="title-4 title">
                        {flexible.second_page_title_4}
                      </h1>
                      <p className="text-4 this-is-text">
                        {flexible.second_page_text_4}
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
