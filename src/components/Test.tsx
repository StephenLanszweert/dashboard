import React from "react";

type Props = {
	text: string
}

type State = {
}

export default class Test extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {}
	}

	render() {
		return (
			<div>
				{this.props.text}
			</div>
		);
	}
}
