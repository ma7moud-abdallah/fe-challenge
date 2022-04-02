export const getAllLessons = (schools: any) => {
   let tootalLessons = 0;
   for(let school in schools) {
    tootalLessons += getSchoolLessons(schools[school])[0]
   }
   return tootalLessons;
}

export const getSchoolLessons = (school: any) => {
    let chartsData:any = {data: []}
    let tootalLessons = 0;
       for(let lesson in school) {
          chartsData.color = school[lesson].color
          tootalLessons += school[lesson].lessons
          chartsData.data.push([[school[lesson].month], school[lesson].lessons])
       }
    return [tootalLessons, chartsData];
 }

 export const prepareChartDat: any = (chartData: any): any => {
      const sortedArray = chartData.data.sort(function(a: any,b: any)  {  
        return Mounths[a[0]] - Mounths[b[0]];
      })
      chartData.data = chartData.data.map((el:any) => el[1]);
      return chartData
 }

 let Mounths: any = {
        'Jan': 1,
        'Feb': 2,
        'Mar': 3,
        'Apr': 4,
        'May': 5,
        'Jun': 6,
        'Jul': 7,
        'Aug': 8,
        'Sep': 9,
        'Oct': 10,
        'Nov': 11,
        'Dec': 12
 }