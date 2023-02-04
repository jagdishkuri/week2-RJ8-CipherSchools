import React from "react";
import PropTypes  from "prop-types";
import { useState } from "react";
export default function Prop1(props) {
  const Onclickhandle=()=>{
    let newtext="This is Ciper School Course result";
    settext(newtext);
  }
  
   const[text, settext]=useState("Hello this is click event");
  return (
    <div>
    <h1>
      Hello {props.firstname} {props.lastName}
    </h1>
    <h1>{text}</h1>
    <button onClick={Onclickhandle}>Click me to check events </button>

    </div>
  );
}

Prop1.propTypes={
  firstname: PropTypes.string,
  lastName: PropTypes.string,
}

