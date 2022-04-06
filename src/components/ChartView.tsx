import React, { useEffect } from 'react'
import { Line } from 'react-chartjs-2';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';


const ChartView = () => {
 const navigate = useNavigate();
 const dashboardData: any = useSelector((state) => state);
 const {camp, country, chartData} = dashboardData.data;

 const handleChart = (evt: any, element: any) => {
     
    if(!element.length) return;
    const {datasetIndex, index} = element[0];
    if(index === 0) return;
    const {ids, label} = evt?.chart?._metasets[datasetIndex]?._dataset;
    navigate('/details', {state: {id: ids[index], country, camp, school: label}})
    
  }
  return (
      <Line  options={{ onClick: (evt, element) => handleChart(evt, element)}}  data={chartData} />
  )
}

export default ChartView;
