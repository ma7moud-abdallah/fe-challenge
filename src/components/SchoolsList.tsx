import React from 'react';
import { getSchoolLessons } from './school.service'
import School from './School'

const SchoolsList = (props: any) => {
  const {schools, camp, onCheckSchool, isAallSchools} = props;
  return (
    <div>
        { schools?.map((school: string) => (
          <div key={school}>
              <School isAallSchools = {isAallSchools}  onClick = {(isChecked: boolean, name: string) => onCheckSchool(isChecked,name)}  school={school} lessons = {getSchoolLessons(camp[school])[0]}/>          
           </div>
          
        ))}
    </div>
    
  )
}

export default SchoolsList;