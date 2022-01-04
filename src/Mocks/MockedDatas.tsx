import { department, americanState, Employee } from '../models/models';

// Departments datas to show on the select menu of the form 
const departments:department[] = [
  { value: 'sales', label: 'Sales' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'engineering', label: 'Engineering' },
  { value: 'human ressources', label: 'Human Ressources' },
  { value: 'legal', label: 'Legal' }
];

export const sortedDepartments: department[] = departments.sort((a, b) => {
	if(a.value < b.value) {
		return -1
	} else {
		return 1
	}
});

// States datas to show on the select menu of the form 
const americanStates:americanState[] = [
	{ value: 'california', label: 'California' },
	{ value: 'federated states of micronesia', label: 'Federated States of Micronesia' },
	{ value: 'alaska', label: 'Alaska' },
	{ value: 'indiana', label: 'Indiana' },
	{ value: 'american Samoa', label: 'American Samoa' },
	{ value: 'arizona', label: 'Arizona' },
	{ value: 'arkansas', label: 'Arkansas' },
	{ value: 'colorado', label: 'Colorado' },
	{ value: 'connecticut', label: 'Connecticut' },
	{ value: 'delaware', label: 'Delaware' },
	{ value: 'alabama', label: 'Alabama' },
	{ value: 'florida', label: 'Florida' },
	{ value: 'georgia', label: 'Georgia' },
	{ value: 'guam', label: 'Guam' },
	{ value: 'hawaii', label: 'Hawaii' },
	{ value: 'idaho', label: 'Idaho' },
	{ value: 'illinois', label: 'Illinois' },
	{ value: 'iowa', label: 'Iowa' },
	{ value: 'district of colombia', label: 'District of Colombia' },
  { value: 'kansas', label: 'Kansas' },
  { value: 'kentucky', label: 'Kentucky' },
  { value: 'louisiana', label: 'Louisiana' },
  { value: 'maine', label: 'Maine' },
  { value: 'marshall Islands', label: 'Marshall Islands' },
  { value: 'maryland', label: 'Maryland' },
  { value: 'massachussets', label: 'Massachussets' },
  { value: 'michigan', label: 'Michigan' },
  { value: 'minnesota', label: 'Minnesota' },
  { value: 'mississippi', label: 'Mississippi' },
  { value: 'missouri', label: 'Missouri' },
  { value: 'montana', label: 'Montana' },
  { value: 'nebraska', label: 'Nebraska' },
  { value: 'nevada', label: 'Nevada' },
  { value: 'new Hampshire', label: 'New Hampshire' },
  { value: 'new Jersey', label: 'New Jersey' },
  { value: 'new Mexico', label: 'New Mexico' },
  { value: 'new York', label: 'New York' },
  { value: 'north Carolina', label: 'North Carolina' },
  { value: 'north Dakota', label: 'North Dakota' },
  { value: 'northern mariana islands', label: 'Northern Mariana Islands' },
  { value: 'ohio', label: 'Ohio' },
  { value: 'oklahoma', label: 'Oklahoma' },
  { value: 'oregon', label: 'Oregon' },
  { value: 'palau', label: 'Palau' },
  { value: 'pennsylvania', label: 'Pennsylvania' },
  { value: 'puerto Rico', label: 'Puerto Rico' },
  { value: 'rhode Islands', label: 'Rhode Islands' },
  { value: 'south Carolina', label: 'South Carolina' },
  { value: 'south Dakota', label: 'South Dakota' },
  { value: 'tennessee', label: 'Tennessee' },
  { value: 'texas', label: 'Texas' },
  { value: 'utah', label: 'Utah' },
  { value: 'vermont', label: 'Vermont' },
  { value: 'virgin islands', label: 'Virgin Islands' },
  { value: 'virginia', label: 'Virginia' },
  { value: 'washington', label: 'Washington' },
  { value: 'west virginia', label: 'West Virginia' },
  { value: 'wisconsin', label: 'Wisconsin' },
  { value: 'wyoming', label: 'Wyoming' }
];

export const sortedAmericanStates: americanState[] = americanStates.sort((a, b) => {
	if(a.value < b.value) {
		return -1
	} else {
		return 1
	}
})

// Just some employees datas to show on the demo version
export const MockedEmployees: Employee[] = [
	{
		firstName: "Robert",
		lastName: "Chang",
		birthDate: "1995-06-25",
		startDay: "2019-12-08",
		street: "9 Pigalle street",
		city: "Houston",
		state: "Texas",
		zipcode: 25550,
		department: "Human Ressources",
	},
	{
		firstName: "Jason",
		lastName: "Flores",
		birthDate: "1994-05-07",
		startDay: "2019-05-13",
		street: "12 Down street",
		city: "Atlanta",
		state: "Georgia",
		zipcode: 49960,
		department: "Marketing",
	},
	{
		firstName: "Pablo",
		lastName: "Camara",
		birthDate: "1999-23-12",
		startDay: "2014-05-01",
		street: "Palace Place",
		city: "Cleveland",
		state: "Ohio",
		zipcode: 68550,
		department: "Sales",
	},
	{
		firstName: "Mohamed",
		lastName: "Dupont",
		birthDate: "1990-03-02",
		startDay: "2020-06-02",
		street: "15 Broke street",
		city: "South Park",
		state: "Colorado",
		zipcode: 38500,
		department: "Sales",
	},
	{
		firstName: "Michel",
		lastName: "Delgado",
		birthDate: "2001-11-01",
		startDay: "2020-10-08",
		street: "256 Pirate street",
		city: "Memphis",
		state: "Alabama",
		zipcode: 49900,
		department: "Engineering",
	},
	{
		firstName: "Olivia",
		lastName: "Delorenzo",
		birthDate: "1995-25-04",
		startDay: "2017-05-01",
		street: "3 Anemones street",
		city: "Orlando",
		state: "Florida",
		zipcode: 69600,
		department: "Legal",
	},
	{
		firstName: "Jean-Luc",
		lastName: "Bowie",
		birthDate: "1994-05-24	",
		startDay: "2021-09-30",
		street: "996 Dropped street",
		city: "Boston",
		state: "Massachussets",
		zipcode: 87550,
		department: "Marketing",
	},
	{
		firstName: "Eric",
		lastName: "De la Vega",
		birthDate: "1961-05-03",
		startDay: "2014-08-07",
		street: "56 Napoleon Street",
		city: "Detroit",
		state: "Michigan",
		zipcode: 35610,
		department: "Human Ressources",
	},
	{
		firstName: "Patricia",
		lastName: "Polizzi",
		birthDate: "1965-07-05",
		startDay: "2015-08-08",
		street: "123 Patrick Swaize street",
		city: "Dallas",
		state: "Nevada",
		zipcode: 15300,
		department: "Human Ressources",
	},
	{
		firstName: "Chrystel",
		lastName: "Hanks",
		birthDate: "1984-08-04",
		startDay: "2011-12-01",
		street: "330 Bird street",
		city: "Houston",
		state: "Texas",
		zipcode: 48900,
		department: "Legal",
	},
	{
		firstName: "Thomas",
		lastName: "Rotschild",
		birthDate: "1987-11-01",
		startDay: "2012-02-11",
		street: "87 Space street",
		city: "Point Place",
		state: "Wisconsin",
		zipcode: 19870,
		department: "Engineering",
	},
];
