import React from 'react';
import { Link } from 'react-router-dom';

function Button(props) {
  return (
    <Link to={props.link}>
    <button className={props.class}>
      {props.value}
   </button>
   </Link>
    )
}


export default Button;
