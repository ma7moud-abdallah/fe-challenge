import React from 'react'
import { act } from 'react-dom/test-utils';
import { allSchools } from '../../common/constants';

import { render, fireEvent, screen } from '../../test.utils'


import App from './App';

const mockedDate = [
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
const fun = () => new Promise(jest.fn());
describe('app intialization', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockImplementation(jest.fn(() => Promise.resolve({json: () => Promise.resolve(mockedDate)})) as jest.Mock)  
  })
  

 it('should show loader while fetching data', async () => {
   jest.spyOn(global, 'fetch').mockImplementation(jest.fn(() => fun()) as jest.Mock)
    render(<App />)
    expect(await screen.findByTestId(/loader/)).toBeInTheDocument();
 })
 it('should draw the app UIs after fetching data', async () => {
   act(() => render(<App />))
   expect(await screen.findByTestId(/result/)).toBeInTheDocument();
   expect(await screen.findByTestId(/options/)).toBeInTheDocument();
  
 })
 it('should intiate dropdowns with the right values', async() => {
	act(() => render(<App />))
	expect(await screen.findByTestId(/selectSchool/)).toBeInTheDocument();
	expect(await screen.findByTestId(/selectCountry/)).toBeInTheDocument();
	expect(await screen.findByTestId(/selectCamp/)).toBeTruthy();
 })
 it('should display the list of schools', async() => {
	act(() => render(<App />))
	const schoolsList = mockedDate.filter(data => (data.country == 'Egypt') && (data.camp =='Omaka')).map(school => school.school)
	expect(await screen.findByText(schoolsList[0])).toBeInTheDocument()
 })
})