import React, { useState, useEffect } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink as Link } from "react-router-hash-link";

import "./header.css";

const Header = ({ items }) => {
  useEffect(() => {
    window.innerWidth < 600
      ? document.getElementById("ul-list").classList.add("hidden")
      : console.log("");
  }, []);

  const menufunction = () => {
    if (window.innerWidth < 600) {

      document
         .getElementById("ul-list")
         .classList.add("hidden")
         document
           .getElementById("hamburger")
           .classList.toggle("hidden")
         document
           .getElementById("my-x")
           .classList.toggle("hidden")
    }
      
    } 

  return (
    <div className="this-is-the-header header-container">
      <div className="inner-content-header">
        <div className="the-logo" id="the-logo">
          <div className="the-logo-inner-content">
            <Link to = "/">
            <img src={items[0].acf.items[0].bild.url}></img>
            </Link>
          </div>
        </div>
        <div
          className="my-x hidden"
          id="my-x"
          onClick={() => {
            document.getElementById("my-x").classList.toggle("hidden");
            document.getElementById("hamburger").classList.toggle("hidden");
            document.getElementById("ul-list").classList.toggle("hidden");
          }}
        >
          &#x2715;
        </div>

        <div
          className="bars-icon-mine"
          id="hamburger"
          onClick={() => {
            document.getElementById("ul-list").classList.toggle("hidden");
            document.getElementById("hamburger").classList.toggle("hidden");
            document.getElementById("my-x").classList.toggle("hidden");
          }}
        >
          <div className="first-bar bars" id="first"></div>
          <div className="second-bar bars" id="second"></div>
          <div className="third-bar bars" id="third"></div>
        </div>

        <FontAwesomeIcon
          className="bars-icon hidden"
          icon={faBars}
          id="bar-icon"
          onClick={() => {
            document.getElementById("ul-list").classList.toggle("hidden");
          }}
        />

        <div className="the-list-header">
          {items.map(myconst =>
            myconst.acf.items.map((mytext, index) => {
              return (
                <div key={index} className="the-ul-list">
                  <ul className="this-is-ul" id="ul-list">
                    <div className="links-container">
                      <Link
                        to="/#second-section-psykoterapi"
                        onClick={menufunction}
                      >
                        <li className="first-child-text list-item">
                          {mytext.menu_text_first_child}
                        </li>
                      </Link>

                      <Link
                        to="/#second-section-radgivning"
                        onClick={menufunction}
                      >
                        <li className="second-child-text list-item">
                          {mytext.menu_text_second_child}
                        </li>
                      </Link>

                      <Link
                        to="/#second-section-handledning"
                        onClick={menufunction}
                      >
                        <li className="third-child-text list-item">
                          {mytext.menu_text_third_child}
                        </li>
                      </Link>

                      <Link
                        to="/#second-section-utbildning"
                        onClick={menufunction}
                      >
                        <li className="fourth-child-text list-item">
                          {mytext.menu_text_fourth_child}
                        </li>
                      </Link>

                      <Link
                        to="/#oppenvard"
                        onClick={menufunction}
                      >
                        <li className="fifth-child-text list-item">
                          {mytext.menu_text_fifth_child}
                        </li>
                      </Link>

                      <Link
                        to="/kontakt#top"
                        onClick={menufunction}
                      >
                        <li className="last-child-text list-item">
                          {mytext.kontakt}
                        </li>
                      </Link>
                    </div>
                  </ul>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
