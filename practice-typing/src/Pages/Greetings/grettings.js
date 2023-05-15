import React from "react";
import './grettings.css'
const grettingData = () => {
  // let currDate = new Date();
  let currDate = new Date(2022,5,6,9);
  currDate = currDate.getHours();

  const cssStyle={}

  let greeting = "";

  if (currDate >= 1 && currDate <12){
    greeting='Good Morning';
    cssStyle.color='green'
  }else if(currDate >= 12 && currDate <19){
    greeting='Good Afternoon';
    cssStyle.color='#fa9191'
  }
  else{
    greeting='Good Night'
    cssStyle.color='gray'
  }
    return (
      <div>
        <h1>Hello Sir,<span style={cssStyle}> {greeting}</span></h1>
        <input type="text"></input>
      </div>
    );
};

export default grettingData;
