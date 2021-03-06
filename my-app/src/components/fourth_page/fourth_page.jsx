import React from "react";
import "./fourth_page.css";

const Section4 = ({ items }) => {

  const style3 = {
    backgroundImage:
      "url(" + items[0].acf.fourth_section[0].fourth_section_img_3.url + ")",
    minHeight: "50vh",
    position: "relative",
    backgroundSize: "cover",
    width: "55%",

    backgroundPositionY: "center"
  };

    const style1 = {
      backgroundImage:
        "url(" + items[0].acf.fourth_section[0].fourth_section_img_1.url + ")",
      minHeight: "50vh",
      position: "relative",
      backgroundSize: "cover",
      width: "45%",
      
  
      backgroundPositionY: "center"
    };
    const style2 = {
      backgroundImage:
        "url(" + items[0].acf.fourth_section[0].fourth_section_img_2.url + ")",
      minHeight: "50vh",
      position: "relative",
      backgroundSize: "cover",
      width: "55%",
      
      backgroundPositionY: "center"
    };
  
  return (
    <div className="wrapper-section-4">
      <div className="my-fourth-page">
        {items.map(myvariable =>
          myvariable.acf.fourth_section.map((flexible, index) => {
            
            return (
              <React.Fragment key={index}>
                <div className="first-row-fourth" id="second-section-radgivning">
                  <div className="text-block-fourth-1 text-block-fourth">
                    <div className="text-inner-content-fourth">
                      <h1 className="title-1-fourth title-fourth">
                        {flexible.fourth_section_title_1}
                      </h1>
                      <p className="text-1-fourth this-is-text-fourth">
                        {flexible.fourth_section_main_text_1}
                      </p>
                      
                    </div>
                  </div>
                  <div className="img-block-fourth1" style={style1}></div>
                </div>
                <div className="second_row-fourth">
                  <div className="img-block-fourth2" style={style2}></div>
                  <div className="img-block-fourth3" style={style3}></div>
                  <div className="text-block-fourth-2 text-block-fourth">
                    <div className="text-inner-content-fourth">
                      <h1 className="title-2-fourth title-fourth">
                        {flexible.fourth_section_title_2}
                      </h1>
                      <p className="text-2-fourth this-is-text-fourth">
                        {flexible.fourth_section_main_text_2}
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

export default Section4;
