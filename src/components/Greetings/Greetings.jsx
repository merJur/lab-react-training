import React from 'react';
import './Greetings.css';

const Greetings = ( props ) => {
  const {lang, children} = props

  let greet = ''
    if(lang === 'es') {
        greet = 'Hola'
    } if (lang === 'fr') {
        greet = 'Salut'
    } if (lang === 'de') {
        greet = 'Hallo'
    } if(lang === 'en') {
        greet = 'Hello'}


  return (
    <p className="Phrase-greetings">
   {greet}
  {children.props.children}
    </p>
  );
  }

export default Greetings;
