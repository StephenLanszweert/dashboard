import React, { Component } from 'react';

export default class Clock extends Component {
    span = document.getElementById('span');
    // constructor() {
    //     setInterval(this.time, 1000);
    // }
    render() {
        return (
            <div>
                <span id='span'></span>
            </div>
        );
    }

    // time() {
    //     var d = new Date();
    //     var s = d.getSeconds();
    //     var m = d.getMinutes();
    //     var h = d.getHours();
    //     span.textContent = h + ':' + m + ':' + s;
    // }
}
