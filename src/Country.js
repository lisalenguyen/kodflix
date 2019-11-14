import React from 'react';

export default function Country(props) {
    return(
      <section className='row'>
        <figure className='country'> <img src={props.src} alt ={props.name}/><div className='overlay'><h3>{props.name}</h3></div></figure>
      </section>
    );
  }