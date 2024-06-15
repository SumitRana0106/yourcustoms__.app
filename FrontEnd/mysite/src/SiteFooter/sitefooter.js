import React from 'react';
import './group.css';
import copyright from '../images/copyright-symbol.png';

class SiteFooter extends React.Component{

    render(){
        return (
            <div className='siteFooter'>
                <div></div>
                <div>
                    <span>Made unconsistently with Love by Sumit Rana</span>
                    <br /><br/><br/><br/>
                    <span><img className='logo-sm' src={copyright} /></span>
                    <span>Copyright. All rights reserved.</span>
                </div>
                <div></div>
            </div>
        );
    }
}

export default SiteFooter;