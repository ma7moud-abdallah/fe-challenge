import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { Data, SchoolRecord } from '../common/data.interface';
import Loader from '../components/uiComponents/Loader/Loader';
import { setAppState } from "../redux/reducers";
import { Routes, Route } from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';
import { intializeApp } from './app.service';

let analysisData: Data = {};

// app start 
const App = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] =  useState(true);

const intializeAppState = (data: SchoolRecord[]) => {
    // intiate appData
    analysisData = intializeApp(data)
    dispatch(setAppState(analysisData));
    setIsLoading(false);
}


useEffect(() => {
    fetch("https://raw.githubusercontent.com/abdelrhman-arnos/analysis-fe-challenge/master/data.json")
    .then(response => response.json())
    .then(data => intializeAppState(data));
},[])

  return (
    <div style={{padding: '25px',  backgroundColor: '#F5F6FA', height:'100vh' }} >
    <div style={{color: '#8E63AC'}}>
      <h1 style={{fontWeight: 'lighter'}}>Analysis Chart</h1>
      <p>Number of lessons</p>
    </div>
    {isLoading ? <Loader /> : <Routes>
      <Route path="/" element={<Dashboard /> } />
      <Route path="/details" element={<Details />} />
      </Routes> }
     </div>
  );
}

export default App;
