import React from 'react';
import {Card} from '../card/card.component';
import './card-list.style.scss'

export const CardList = (props) => {
    return (
        <div className="card-list">
            {
          props.monosters.map(monster => 
          <Card key = {monster.id} monster = {monster}/>
          )
        }
        </div>
    )
}