import React from 'react';
import './Card.css'

interface CardData {
  school: string;
  lessons: string;
  isSelected: boolean;
  onClick: any;
}
const Card = (props: CardData) => {
const {lessons, school, isSelected, onClick } = props; 

  return (
    <label className='card'>
        <span className={isSelected ? 'checkedCard' : ''}>{lessons} Lessons <br /> in  {school}</span>
        <input type="checkbox" onChange={onClick} checked={isSelected} />
        <div className='check'>
          <div className='circle'></div>
        </div>
    </label>
  )
}

export default Card
