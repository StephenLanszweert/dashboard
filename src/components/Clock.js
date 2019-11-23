import React, { Component } from 'react';

export default class Clock extends Component {
    clock = document.getElementById('clock');
    constructor() {
        super();
        setInterval(this.time, 1000);
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
        var d = new Date();
        var s = d.getSeconds() >= 10 ? d.getSeconds() : `0${d.getSeconds()}`;
        var m = d.getMinutes() >= 10 ? d.getMinutes() : `0${d.getMinutes()}`;
        var h = d.getHours() >= 10 ? d.getHours() : `0${d.getHours()}`;
        this.clock.textContent = h + ':' + m + ':' + s;
    }
}
