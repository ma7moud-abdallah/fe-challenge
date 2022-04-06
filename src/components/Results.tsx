import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { allSchools } from '../common/constants';
import { getAllLessons, getSchoolLessons } from '../matrics.service';
import SchoolsList from './SchoolsList';
import ChartView from './ChartView';
import { updateCharData, resetChart } from '../redux/reducers';

export const Results = () => {
    const dashboardData: any = useSelector((state) => state);
    const {data, camp, schools, school, country, activeSchools, chartData} = dashboardData.data;
    const dispatch = useDispatch();

useEffect(() => {
  if (school === allSchools) return;
  let chartsdata: any = getSchoolLessons(data[country][camp][school])[1];
  let chart = 
    {
        label:school,
        backgroundColor: chartsdata.color,
        borderColor: chartsdata.color,
        data: chartsdata.data,
        ids: chartsdata.ids
      
    }
    dispatch(updateCharData([chart]))
}, [school]);


const updateChartsData = (isChecked: boolean = true,schoolName: string) => {
    if(!isChecked) {
      const data = chartData.datasets.filter((data: any) => data.label !== schoolName)
      if(!data.length) return dispatch(resetChart({})); 
      return dispatch(updateCharData(data))
    }
    let chartsdata: any = getSchoolLessons(data[country][camp][schoolName])[1];
    let chart = 
      {
          ids: chartsdata.ids,
          label:schoolName,
          backgroundColor: chartsdata.color,
          borderColor: chartsdata.color,
          data: chartsdata.data
        
      }
      const allData = JSON.parse(JSON.stringify(chartData.datasets));
      allData.push(chart)
      dispatch(updateCharData(allData))
  }
  
  return (
    <div style={{backgroundColor: '#fff', marginTop: 15, padding: 10, display: 'flex', minHeight: 500}}>
          <div style={{ flex: 2, borderRight: '1px solid #eee' }}>
              <ChartView  />
          </div>

          <div style={{ flex: 1, padding: '10px', paddingLeft: '30px' }}>
              <h3> {getAllLessons(data[country][camp])} Lessons <br /> in {camp}</h3>
              <SchoolsList onCheckSchool={(isChecked: boolean, name: string) => updateChartsData(isChecked, name)} isAallSchools = {school !== allSchools} schools={school !== allSchools ? [school] : schools}  camp={data[country][camp]} />

          </div>
    </div>
  )
}
