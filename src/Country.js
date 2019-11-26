import React from 'react';
import { Link } from 'react-router-dom';

export default function Country(props) {
    return(
      <Link to={`/${props.id}`}> 
        <section className='row'>
          <figure className='country'> <img src={props.src} alt ={props.name}/><div className='overlay'><h3>{props.name}</h3></div></figure>
        </section>  
      </Link>
    );
  }