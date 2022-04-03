import React from 'react';
import 'react-dropdown/style.css';
import { Dropdown } from './Dropdown';

const  Options = (props: any) =>  {
    return (
        <div>
         <Dropdown options={props.options} onChange={(option: string) => props.onChange(option)} value={props.options[0]} placeholder="Select an option" />  
        </div>
    )
}

export default Options
