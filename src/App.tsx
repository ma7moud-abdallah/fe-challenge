import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { Line  } from 'react-chartjs-2';
import  getDatasetAtEvent   from 'react-chartjs-2';
import Options from './components/Options';
import { getAllLessons, getSchoolLessons, prepareChartDat } from './matrics.service';
import School from './components/School';
import { ChartLabels } from './constants';
import SchoolsList from './components/SchoolsList';
import { Data } from './data.model';
import Loader from './components/Loader/Loader';
import {  setData, setCamp, setCountry, setSchool } from "./redux/reducers";




const analysisData: Data = {};

// app start 
const App = () => {
  const selectedFilter: any = useSelector(state => state);
  const dispatch = useDispatch();
  const chartRef = useRef();
  const [appData, setAppData] =  useState<Data>({});
  const [countries, setCountries] =  useState(['']);
  const [isLoading, setIsLoading] =  useState(true);
  const [camps, setCamps] =  useState(['']);
  const [schools, setschools] =  useState(['']);
  const [country, setCountry] =  useState('');
  const [camp, setCamp] =  useState('');
  const [school, setschool] =  useState('');
  const [chartsData, setChartsData] =  useState({
    labels: ChartLabels,
    datasets: [{
      label:"",
        backgroundColor: '',
        borderColor: '',
        data: []
    }]
  });
  // handle filters changes
  const handleOnCountryChange = (newCountry: string) => {
    console.log(newCountry)
     setCountry(newCountry);
     let camp = Object.keys(appData[newCountry])[0];
     setCamp(camp);
     let schools = ["All Schools", ...Object.keys(appData[country][camp])]
    setschools(schools);
     setschool("All Schools");
     resetChart();
  } 
   const handleOnCampChange = (newCamp: string) => {
    setCamp(newCamp);
    let schools = ["All Schools", ...Object.keys(appData[country][newCamp])]
    setschools(schools);
    setschool("All Schools");
    resetChart();
 } 
  const handleOnSchoolChange = (newSchool: string) => {
    setschool(newSchool);
    resetChart();
}

const resetChart = () => {
  class Chart {
    label: string;
    backgroundColor: string;
    borderColor: string;
    data: any;
    constructor() {
      this.label = "";
      this.backgroundColor = "#fff";
      this.borderColor = "#fff";
      this.data = []
    }
}
let chart: Chart = new Chart();  
  setChartsData({...chartsData, datasets: [chart]});
}

const updateChartsData = (isChecked: boolean = true,schoolName: string) => {
  if(!isChecked) {
    const data = chartsData.datasets.filter(data => data.label !== schoolName)
    return setChartsData({...chartsData, datasets:  data})
  }
  let chartdata: any = prepareChartDat(getSchoolLessons(appData[country][camp][schoolName])[1]);
  let chart = 
    {
        label:schoolName,
        backgroundColor: chartdata.color,
        borderColor: chartdata.color,
        data: chartdata.data
      
    }
    setChartsData({...chartsData, datasets: [...chartsData.datasets , chart]})
}
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
    /*dispatch(setData(analysisData));
    console.log(appData)*/
    setAppData(analysisData);
    let country = Object.keys(analysisData)[0];
    let camp = Object.keys(analysisData[country])[0];
    let schools = Object.keys(analysisData[country][camp]);
    setCountry(country);
    setCamp(camp);
    resetChart();
    setschools(['All Schools', ...schools]);
    setschool('All Schools');
    setIsLoading(false);
}
/*const handleChartClick = (e: any) => {
   console.log(e.target.value, chartRef.current)
}*/
//onsole.log(selectedFilter)

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
        
        <div style={{display: 'flex', flex: 1, flexDirection:'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <Options onChange = {(newCountry: string) => handleOnCountryChange(newCountry)} options={Object.keys(appData)} />
          <Options onChange = {(newCamp: string) => handleOnCampChange(newCamp)} options={Object.keys(appData[country])} />
          <Options onChange = {(newSchool: string) => handleOnSchoolChange(newSchool)}  options={schools} />
        </div>
        <div style={{backgroundColor: '#fff', marginTop: 15, padding: 10, display: 'flex', minHeight: 500}}>
          <div style={{flex: 2}}>
            {chartsData.datasets && <Line ref={chartRef} data= {chartsData}/>}
          </div>
        
        <div style={{flex: 1}}> 
            <h4> {getAllLessons(appData[country][camp])} Lessions <br /> in {camp}</h4>
            <SchoolsList onCheckSchool = {(isChecked: boolean,name: string) => updateChartsData(isChecked, name)} schools = { school !== "All Schools" ? [school] : Object.keys(appData[country][camp])} camp = {appData[country][camp]} /> 

        </div>
        </div>
        
      </div>
     }
     </>
  );
}

export default App;
