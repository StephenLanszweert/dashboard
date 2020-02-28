import React from "react";
import db, { WidgetDb } from "../db/db";

type State<T, Db> = {
	widgetState: T,
	data?: Db
}

export default class Widget<Props, S, Db> extends React.Component<Props, State<S, Db>> {

	widgetDb: Promise<WidgetDb<Db>>;

	constructor(
		public id: string,
		props: Props,
		initialState: S,
		private def: Db
	) {
		super(props);

		this.widgetDb = db.getWidgetDb(this.id, this.def);

		this.state = {
			widgetState: initialState
		};
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
