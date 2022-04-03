export interface Data {
    [country: string]: {
      [camp: string]: {
        [school: string]: {
          [id: string]: {
            id: string,
            month: string,
            camp: string,
            country: string,
            school: string,
            lessons: number,
            color: string
          }
        }
      }
    },
}

export interface SchoolRecord {
  id: string;
  school: string;
  camp: string;
  country: string
  lessons: number
  month: string
}