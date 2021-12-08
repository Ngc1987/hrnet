import React from 'react';

const Form = () => {

	const today = new Date().toISOString().split('T')[0];
	let minDate;
	const minDateForWork = () =>  {
		let year = (parseInt(today.split("-")[0]) - 18);
		let month = (today.split("-")[1]);
		let day = (today.split("-")[2]);
		console.log(`${year}-${month}-${day}`)
		console.log(today, year, month, day)
		minDate =`${year.toString()}-${month}-${day}`
	}
	minDateForWork()
	console.log(minDate)
	return (
		<div className="flex flex-col items-start w-96 mx-3 mb-20 h-auto mt-16 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-5 bg-black p-6 z-10" >

			<h2 className="mb-4 text-xl self-center" >Creat employee</h2>

			<label htmlFor="firstName" >First Name</label>
			<input className="mt-1 p-1 w-full rounded-lg focus:shadow outline-none transition" type="text" id="firstName" />
			
			<label className="mt-2" htmlFor="lastName" >Last Name</label>
			<input className="mt-1 p-1 w-full rounded-lg focus:shadow outline-none transition" type="text" id="lastName" />
			
			<label className="mt-2" htmlFor="birthDate" >Date of birth</label>
			<input className="mt-1 p-1 w-full rounded-lg focus:shadow outline-none transition" type="date" min="1900-01-01" max={minDate} id="birthDate" />
			
			<label className="mt-2" htmlFor="startDay" >Start day</label>
			<input className="mt-1 p-1 w-full rounded-lg focus:shadow outline-none transition" type="date" min="1990-01-01" max={today} id="startDay" />

			<h3>Adress</h3>

			<label className="mt-2" htmlFor="street" >Street</label>
			<input className="mt-1 p-1 w-full rounded-lg focus:shadow outline-none transition" type="text" id="street" />

			<label className="mt-2" htmlFor="city" >City</label>
			<input className="mt-1 p-1 w-full rounded-lg focus:shadow outline-none transition" type="text" id="city" />

			<label className="mt-2" htmlFor="state" >State</label>
			<input className="mt-1 p-1 w-full rounded-lg focus:shadow outline-none transition" type="select" id="state" />

			<label className="mt-2" htmlFor="zipcode" >Zip Code</label>
			<input className="mt-1 p-1 w-full rounded-lg focus:shadow outline-none transition" type="text" id="zipcode" />

			<label className="mt-2" htmlFor="zipcode" >Department</label>
			<input className="mt-1 p-1 w-full rounded-lg focus:shadow outline-none transition" type="select" id="zipcode" />

			<button type="submit" className="self-center mt-4 py-1 px-3 rounded-lg border" >Save</button>
			
		</div>
	)
}

export default Form
