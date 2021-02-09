import React from "react";
import WidgetComponent, { WidgetSettingsProps } from "./WidgetComponent";

type Settings = {
	text: string
}

type State = {
	text: string
}

export class TextWidgetSettings extends React.Component<WidgetSettingsProps<Settings>, State> {
	constructor(props: WidgetSettingsProps<Settings>) {
		super(props);

		this.state = {
			text: this.props.widgetSettings.text
		}
	}

	render() {
		return <form onSubmit={e => {
			e.preventDefault();
			this.props.updateSettings({
				text: this.state.text
			});
		}} >
			<input
				type="text"
				value={this.state.text}
				onChange={e => this.setState({ text: e.target.value })} />
			<button>Sumbmit</button>
		</form>
	}
}

function TextWidgetContent(props: Settings) {
	return <div>{props.text}</div>;
}

export default function TextWidget(props: Settings) {
	return <WidgetComponent<Settings>
		widgetSettings={props}
		widgetComonent={TextWidgetContent}
		settingsComonent={props => <TextWidgetSettings {...props} />}
	/>
}