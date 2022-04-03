import React from 'react'
import Card from '../uiComponents/Card/Card';


const School = (props:any) => {
    return (
           <Card onClick= {(isChecked: boolean) => props.onClick(isChecked, props.school)} title = {props.school} description = {props.Lessons} />
         )
}

export default School;
