import React from 'react';
import ReactDOM from 'react-dom';
import TestComponent from "./components/TestComponent";


const reactEl = document.getElementById("react-app");
ReactDOM.render(<TestComponent />, reactEl);


console.log("Script Loads !")
