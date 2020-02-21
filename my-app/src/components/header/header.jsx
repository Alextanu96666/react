import React from "react";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './header.css';

const style = {
  backgroundColor : 'red'
}

const Header = ({ items }) => {
  return (
    
      <div className="this-is-the-header header-container">
        <div className="inner-content-header">
          <div className = "the-logo">
            <div className = "the-logo-inner-content">
              <img src = {items[0].acf.items[0].bild.url}></img>
            </div>
          </div>
          <div className="the-list-header">
            {items.map(myconst =>
              myconst.acf.items.map((mytext, index) => {
                return (
                  <div key={index} className="the-ul-list">
                    <ul className="this-is-ul" id="ul-list">
                      <li className="first-child-text list-item">
                        {mytext.menu_text_first_child}
                      </li>
                      <li className="second-child-text list-item">
                        {mytext.menu_text_second_child}
                      </li>
                      <li className="third-child-text list-item">
                        {mytext.menu_text_third_child}
                      </li>
                      <li className="fourth-child-text list-item">
                        {mytext.menu_text_fourth_child}
                      </li>
                      <li className="fifth-child-text list-item">
                        {mytext.menu_text_fifth_child}
                      </li>
                      <li className="last-child-text list-item">
                        {mytext.om_oss}
                      </li>
                      <li className="last-child-text list-item">
                        {mytext.kontakt}
                      </li>
                      <li className="icon list-item">
                        <label htmlFor="icon-field">
                          <FontAwesomeIcon icon={faHome} />
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
