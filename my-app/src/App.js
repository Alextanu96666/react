import React, { useState, useEffect } from "react";
import Header from "./components/header/header";
import Section from "./components/first_page/firstsection";
import Section2 from "./components/second_page/second_page";
import Section3 from "./components/third_page/third_page";
import Section4 from "./components/fourth_page/fourth_page";
import Section5 from "./components/fifth_page/fifth_page";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  const myItems = [];
  const [state, setState] = useState(myItems);
  useEffect(() => {
    fetch("http://localhost/Wordpress/wordpress/wp-json/wp/v2/pages")
      .then(res => res.json())
      .then(data => {
        setState({ items: data });
        console.log(state);
      });
  }, []);

  return state.items ? (
    <Router>
      <div>
        <Header items={state.items} />
        <Switch>
          <Route exact path="/">
            <Section items={state.items} />
            <Section2 items={state.items} />
            <Section4 items={state.items} />
            <Section5 items={state.items} />
            
          </Route>

          <Route
            path="/kontakt"
            render={() => <Section3 items={state.items} />}
          />
        </Switch>
      </div>
    </Router>
  ) : (
    ""
  );
};

export default App;
