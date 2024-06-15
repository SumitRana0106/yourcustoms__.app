import React from 'react';
import './group.css';
import logo from '../images/yourcustoms-logo.png';
import { Link } from 'react-router-dom';

class SiteHeader extends React.Component{

    CustomLink(args){
        return (
            <Link to={args.path} style={{'text-decoration': 'none'}}><args.Child /></Link>
        );
    }

    render(){
        return (
            <Link to="/" className='CustomLink'>
                <div className="siteHeader">
                    <div className='logo'>
                        <img src={logo} />
                        <span>YourCustoms __  .in</span>
                    </div>
                    
                    <div className='columns center'>
                        <div></div>
                        <div>
                            {/* <Link to="/about" className='CustomLink'><span className='button'>About</span> </Link>  */}
                            <Link to="/contactme/" className='CustomLink'><span className='button'>Connect with me</span> </Link>
                        </div>
                    </div>

                    <div className='columns right'>
                    </div>
                    
                </div>
            </Link>
        );
    }
}

export default SiteHeader;