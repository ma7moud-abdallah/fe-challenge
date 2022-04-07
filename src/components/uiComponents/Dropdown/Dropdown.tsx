import React from 'react';
import './Dropdown.css'
export const Dropdown = (props: any) => {
    const { options, onChange, label, value, testId} = props;
    return (
      <div className='dropDown'>
        <label className='label'>{label}</label>
        <select
          data-testid={testId}
          className='select'
          onChange={(el) => onChange(el.target.value)}
          name={label}
          id={label}
          value = {value}
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
