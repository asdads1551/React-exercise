import React from 'react';
import ReactDOM from 'react-dom';

function App(){
  return React.createElement("h1" , null , "This is React App.");
}

ReactDOM.render(React.createElement(App),document.querySelector("#root"));

