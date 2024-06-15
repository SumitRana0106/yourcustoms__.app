import React from "react";
import SiteHeader from "../SiteHeader/siteheader";
import SiteFooter from "../SiteFooter/sitefooter";

class Contactme extends React.Component {

    render(){
        return (
            <div className="wrapper">
                <SiteHeader />
                <br />
                Contact me at : rana.sumit93@gmail.com

                <br />
                <SiteFooter />
            </div>
        );
    }
}

export default Contactme;