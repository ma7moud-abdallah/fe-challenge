import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { allSchools } from '../../constants';
import './Card.css'

const Card = (props: any) => {
    const dashboardData: any = useSelector((state) => state);
    const {school} = dashboardData.data;
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckBox = () => {
        setIsChecked(!isChecked);
        props.onClick(!isChecked, props.title)
    }
    useEffect(() => {
      setIsChecked(false)
    },[props.title, props.description])
    useEffect(() => {
      if (school === allSchools) return;
      setIsChecked(true);
    },[school])
  return (
    <label className='Card'>
        <span>{props.title} <br /> {props.description}</span>
        <input type="checkbox" onChange={handleCheckBox} checked={isChecked} />
        <span className='Mark'>
          <span className='round'></span>
        </span>
    </label>
  )
}

export default Card
