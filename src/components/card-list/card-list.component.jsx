import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = props => (
    <div className='card-list'>
    {props.presenters.map(presenter => (
        <Card key={presenter.id} presenter={presenter} /> 
    ))}
    </div>
);