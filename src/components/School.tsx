import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Card from '../components/uiComponents/Card/Card';
import { allSchools } from '../common/constants';


const School = (props:any) => {
  const {lessons, school, onClick, isAallSchools} = props;
  const [isSelected, setIsSelected] = useState(false);
  const toggleSchool = () => {
    setIsSelected(!isSelected);
    onClick(!isSelected, school)
  }
  useEffect(() => {
    setIsSelected(isAallSchools)
    },[school, lessons, isAallSchools])
    return (
           <Card onClick = {toggleSchool} isSelected={isSelected}  title = {school} description = {lessons} />
         )
}

export default School;
