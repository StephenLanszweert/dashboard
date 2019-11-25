import React from 'react';

export default function Greeting(props) {

	const currentDate = new Date();
	const currentHour = currentDate.getHours();

	let partOfDay = ""

	if (currentHour < 6)
		partOfDay = "night";
	else if (currentHour < 12)
		partOfDay = "morning";
	else if (currentHour < 18)
		partOfDay = "afternoon";
	else if (currentHour < 22)
		partOfDay = "evening";
	else
		partOfDay = "night";

	if (props.personal && props.personal.name)
		return <h1>Good {partOfDay} {props.personal.name}</h1>

	return <h1>Good {partOfDay}</h1>
}