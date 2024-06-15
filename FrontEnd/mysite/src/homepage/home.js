import React from 'react';
import './group.css';

import {Link} from 'react-router-dom';
import SiteFooter from '../SiteFooter/sitefooter';
import SiteHeader from '../SiteHeader/siteheader';
import PageThumbnail from '../BaseTemplates/pagethumbnail';

// importing thumnails
import Thumbnail1 from '../images/1_thumbnail.png';


class Home extends React.Component{

    render(){
        return (
            <div className='home'> 

                {/* Page Header */}
                <SiteHeader />

                {/* Routing Code */}
                {/* <div style={{height: '2000px'}}>
                    <Link to="/">Home</Link>
                    <br></br>
                    <Link to="/about">About</Link>
                    <br></br>
                    <Link to="/itenary/1/">Places to visit in Andaman</Link>
                    
                </div> */}

                {/* Content Index  */}
                <div id="bufferblock" >
                    <br />
                    <br />
                    <h1>I don't know what i'm doing here</h1>
                    <br />
                </div>

                <div className='grid'>
                    <div className='row'>
                        <PageThumbnail emptyBlock={true} block_height={70}/>
                        <PageThumbnail thumbnail_image={Thumbnail1} block_height={390} title="Places to visit in Andaman and Nicobar islands .." page_path="/page/1/"/>
                        <PageThumbnail thumbnail_image={Thumbnail1} block_height={310} title="blog about tech"/>
                        <PageThumbnail thumbnail_image={Thumbnail1} block_height={310} title="blog about tech"/>
                        
                    </div>

                    <div className='row'>
                        <PageThumbnail emptyBlock={true} block_height={5}/>
                        <PageThumbnail thumbnail_image={Thumbnail1} block_height={340} title="some thing else"/>
                        <PageThumbnail thumbnail_image={Thumbnail1} block_height={450} title="my thoughts about some thing crazy"/>
                        <PageThumbnail thumbnail_image={Thumbnail1} block_height={280} title="some other thoughts on my top"/>
                        <PageThumbnail thumbnail_image={Thumbnail1} block_height={310} title="blog about tech"/>
                        
                    </div>

                    <div className='row'>
                        <PageThumbnail emptyBlock={true} block_height={150}/> 
                        <PageThumbnail thumbnail_image={Thumbnail1} block_height={310} title="blog about tech"/>
                    </div>

                    <div className='row'>
                        <PageThumbnail emptyBlock={true} block_height={50}/>
                        <PageThumbnail thumbnail_image={Thumbnail1} block_height={450} title="my thoughts about some thing crazy"/>
                        <PageThumbnail thumbnail_image={Thumbnail1} block_height={280} title="some other thoughts on my top"/>

                    </div>

                    <div className='row'>
                        <PageThumbnail emptyBlock={true} block_height={100}/>
                        <PageThumbnail thumbnail_image={Thumbnail1} block_height={450} title="my thoughts about some thing crazy"/>
                        <PageThumbnail thumbnail_image={Thumbnail1} block_height={280} title="some other thoughts on my top"/>
                        <PageThumbnail thumbnail_image={Thumbnail1} block_height={310} title="blog about tech"/>
                    </div>
                </div>

                {/* Page Footer */}
                <SiteFooter />
                
                
                
            </div>
            );
        }
}

export default Home;