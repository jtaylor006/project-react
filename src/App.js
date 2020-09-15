import React from 'react';
import Tweet from "./tweet";

function App(){

  const sayHello = () => {
    console.log("hello");
  };

  return(
    <div>
      <h1>Hello React</h1>
      <Tweet />
    </div>
  );
}

export default App;