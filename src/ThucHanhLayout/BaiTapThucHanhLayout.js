import React, { Component } from 'react';
import Body from './Body';
import Footer from './Footer';
import Header from './header';

class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                
           
            <Header/>
            <Body/>
            <Footer/>
            </div>
            
        );
    }
}

export default BaiTapThucHanhLayout;