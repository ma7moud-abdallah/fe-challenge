import dataJson from './data.json';

export const ChartLabels  = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

interface Data {
    [key: string]: {
      [key: string]: {
        [key: string]: {
          [key: string]: {

          }
        }
      }
    },
}


const data: Data = {}
dataJson.map(obj => { 
    const {country, camp, school} = obj
    data[country] = data[country] || {};
    if(data[country][camp]){
      return data[country][camp] = {...data[country][camp],[obj.school]: {...data[country][camp][school],
        [obj.id]: {
          lessons: {
            lessonsNumber: obj.lessons,
            month: obj.month
          }
        }   
     }}
    }
    data[country][camp] = {...data[country][camp], [obj.school]: {
       [obj.id]: {
         lessons: {
           lessonsNumber: obj.lessons,
           month: obj.month
         }
       }   
    }}

  })

  export const allSchools = "All Schools";