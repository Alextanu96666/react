import React, {  useState, useEffect } from 'react';
    import Header from './components/header/header';
    import Section from "./components/first_page/firstsection";


    const App = () => {
const myItems = []
      const [state, setState ] = useState(myItems);
      useEffect(()=> {
        fetch('http://localhost/Wordpress/wordpress/wp-json/wp/v2/pages')
        .then(res => res.json())
        .then((data) => {
          setState({ items: data })
          console.log(state);
        })
      },[])
      
      
        return state.items ? (
          <div>
            <Header items={state.items} />
            <Section items={state.items} />
            
          </div>
        ) : (
          ""
        ); 
      
    }

    export default App;




    