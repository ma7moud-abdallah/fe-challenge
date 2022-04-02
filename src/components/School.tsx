import React from 'react'
import { getSchoolLessons } from '../matrics.service';
import Card from './Card/Card';


const School = (props:any) => {
    return (
           <Card onClick= {(isChecked: boolean) => props.onClick(isChecked,props.school)} title = {props.school} description = {props.Lessons} />
         )
}

export default School;
