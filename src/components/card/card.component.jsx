import React from 'react';
import './card.styles.css';

export const Card = props => (
    <div className='card-container'>
    <img alt="presenter" src={`https://robohash.org/${props.presenter.id}?set=set2&size=180x180`} />
    <h1> {props.presenter.name} </h1>
    <p> {props.presenter.email} </p>
    </div>
);