import React from 'react'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { SchoolRecord } from '../common/data.interface';

const Details = () => {
  const state:any = useLocation().state;
  const dashboardData: any = useSelector((state) => state);
  const {data} = dashboardData.data;
  let details: any;
  details = {...state};
  details = {...details , ...data[details.country][details.camp][details.school].find((el: SchoolRecord) => el.id === details.id)};
  return (
    <div style={{backgroundColor: details.color, width: 800, height: 300 ,padding: 10, color: '#fff', fontWeight: 'bold'}}>
        <h1 style={{fontStyle: 'italic'}}>Class Details</h1>
        {Object.keys(details).map((el: string) => (
            el !== 'id' && el !== 'color'  && <p  key={el}>{el}: <span style={{fontWeight: 'lighter'}}>{(details[el])}</span></p>

        ))}
    </div>
  )
}
export default Details;
