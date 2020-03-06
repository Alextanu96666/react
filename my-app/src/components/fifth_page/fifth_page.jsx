import React from "react";
import "./fifth_page.css";

const Section5 = ({ items }) => {
    const style1 = {
        backgroundImage:
            "url(" + items[0].acf.fifth_section[0].fifth_page_bild_1.url + ")",
        minHeight: "70vh",
        position: "relative",
        backgroundSize: "cover",
        width: "45%",
        
    };
    const style2 = {
        backgroundImage:
            "url(" + items[0].acf.fifth_section[0].fifth_page_bild_2.url + ")",
        minHeight: "90vh",
        position: "relative",
        backgroundSize: "cover",
        width: "55%",
        
    };
    return (
        <div className="wrapper-section-5">
            <div className="my-fifth-page">
                {items.map(myvariable =>
                    myvariable.acf.fifth_section.map((flexible, index) => {
                        
                        return (
                            <React.Fragment key={index}>
                                <div className="first-row-fifth"  id = "oppenvard">
                                    <div className="text-block1-fifth text-block-fifth">
                                        <div className="text-inner-content-fifth">
                                            <h1 className="title-1-fifth title-fifth">
                                                {flexible.fifth_page_title_1}
                                            </h1>
                                            <p className="text-1-fifth this-is-text-fifth">
                                                {flexible.fifth_page_main_text_1}
                                            </p>
                                            
                                            
                                        </div>
                                    </div>
                                    <div className="img-block-fifth1" style={style1}></div>
                                </div>
                                <div className="second_row-fifth">
                                    <div className="img-block-fifth2" style={style2}></div>
                                    <div className="text-block2-fifth text-block-fifth">
                                        <div className="text-inner-content-fifth">
                                            <h1 className="title-2-fifth title-fifth">
                                                {flexible.fifth_page_title_2}
                                            </h1>
                                            <p className = "text-fifth-section">
                                                {flexible.fifth_page_main_text_2}
                                            </p>
                                            
                                            {items.map(mylist =>
                                                mylist.acf.fifth_section_list.map(listelement => {
                                                    return (
                                                    <li className ="fifth-list">{listelement.list_element}</li>
                                                    
                                                    )
                                                }))}

                                            <p className="text-fifth-section">
                                                {flexible.fifth_page_main_text_3}
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

export default Section5;