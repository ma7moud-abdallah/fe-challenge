import { Data, SchoolRecord } from "../common/data.interface";

const dynamicValues = {
    color: `#${Math.floor(Math.random()*16777215).toString(16)}`,
    isActive: false
}

export const intializeApp = (data: SchoolRecord[]) => {
    const analysisData: Data = {};
    data.map(obj => { 
        const {country, camp, school} = obj;
        analysisData[country] = analysisData[country] || {};
        if(analysisData[country][camp]){
          if(analysisData[country][camp][school]){
            return analysisData[country][camp][school] = [...analysisData[country][camp][school], {color: `#${Math.floor(Math.random()*16777215).toString(16)}`, ...obj}]
          }
          return analysisData[country][camp] = {...analysisData[country][camp], [obj.school]: [{color: `#${Math.floor(Math.random()*16777215).toString(16)}`, ...obj}]  
        }
        }
        analysisData[country][camp] = {...analysisData[country][camp], [obj.school]:  [{color: `#${Math.floor(Math.random()*16777215).toString(16)}`, ...obj}] 
       }
  
      })
      return analysisData;

}