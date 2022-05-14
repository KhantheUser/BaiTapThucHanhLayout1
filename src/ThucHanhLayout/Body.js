import React, { Component } from 'react';
import Banner from './Banner';
import Item from './Item';
import './Body.css'

class Body extends Component {
    render() {
        return (
            <div className="body container">
                <Banner/>
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-3">
                    <Item image="./img/images.png"/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                    <Item image="./img/30-Lý-do-học-python.jpeg"/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                    <Item image="./img/cafedev_javascript.png"/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                    <Item image="./img/cafedev-Top-Uses-Of-Ruby.jpg"/>
                    </div>

                </div>
              
            </div>
        );
    }
}

export default Body;
