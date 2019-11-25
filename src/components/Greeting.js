import React from 'react';

export default function Greeting(props) {

	const partOfDay = "evening";

	if (props.personal && props.personal.name)
		return (
			<h1>Good {partOfDay} {props.personal.name}</h1>
		)
	return (
		<h1>Good {partOfDay}</h1>
	)
}