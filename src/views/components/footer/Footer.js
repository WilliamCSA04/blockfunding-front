import React, { Component } from 'react';
import './footer.sass'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: (new Date()).getFullYear()
        }
    }
    render() {
        return (
            <div className="footer-area text-center bg-white">
                <span> {this.state.date} Blockfunding </span>
            </div>
        );
    }
}

export default Footer;