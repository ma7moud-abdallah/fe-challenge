import { Data } from "../../common/data.interface";
import { intializeApp } from "./app.service";
let appData: Data = {};
const data = [
	{
		"id": "620af3a468e4b2e765e7c9e7",
		"month": "Feb",
		"camp": "Omaka",
		"country": "Egypt",
		"school": "Burke High School",
		"lessons": 140
	},
	{
		"id": "620af3a4b8c8ca0afd385a9c",
		"month": "Apr",
		"camp": "Kakuma",
		"country": "Egypt",
		"school": "Kakuma Secondary",
		"lessons": 170
	},
	{
		"id": "620af3a4a812c63fb1945ac9",
		"month": "Oct",
		"camp": "Kakuma",
		"country": "Egypt",
		"school": "Jolie Boarding School",
		"lessons": 215
	},
	{
		"id": "620af3a4288ab1f9ee2f56d0",
		"month": "Mar",
		"camp": "Lemaci",
		"country": "Tunisia",
		"school": "Columbia Law School",
		"lessons": 50
	},
	{
		"id": "620af3a47c41df4c2f41bc4d",
		"month": "Sep",
		"camp": "Kakuma",
		"country": "Tunisia",
		"school": "Jolie Boarding School",
		"lessons": 200
	},
	{
		"id": "620af3a4a51109b48e12019d",
		"month": "Sep",
		"camp": "Omaka",
		"country": "Tanzania",
		"school": "Te Kupenga Preschool",
		"lessons": 60
	},
	{
		"id": "620af3a4479c4393af4976b8",
		"month": "Apr",
		"camp": "Omaka",
		"country": "Kenya",
		"school": "Burke High School",
		"lessons": 115
	}]
	beforeAll(() => {
		 appData = intializeApp(data);
	})
describe('intializeApp' , () => {
	it('should get the right countries from backend with now repeated countruies', () => {
		const countriesSet = new Set();
		const coutries = Object.keys(appData);
        coutries.map(country => countriesSet.add(country));
		expect(coutries.length).toEqual(4);
		expect(coutries.length).toEqual(countriesSet.size);

	})
	it('should get all camps per each country', () => {
		const country = 'Egypt';
		const camps = Object.keys(appData[country]);
		expect(camps.includes('Kakuma')).toBeTruthy;
		expect(camps.includes('Omaka')).toBeTruthy;
	})
	it('should get all schools per each camp in country', () => {
		const country = 'Egypt';
		let camp = 'Omaka'
		const schools = Object.keys(appData[country][camp]);
		expect(schools.includes('Burke High School')).toBeTruthy;
		expect(schools.includes('Te Kupenga Preschool')).toBeFalsy;
	})

})
