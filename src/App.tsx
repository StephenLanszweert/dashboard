import React from 'react';
import TextWidget from './components/TextWidget';

type Props = any;

type State = any;

export default class App extends React.Component<Props, State> {
	render() {
		return (
			<div>
				<TextWidget text="Some text" />
			</div>
		);
	}
}
