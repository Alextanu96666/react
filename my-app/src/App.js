import React, { useState, useEffect } from "react";
import Header from "./components/header/header";
import Section from "./components/first_page/firstsection";
import Section2 from "./components/second_page/second_page";
import Section4 from "./components/fourth_page/fourth_page";
import Section5 from "./components/fifth_page/fifth_page";

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
    <div>
      <Header items={state.items} />
      <Section items={state.items} />
      <Section2 items={state.items} />
      <Section4 items={state.items} />
      <Section5 items={state.items} />
    </div>
  ) : (
    ""
  );
};

export default App;
