import React from "react";
import "./third_page.css";

const Section3 = ({ items }) => {
  const style1 = {
    backgroundImage:
      "url(" + items[0].acf.second_page[0].second_page_bild_1.url + ")",
    minHeight: "50vh",
    position: "relative",
    backgroundSize: "cover",
    width: "50%",
    backgroundPosition: "center"
  };
  return (
    <React.Fragment>
      {items.map(myvar =>
        myvar.acf.sixth_section.map(variable => {
          return (
            <section className = "kontakt-section">
              <div className="full-width-div">
                <div className = "inner-content-full">
                <h1>{variable.om_oss_title}</h1>
                <p>{variable.text_om_oss}</p>

                </div>
              </div>
            <div className="flex-wrapper">
              
              <div className="text-block-third">
                <div className="inner-text-block-content-third">
                  

                  <p className="text-paragraph">
                    {variable.second_text_om_oss}
                  </p>
                  {variable.list_om_oss.map(mylist => {
                    return (
                      <li className="omOss-list">
                        {mylist.list_element_om_oss}
                      </li>
                    );
                  })}
                </div>
              </div>
              <div className="right-img-block" style = {style1}></div>
            </div>

              <div className = "second-flex-wrapper">
                  <div className="left-img-block" style={style1}></div>
                <div className="right-kontakt">
                  <div className="inner-text-kontakt">
                    <div className="kontakterna">
                      {variable.info.map(myinfo => {
                        return (
                          <div className="foretag-kontakt">
                            <p>Besöks och postadress:</p>
                            <p className="adress contact-text ">{myinfo.adress}</p>
                            <p className="phone contact-text ">
                              Telefon: {myinfo.telefonnummer}
                            </p>
                            <p className="email contact-text">
                              E-post: {myinfo.e_mail}
                            </p>
                            <p className="homepage contact-text">
                              Hemsida: {myinfo.hemsida}
                            </p>
                          </div>
                        );
                      })}
                      <div className="kontaktpersoner">
                        {variable.kontakt_person.map(contact => {
                          return (
                            <div className="the-contacts">
                              {contact.namn} <br />
                              {contact.telefon_number} <br />
                              {contact.e_post_kontakt_person} <br /> <br />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })
      )}
    </React.Fragment>
  );
};

export default Section3;


/* 

<div className="right-kontakt">
                <div className="inner-text-kontakt">
                  <div className="kontakterna">
                    {variable.info.map(myinfo => {
                      return (
                        <div className="foretag-kontakt">
                          <p>Besöks och postadress:</p>
                          <p className="adress contact-text ">{myinfo.adress}</p>
                          <p className="phone contact-text ">
                            Telefon: {myinfo.telefonnummer}
                          </p>
                          <p className="email contact-text">
                            E-post: {myinfo.e_mail}
                          </p>
                          <p className="homepage contact-text">
                            Hemsida: {myinfo.hemsida}
                          </p>
                        </div>
                      );
                    })}
                    <div className="kontaktpersoner">
                      {variable.kontakt_person.map(contact => {
                        return (
                          <div className="the-contacts">
                            {contact.namn} <br />
                            {contact.telefon_number} <br />
                            {contact.e_post_kontakt_person} <br /> <br />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              */