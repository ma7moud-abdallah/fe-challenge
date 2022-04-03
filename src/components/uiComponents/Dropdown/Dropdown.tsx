import React from 'react';
import './Dropdown.css'
export const Dropdown = (props: any) => {
    const { options, onChange, label } = props;
    return (
      <div className='dropDown'>
        <label className='label'>{label}</label>
        <select
          className='select'
          onChange={(el) => onChange(el.target.value)}
          name={label}
          id={label}
        >
          {options.map((option: string) => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
    );
}
