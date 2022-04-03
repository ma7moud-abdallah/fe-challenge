import React, { useEffect, useRef, useState } from 'react'
import { Line } from 'react-chartjs-2';

import { useSelector } from 'react-redux';
import { allSchools, ChartLabels } from '../constants';
import { getAllLessons, getSchoolLessons, prepareChartDat } from '../matrics.service';
import { Chart } from './charts.interface';
import SchoolsList from './SchoolsList';

export const Results = () => {
    const dashboardData: any = useSelector((state) => state);
    const {data, camp, schools, school, country} = dashboardData.data;
    const [chartsData, setChartsData] =  useState(new Chart(ChartLabels));

    const chartRef = useRef()

useEffect(() => {
    // reset chart  
    setChartsData(new Chart(ChartLabels));
}, [country,camp]);

useEffect(() => {
  if (school === allSchools) return;
  let chartdata: any = prepareChartDat(getSchoolLessons(data[country][camp][school])[1]);
  let chart = 
    {
        label:school,
        backgroundColor: chartdata.color,
        borderColor: chartdata.color,
        data: chartdata.data
      
    }
    setChartsData({...chartsData, datasets: [chart]})
}, [school]);

const updateChartsData = (isChecked: boolean = true,schoolName: string) => {
    if(!isChecked) {
      const data = chartsData.datasets.filter(data => data.label !== schoolName)
      if(!data.length) return setChartsData(new Chart(ChartLabels)); 
      return setChartsData({...chartsData, datasets:  data})
    }
    let chartdata: any = prepareChartDat(getSchoolLessons(data[country][camp][schoolName])[1]);
    let chart = 
      {
          label:schoolName,
          backgroundColor: chartdata.color,
          borderColor: chartdata.color,
          data: chartdata.data
        
      }
      setChartsData({...chartsData, datasets: [...chartsData.datasets , chart]})
  }


  
  return (
    <div style={{backgroundColor: '#fff', marginTop: 15, padding: 10, display: 'flex', minHeight: 500}}>
          <div style={{ flex: 2, borderRight: '1px solid #eee' }}>
              {chartsData.datasets && <Line ref={chartRef} options={{ onClick: function(evt, element) {console.log(element, chartRef.current, evt)}}}  data={chartsData} />}
          </div>

          <div style={{ flex: 1, padding: '10px' }}>
              <h4> {getAllLessons(data[country][camp])} Lessons <br /> in {camp}</h4>
              <SchoolsList onCheckSchool={(isChecked: boolean, name: string) => updateChartsData(isChecked, name)} schools={school !== allSchools ? [school] : schools}  camp={data[country][camp]} />

          </div>
    </div>
  )
}
