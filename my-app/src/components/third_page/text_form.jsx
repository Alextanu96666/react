import React from "react";

const Textform = ({myprops}) => {
    return (
        <React.Fragment>
            
            <div className = "name-input">
                <h2>Namn</h2>
                <input type = "text" name = "client-name"  className="inputfield"></input>
            </div>
            <div className="email-input">
                <h2>E-mail</h2>
                <input type="text" name="client-email"  className="inputfield"></input>
            </div>
            <div className="message-input">
                <h2>Meddelande</h2>
                <textarea rows= "4" name="comment" className="inputfield"></textarea>
            </div>
        </React.Fragment>
    )
}

export default Textform;