import React from 'react';
import './group.css';

import {Link} from 'react-router-dom';
import SiteFooter from '../SiteFooter/sitefooter';
import SiteHeader from '../SiteHeader/siteheader';
import PageThumbnail from '../BaseTemplates/pagethumbnail';

// importing thumnails
import Thumbnail1 from '../images/1_thumbnail.png';


class Home extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            "content_list": [],
            "column_data": [[],[],[],[],[]],
            "tags":[]
        };
    }

    componentDidMount(){
        // Fetching posts
        fetch("http://localhost:8002/content/v1/all/")
        .then(response=>response.json())
        .then(data=>{
            console.log("in sucess response");
            console.log(data);
            // this.setState({
            //     "content_list": data.data
            // });
            
            var column_data = [[],[],[],[],[]];
            for(var i in data.data){
                var col = data.data[i].homepage_grid_column;
                console.log("in for loop:",i, col, column_data);
                column_data[col-1].push(data.data[i]);
            };

            this.setState({
                "column_data": column_data
            });

            console.log("State after updating from the API");
            console.log(this.state);
        
        })
        .catch(err=>{
            console.log("Error in API fetch");
            console.log(err);
        });

        // Fetching tags
        fetch("http://localhost:8002/content/v1/tags/")
        .then(res=>res.json())
        .then(res=>{
            console.log("Tag fetch success >>>");
            console.log(res);

            this.setState({
                "tags": res.data
            });
        });

        
    }

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
                    <div>{this.state.tags.map(tag=>(<span className='tag'>{tag}</span>))}</div>
                </div>

                <div className='grid'>
                    <div className='row'>
                        <PageThumbnail emptyBlock={true} block_height={70}/>
                        {this.state.column_data[0].map(data=>(<PageThumbnail page_path={'/page/'+data.id} thumbnail_image={data.thumbnail_image_url} block_height={data.thumbnail_block_height} title={data.thumbnail_title} />))}
                        {/* <PageThumbnail thumbnail_image={Thumbnail1} block_height={390} title="Places to visit in Andaman and Nicobar islands .." page_path="/page/1/"/>
                        <PageThumbnail thumbnail_image={Thumbnail1} block_height={310} title="blog about tech"/>
                        <PageThumbnail thumbnail_image={Thumbnail1} block_height={310} title="blog about tech"/> */}
                        
                    </div>

                    <div className='row'>
                        <PageThumbnail emptyBlock={true} block_height={5}/>
                        {this.state.column_data[1].map(data=>(<PageThumbnail page_path={'/page/'+data.id} thumbnail_image={data.thumbnail_image_url} block_height={data.thumbnail_block_height} title={data.thumbnail_title} />))}
                        {/*<PageThumbnail thumbnail_image={Thumbnail1} block_height={340} title="some thing else"/>
                        <PageThumbnail thumbnail_image={Thumbnail1} block_height={450} title="my thoughts about some thing crazy"/>
                        <PageThumbnail thumbnail_image={Thumbnail1} block_height={280} title="some other thoughts on my top"/>
                        <PageThumbnail thumbnail_image={Thumbnail1} block_height={310} title="blog about tech"/>*/}
                        
                    </div>

                    <div className='row'>
                        <PageThumbnail emptyBlock={true} block_height={150}/> 
                        {this.state.column_data[2].map(data=>(<PageThumbnail page_path={'/page/'+data.id} thumbnail_image={data.thumbnail_image_url} block_height={data.thumbnail_block_height} title={data.thumbnail_title} />))}
                        {/* <PageThumbnail thumbnail_image={Thumbnail1} block_height={310} title="blog about tech"/> */}
                    </div>

                    <div className='row'>
                        <PageThumbnail emptyBlock={true} block_height={50}/>
                        {this.state.column_data[3].map(data=>(<PageThumbnail page_path={'/page/'+data.id} thumbnail_image={data.thumbnail_image_url} block_height={data.thumbnail_block_height} title={data.thumbnail_title} />))}
                        {/* <PageThumbnail thumbnail_image={Thumbnail1} block_height={450} title="my thoughts about some thing crazy"/>
                        <PageThumbnail thumbnail_image={Thumbnail1} block_height={280} title="some other thoughts on my top"/> */}

                    </div>

                    <div className='row'>
                        <PageThumbnail emptyBlock={true} block_height={100}/>
                        {this.state.column_data[4].map(data=>(<PageThumbnail page_path={'/page/'+data.id} thumbnail_image={data.thumbnail_image_url} block_height={data.thumbnail_block_height} title={data.thumbnail_title} />))}
                        {/* <PageThumbnail thumbnail_image={Thumbnail1} block_height={450} title="my thoughts about some thing crazy"/>
                        <PageThumbnail thumbnail_image={Thumbnail1} block_height={280} title="some other thoughts on my top"/>
                        <PageThumbnail thumbnail_image={Thumbnail1} block_height={310} title="blog about tech"/> */}
                    </div>
                </div>

                {/* Page Footer */}
                <SiteFooter />
                
                
                
            </div>
            );
        }
}

export default Home;