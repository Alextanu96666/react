import React from "react";
import "./fourth_page.css";


const Section4 = ({ items }) => {
    const style1 = {
        backgroundImage:
            "url(" + items[0].acf.fourth_section[0].fourth_section_img_1.url + ")",
        height: "50vh",
        position: "relative",
        backgroundSize: "cover",
        width: "40%",
        float: "left"
    };
    const style2 = {
        backgroundImage:
            "url(" + items[0].acf.fourth_section[0].fourth_section_img_2.url + ")",
        height: "50vh",
        position: "relative",
        backgroundSize: "cover",
        width: "60%",
        float: "left"
    };
    return (
        <div className="wrapper-section-4">
            <div className="my-fourth-page">
                {items.map(myvariable =>
                    myvariable.acf.fourth_section.map((flexible, index) => {
                        console.log(flexible);
                        return (
                            <React.Fragment>
                                <div className="first-row-fourth" key={index}>
                                    <div className="text-block-fourth-1 text-block-fourth">
                                        <div className="text-inner-content-fourth">
                                            <h1 className="title-1 title-fourth">
                                                {flexible.fourth_section_title_1}
                                            </h1>
                                            <p className="text-1-fourth this-is-text-fourth">
                                                {flexible.fourth_section_main_text_1}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="img-block-fourth" style={style1}></div>
                                </div>
                                <div className="second_row-fourth">
                                    <div className="img-block-fourth" style={style2}></div>
                                    <div className="text-block-fourth-2 text-block-fourth">
                                        <div className="text-inner-content-fourth">
                                            <h1 className="title-2 title-fourth">
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