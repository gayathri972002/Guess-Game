import React from "react";

function Result ({secretNum,term})
{

let result ;

if(term){

if(term > secretNum)
  {
        result = 'Higher'
  }
else if(term < secretNum)
{
        result = 'Lower'
}
else if(term == secretNum)
  {
       result = 'congratulations ! your currect '
  }
 else
{
       result = 'Please Enter Your Valid Input'
 }
}

  return <h3> You Guessed : {result} </h3>
}
export default Result ;









