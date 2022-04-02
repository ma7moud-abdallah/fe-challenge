import React, { useEffect, useState } from 'react'
import './Card.css'

const Card = (props: any) => {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckBox = () => {
        setIsChecked(!isChecked);
        props.onClick(!isChecked, props.title)
    }
    useEffect(() => {
      setIsChecked(false)
    },[props.title, props.description])
  return (
    <label className='Card'>
        <span>{props.title} <br /> {props.description}</span>
        <input type="checkbox" onChange={handleCheckBox} checked={isChecked} />
        <span className='Mark'>
        </span>
    </label>
  )
}

export default Card
