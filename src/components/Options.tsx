import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const  Options = (props: any) =>  {
    return (
        <div>
         <Dropdown options={props.options} onChange={(option) => props.onChange(option.value)} value={props.options[0]} placeholder="Select an option" />  
        </div>
    )
}

export default Options
