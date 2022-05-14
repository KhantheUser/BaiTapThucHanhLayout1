import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className="footer text-white">
                Copyright 
                <i class="fa-solid fa-copyright mx-2 "></i>
                Your Website 2019
            </div>
        );
    }
}

export default Footer;
