import React from "react";
import Widget from "./Widget";

type Props = {
}

type State = {
    time: Date
}

export default class ClockWidget extends Widget<Props, State, {}> {

    constructor(props: Props) {
        super({
            widgetProps: props,
            id: "clock:v0.1"
        }, {
            time: new Date()
        }, {});
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
        return (
            <div style={{ textAlign: 'center' }}>
                <span
                    style={{
                        fontSize: 7 + 'rem',
                        textAlign: 'left'
                    }}
                    id='clock'
                ></span>
            </div>
        );
    }

    time() {
        const d = this.state.widgetState.time;

        const numbers = [
            d.getHours(),
            d.getMinutes(),
            d.getSeconds()
        ]

        return numbers
            .map(ClockWidget.toDoubleDigits)
            .join(":");
    }

    static toDoubleDigits(n: number) {
        return n < 10 ? `0${n}` : n.toString();
    }
}
