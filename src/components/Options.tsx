import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setCountry, setCamp, setSchool } from '../redux/reducers';

import 'react-dropdown/style.css';
import { Dropdown } from '../components/uiComponents/Dropdown/Dropdown';
import { allSchools } from '../common/constants';

const  Options = () =>  {
    const dashboardData: any = useSelector((state) => state);
    const {data, countries, camps, schools, country} = dashboardData.data;
    const dispatch = useDispatch();
    

    const handleOnCountryChange = (newCountry: string) => {
      const camps = Object.keys(data[newCountry]);
      const schools =   Object.keys(data[newCountry][camps[0]]);
      dispatch(setCountry({newCountry, camps, schools}));
    } 
    const handleOnCampChange = (newCamp: string) => {
        const schools = Object.keys(data[country][newCamp])
        dispatch(setCamp({newCamp, schools}));
    } 
    const handleOnSchoolChange = (newSchool: string) => {
        dispatch(setSchool(newSchool));
    }
    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
         <Dropdown label={"Select Country"} options={countries} onChange={(option: string) => handleOnCountryChange(option)}  placeholder="Select an option" />
         <Dropdown label="Select Camp" options={camps} onChange={(option: string) => handleOnCampChange(option)}  placeholder="Select an option" />
         <Dropdown label="Select School" options={[allSchools ,...schools]} onChange={(option: string) => handleOnSchoolChange(option)}  placeholder="Select an option" /> 
        </div>
    )
}

export default Options
