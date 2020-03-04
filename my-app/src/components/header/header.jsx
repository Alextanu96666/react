import React, { useState, useEffect} from "react";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink as Link } from "react-router-hash-link";

import "./header.css";

const Header = ({ items }) => {
  
  
  useEffect(() => { 
    
    window.innerWidth < 600 ? document.getElementById('ul-list').classList.add('hidden') : console.log('error');
      

    
  }, []);
  
  
  
  
  return (
    <div className="this-is-the-header header-container">
      <div className="inner-content-header">
        <div className="the-logo">
          <div className="the-logo-inner-content">
            <img src={items[0].acf.items[0].bild.url}></img>
          </div>
        </div>
        
         

          <FontAwesomeIcon className="bars-icon" icon={faBars} onClick={() => document.getElementById('ul-list').classList.toggle("hidden")}/>
          
        
        <div className="the-list-header">
          {items.map(myconst =>
            myconst.acf.items.map((mytext, index) => {
              return (
                <div key={index} className="the-ul-list">
                  <ul className="this-is-ul" id="ul-list">
                    <Link to="/#second-section-top" onClick={() => window.innerWidth < 600 ? document.getElementById('ul-list').classList.add('hidden') : console.log('error')}>
                      <li className="first-child-text list-item">
                        {mytext.menu_text_first_child}
                      </li>
                    </Link>

                    <Link to="/#second-section-bottom" onClick={() => window.innerWidth < 600 ? document.getElementById('ul-list').classList.add('hidden') : console.log('error')}>
                      <li className="second-child-text list-item">
                        {mytext.menu_text_second_child}
                      </li>
                    </Link>

                    <Link to="/#second-section-top" onClick={() => window.innerWidth < 600 ? document.getElementById('ul-list').classList.add('hidden') : console.log('error')}>
                      <li className="third-child-text list-item">
                        {mytext.menu_text_third_child}
                      </li>
                    </Link>

                    <Link to="/#second-section-bottom" onClick={() => window.innerWidth < 600 ? document.getElementById('ul-list').classList.add('hidden') : console.log('error')}>
                      <li className="fourth-child-text list-item">
                        {mytext.menu_text_fourth_child}
                      </li>
                    </Link>

                    <Link to="/#oppenvard" onClick={() => window.innerWidth < 600 ? document.getElementById('ul-list').classList.add('hidden') : console.log('error')}>
                      <li className="fifth-child-text list-item">
                        {mytext.menu_text_fifth_child}
                      </li>
                    </Link>

                    <Link to="/kontakt" onClick={() => window.innerWidth < 600 ? document.getElementById('ul-list').classList.add('hidden') : console.log('error')}>
                      <li className="last-child-text list-item">
                        {mytext.kontakt}
                      </li>
                    </Link>

                    <li className="icon list-item">
                      <label htmlFor="icon-field">
                        <FontAwesomeIcon icon={faFacebook} />
                      </label>
                    </li>
                    
                     
                      
                    
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
