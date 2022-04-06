export const getAllLessons = (schools: any) => {
   let tootalLessons = 0;
   for(let school in schools) {
    tootalLessons += getSchoolLessons(schools[school])[0]
   }
   return tootalLessons;
}

export const getSchoolLessons = (school: any) => { 
   const sortedSchools = sortSchoolRecords(school);
   let ids = Array.from(Array(12), () => 0);
   let data = Array.from(Array(12), () => 0);
    let chartsData:any = {data: [], ids: [], labels: []}
    let tootalLessons = 0;
       for(let lesson of sortedSchools) {
         const index = Mounths[lesson.month] - 1
          chartsData.color = lesson.color;
          tootalLessons += lesson.lessons;
          ids[index] = lesson.id; 
          data[index] = lesson.lessons;
       }
      chartsData.ids = ids;
      chartsData.data = data;
    return [tootalLessons, chartsData];
 }

 const sortSchoolRecords = (arr: any) => {
     return arr.slice().sort((a: any, b: any) => Mounths[a.month] - Mounths[b.month])
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