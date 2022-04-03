import React, { useEffect, useState } from 'react'
import Card from '../components/uiComponents/Card/Card';


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
           <Card onClick = {toggleSchool} isSelected={isSelected}  school = {school} lessons = {lessons} />
         )
}

export default School;
