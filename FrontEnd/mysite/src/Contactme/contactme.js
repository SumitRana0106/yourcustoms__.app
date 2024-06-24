import React from "react";
import SiteHeader from "../SiteHeader/siteheader";
import SiteFooter from "../SiteFooter/sitefooter";

class Contactme extends React.Component {

    render(){
        return (
            <div className="wrapper">
                <SiteHeader />
                <br />
                <strong>Drop me a mail at</strong>: rana.sumit93@gmail.com
                <br></br>
                <br></br>
                <br></br>
                <strong>Linkedin</strong> : https://linkedin.com/SumitRana

                <br />
                <SiteFooter />
            </div>
        );
    }
}

export default Contactme;