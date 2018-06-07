import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

const Button = ({ link, className, children}) => 
   (
    <Link to={link}>
    <button className={className}>
      {children}
   </button>
   </Link>
    )

Button.propTypes = { 
  link: propTypes.string,
  className: propTypes.string,
  children: propTypes.string
}

export default Button;
