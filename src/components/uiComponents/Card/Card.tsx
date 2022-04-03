import React from 'react';
import './Card.css'

interface CardData {
  title: string;
  description: string;
  isSelected: boolean;
  onClick: any;
}
const Card = (props: CardData) => {
const {title, description, isSelected, onClick } = props; 

  return (
    <label className='card'>
        <span>{title} <br /> {description}</span>
        <input type="checkbox" onChange={onClick} checked={isSelected} />
        <span className='check'>
          <span className='circle'></span>
        </span>
    </label>
  )
}

export default Card
