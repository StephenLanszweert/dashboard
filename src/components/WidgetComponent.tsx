import React from "react";

export type WidgetSettingsProps<WidgetSettings> = {
	widgetSettings: WidgetSettings,
	updateSettings: (newSettings: WidgetSettings) => void;
}

export type Props<WidgetSettings> = {
	widgetSettings: WidgetSettings,
	widgetComonent: (settings: WidgetSettings) => JSX.Element,
	settingsComonent: (props: WidgetSettingsProps<WidgetSettings>) => JSX.Element
}

export type State<WidgetSettings> = {
	settings: boolean,
	widgetSettings: WidgetSettings,
}

export default class WidgetComponent<WidgetSettings>
	extends React.Component<Props<WidgetSettings>, State<WidgetSettings>, WidgetSettings> {

	constructor(props: Props<WidgetSettings>) {
		super(props);

		this.state = {
			settings: false,
			widgetSettings: this.props.widgetSettings
		}
	}

	toggleState() {
		this.setState({
			settings: !this.state.settings
		});
	}

	updateSettings(newSettings: WidgetSettings) {
		this.setState({
			widgetSettings: newSettings
		});
	}

	renderContent() {
		const settings = this.state.widgetSettings;

		if (this.state.settings)
			return this.props.settingsComonent({
				widgetSettings: settings,
				updateSettings: newSettings => this.updateSettings(newSettings)
			});
		else
			return this.props.widgetComonent(settings);
	}

	render() {
		return (
			<div className="widget">
				<div className="widget-header">
					<button onClick={() => this.toggleState()}>Settings</button>
				</div>
				{this.renderContent()}
			</div>
		);
	}
}
