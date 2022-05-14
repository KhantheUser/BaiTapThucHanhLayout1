import React, { Component } from 'react';
import './Banner.css';
class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <h1 className="banner_heading">
                A warm welcome!
                </h1>
                <p className="banner_title">
                Bootstrap utility classes are used to create this jumbotron since the old component has been <br></br> removed from the framework. Why create custom CSS when you can use utilities?
                </p>
                <button className="btn btn-primary banner_button">Call to action</button>
            </div>
        );
    }
}

export default Banner;