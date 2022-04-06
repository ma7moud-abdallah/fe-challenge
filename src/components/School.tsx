import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/uiComponents/Card/Card';
import { updateActiveSchool, removeActiveSchool } from '../redux/reducers';


const School = (props:any) => {
  const dashboardData: any = useSelector((state) => state);
  const {activeSchools} = dashboardData.data;
  const {lessons, school, onClick, isAallSchools} = props;
  const dispatch = useDispatch();
  const [isSelected, setIsSelected] = useState(false);
  const toggleSchool = () => {
    !isSelected ? dispatch(updateActiveSchool(school)) : dispatch(removeActiveSchool(school));
    setIsSelected(!isSelected);
    onClick(!isSelected, school)
  }
  useEffect(() => {
    activeSchools.includes(school) ? setIsSelected(true): setIsSelected(false);

    },[school, lessons, isAallSchools])
    return (
           <Card onClick = {toggleSchool} isSelected={isSelected}  school = {school} lessons = {lessons} />
         )
}
export default School;


