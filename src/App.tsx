import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import Options from './components/Options';
import { getSchoolLessons, prepareChartDat } from './matrics.service';
import { ChartLabels } from './constants';
import { Data } from './data.model';
import Loader from './components/Loader/Loader';
import {  setAppState } from "./redux/reducers";
import { Results } from './components/Results';




const analysisData: Data = {};

// app start 
const App = () => {
  const dispatch = useDispatch();
  const [appData, setAppData] =  useState<Data>({});
  const [isLoading, setIsLoading] =  useState(true);
  const [country, setCountry] =  useState('');
  const [camp, setCamp] =  useState('');

interface SchoolRecord {
  id: string;
  school: string;
  camp: string;
  country: string
  lessons: number
  month: string
}
const intializeAppState = (data: SchoolRecord[]) => {
    // intiate appData
    data.map(obj => { 
      const {country, camp, school} = obj
      analysisData[country] = analysisData[country] || {};
      if(analysisData[country][camp]){
        return analysisData[country][camp] = {...analysisData[country][camp],[obj.school]: {...analysisData[country][camp][school],
          [obj.id]: {color: `#${Math.floor(Math.random()*16777215).toString(16)}`, ...obj}  
      }}
      }
      analysisData[country][camp] = {...analysisData[country][camp], [obj.school]: {
        [obj.id]: {color: `#${Math.floor(Math.random()*16777215).toString(16)}`, ...obj}  
      }}

    })
    dispatch(setAppState(analysisData));
    setAppData(analysisData);
    let country = Object.keys(analysisData)[0];
    let camp = Object.keys(analysisData[country])[0];
    let schools = Object.keys(analysisData[country][camp]);
    setCountry(country);
    setCamp(camp);
    setIsLoading(false);
}


useEffect(() => {
    fetch("https://raw.githubusercontent.com/abdelrhman-arnos/analysis-fe-challenge/master/data.json")
    .then(response => response.json())
    .then(data => intializeAppState(data));
},[])

  return (
      <>
      {isLoading ? <Loader />:  
      <div style={{padding: '25px',  backgroundColor: '#eee', height:'100vh' }} >
        <div className='Header'>
          <h1>Analysis Chart</h1>
          <p>Number of lessons</p>
        </div>
        <div >
          <Options />
        </div>
        <div >
          <Results />
        </div>
        
      </div>
     }
     </>
  );
}

export default App;
