import React, { useState, useEffect, useLayoutEffect } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink as Link } from "react-router-hash-link";

import "./header.css";

/**
 * Get the window size as a react hook.
 */
function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

const Header = ({ items }) => {
  let breakpoint = 767;
  const [width, height] = useWindowSize();

  const [open, setOpen] = useState(false);

  const menufunction = () => {
    /*if (width < 600) {

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
      */
  };

  return (
    <div className="this-is-the-header header-container">
      <div className="inner-content-header">
        <div className="the-logo" id="the-logo">
          <div className="the-logo-inner-content">
            <Link to="/">
              <img src={items[0].acf.items[0].bild.url}></img>
            </Link>
          </div>
        </div>
        <div
          className={`my-x ${width >= breakpoint || !open ? "hidden" : ""}`}
          id="my-x"
          onClick={() => {
            setOpen(false);
          }}
        >
          &#x2715;
        </div>

        <div
          className={`bars-icon-mine ${
            width >= breakpoint || open ? "hidden" : ""
          }`}
          id="hamburger"
          onClick={() => {
            setOpen(true);
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
                  <ul
                    className={`this-is-ul ${
                      width < breakpoint && !open ? "hidden" : ""
                    }`}
                    id="ul-list"
                  >
                    <div className="links-container">
                      <Link
                        to="/#second-section-psykoterapi"
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        <li className="first-child-text list-item">
                          {mytext.menu_text_first_child}
                        </li>
                      </Link>

                      <Link
                        to="/#second-section-radgivning"
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        <li className="second-child-text list-item">
                          {mytext.menu_text_second_child}
                        </li>
                      </Link>

                      <Link
                        to="/#second-section-handledning"
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        <li className="third-child-text list-item">
                          {mytext.menu_text_third_child}
                        </li>
                      </Link>

                      <Link
                        to="/#second-section-utbildning"
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        <li className="fourth-child-text list-item">
                          {mytext.menu_text_fourth_child}
                        </li>
                      </Link>

                      <Link
                        to="/#oppenvard"
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        <li className="fifth-child-text list-item">
                          {mytext.menu_text_fifth_child}
                        </li>
                      </Link>

                      <Link
                        to="/kontakt#top"
                        onClick={() => {
                          setOpen(false);
                        }}
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
