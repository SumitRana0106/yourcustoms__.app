import React from 'react';
import SiteHeader from '../SiteHeader/siteheader';

// class About extends React.Component{

//     render(){
//         return (
//             <div>About Page</div>
//         );  
//     }
// }

function About(){
    return (
        
        <div>
            <SiteHeader />
            <div>
                The purpose of the app is to create the complete web app environment in as low cost as possible . Web App environment includes React Frontend app deployment,
                Backend server deployment , database deployment and app caching (through cdn). 
                <p><strong>As of now the cost of running the app : <span> Rs. 0</span></strong></p>
            </div>
        </div>
    );
}

export default About;