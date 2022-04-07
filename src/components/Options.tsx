import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setCountry, setCamp, setSchool, resetActiveSchools, resetChart, updateActiveSchool } from '../redux/reducers';

import 'react-dropdown/style.css';
import { Dropdown } from '../components/uiComponents/Dropdown/Dropdown';
import { allSchools } from '../common/constants';

const  Options = () =>  {
    const dashboardData: any = useSelector((state) => state);
    const {data, countries, camp, school, camps, schools, country} = dashboardData.data;
    const dispatch = useDispatch();

    const handleOnCountryChange = (newCountry: string) => {
      const camps = Object.keys(data[newCountry]);
      const schools =   Object.keys(data[newCountry][camps[0]]);
      dispatch(setCountry({newCountry, camps, schools}));
      dispatch(resetActiveSchools({}));
      dispatch(resetChart({}));
    } 
    const handleOnCampChange = (newCamp: string) => {
        const schools = Object.keys(data[country][newCamp])
        dispatch(setCamp({newCamp, schools}));
        dispatch(resetActiveSchools({}));
        dispatch(resetChart({}));
    } 
    const handleOnSchoolChange = (newSchool: string) => {
        dispatch(setSchool(newSchool));
        dispatch(updateActiveSchool(newSchool));
    }
    return (
        <div data-testid='options' style={{display: 'flex', justifyContent: 'space-between'}}>
         <Dropdown testId = 'selectCountry' label={"Select Country"} options={countries} onChange={(option: string) => handleOnCountryChange(option)} value= {country}  placeholder="Select an option" />
         <Dropdown testId = 'selectCamp' label="Select Camp" options={camps} onChange={(option: string) => handleOnCampChange(option)} value = {camp}  placeholder="Select an option" />
         <Dropdown testId = 'selectSchool' label="Select School" options={[allSchools ,...schools]} onChange={(option: string) => handleOnSchoolChange(option)} value= {school || allSchools}  placeholder="Select an option" /> 
        </div>
    )
}

export default Options;

