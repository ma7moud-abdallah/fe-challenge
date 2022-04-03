import React from 'react'
import { JsxElement } from 'typescript'
import { getSchoolLessons } from '../matrics.service'
import School from './School'

const SchoolsList = (props: any) => {
  const {schools, camp, onCheckSchool, isAallSchools} = props;
  console.log(isAallSchools)
  return (
    <div>
        { schools?.map((school: string) => (
          <div key={school}>
              <School isAallSchools = {isAallSchools}  onClick = {(isChecked: boolean, name: string) => onCheckSchool(isChecked,name)}  school={school} Lessons = {getSchoolLessons(camp[school])[0]}/>          
           </div>
          
        ))}
    </div>
    
  )
}

export default SchoolsList;