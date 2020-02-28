import React from "react";
import Widget from "./Widget";

type Props = {
}

type State = {
    time: Date
}

export default class ClockWidget extends Widget<Props, State, {}> {

    constructor(props: Props) {
        const initialState = {
            time: new Date()
        }

        super("clock:v0.1", props, initialState, {});
    }

    async componentDidMount() {
        super.componentDidMount();
        setInterval(() => this.setState({
            widgetState: {
                time: new Date()
            }
        }), 980);
    }

    render() {
        return (<div style={{ textAlign: 'center' }}>
            <span
                style={{
                    fontSize: 7 + 'rem',
                    textAlign: 'left'
                }}
                id='clock'
            >{this.time()}</span>
        </div>
        );
    }

    time() {
        const time = this.state.widgetState.time;

        const numbers = [
            time.getHours(),
            time.getMinutes(),
            time.getSeconds()
        ]

        return numbers
            .map(ClockWidget.toDoubleDigits)
            .join(":");
    }

    static toDoubleDigits(n: number) {
        return n < 10 ? `0${n}` : n.toString();
    }
}
