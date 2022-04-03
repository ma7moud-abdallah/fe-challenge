import React from 'react'
import { JsxElement } from 'typescript'
import { getSchoolLessons } from '../matrics.service'
import School from './School'

const SchoolsList = (props: any) => {
  const {schools, camp} = props
  return (
    <div>
        { schools &&   schools.map((school: string) => (
          <div key={school}>
              <School  onClick = {(isChecked: boolean, name: string) => props.onCheckSchool(isChecked,name)}  school={school} Lessons = {getSchoolLessons(camp[school])[0]}/>          
           </div>
          
        ))}
    </div>
    
  )
}

export default SchoolsList;