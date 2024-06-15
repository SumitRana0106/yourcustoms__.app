import React from "react";
import './group.css';

import {useNavigate, Link} from 'react-router-dom';

class PageThumbnail extends React.Component {

    ClickHandlerForComponent(){
        console.log("in thumbnail component click handler ...");
    }

    render(){

        var img_style = {
            'height': (0.8*this.props.block_height)+'px'
        }

        if(this.props.emptyBlock == true){
            return (
                <div style={{'height': this.props.block_height}}></div>
            );
        }
        else {
            return (
                <Link to={this.props.page_path} style={{'text-decoration': 'none'}}>
                    <div className="component" style={{'height': this.props.block_height+'px'}} onClick={this.ClickHandlerForComponent}>
                        <div className="thumbnail-image"><img src={this.props.thumbnail_image} alt="thumbnail" style={img_style}/></div>
                        <div className="thumbnail-title">{this.props.title}</div>
                    </div>
                </Link>
            );
        }
        
    }
}

export default PageThumbnail;