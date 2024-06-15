import React from "react";
import PageTemplate from "../BlogPageTemplate/v1/template";
import Wife from '../images/wife.jpeg';


class AboutWife extends React.Component{

    render(){

        var page_content_jsx = (
            <div>
                <div className="profile-image"><img src={Wife} alt="wifey"></img></div>
                <br />
                <br />
                <div className="content">
                    In your eyes, a love divine,
                    Guiding me through life's design.
                    You're the melody in my song,
                    In your arms, where I belong.

                    With every breath, your love I feel,
                    Like a gentle breeze, so real.
                    You're my sanctuary, my serene,
                    In your embrace, all troubles glean.

                    Through life's journey, hand in hand,
                    Together, we'll forever stand.
                    You're my partner, my guiding light,
                    In your love, everything's just right.

                    Your laughter echoes, pure and clear,
                    Filling my days with joy sincere.
                    In your love, I find my peace,
                    In your love, all worries cease.

                    So here's to us, forever true,
                    In the love we share, old and new.
                    For you're my everything, my dear wife,
                    In your love, I've found my life.
                    <br /><br />
                    -- Ghonchu Aadmi
                </div>
            </div>
        );

        return (
            
            <PageTemplate title="Something for my lovely wife ( Pakoda aadmi )" content={page_content_jsx} />
            
        );
    }
}


export default AboutWife;