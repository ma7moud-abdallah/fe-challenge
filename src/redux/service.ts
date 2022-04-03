import { Data } from "../common/data.interface";

export const fillState = (appData: Data) => {
    let countries = Object.keys(appData);
    let country = countries[0];
    let camps = Object.keys(appData[country]);
    let camp = camps[0]
    let schools = Object.keys(appData[country][camp]);
    let school = schools[0];
    let data = appData;
    return {countries, country, data, camp, camps, schools, school};
  }