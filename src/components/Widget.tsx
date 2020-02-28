import React from "react";
import db, { WidgetDb } from "../db/db";

type Props<T> = {
	widgetProps: T,
	id: string
}

type State<T, Db> = {
	widgetState: T,
	data?: Db
}

export default class Widget<P, S, Db> extends React.Component<Props<P>, State<S, Db>> {

	widgetDb: Promise<WidgetDb<Db>>;

	constructor(
		props: Props<P>,
		initialState: S,
		private def: Db
	) {
		super(props);

		this.widgetDb = db.getWidgetDb(this.props.id, this.def);

		this.state = {
			widgetState: initialState
		};
	}

	public get id() {
		return this.props.id
	}

	async componentDidMount() {
		this.reloadData();
	}

	async reloadData() {
		const widgetDb = await this.widgetDb;
		const data = await widgetDb.get();

		this.setState({ data });
	}
}
