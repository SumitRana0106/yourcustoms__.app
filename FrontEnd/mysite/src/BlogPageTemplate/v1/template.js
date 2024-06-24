import React from 'react';
import SiteFooter from '../../SiteFooter/sitefooter';
import SiteHeader from '../../SiteHeader/siteheader';
import { useParams} from 'react-router-dom';
import parse from 'html-react-parser'
import './group.css';



class PageTemplate extends React.Component{

    constructor(props) 
    { 
        // Calling the constructor of 
        // Parent Class React.Component 
        super(props); 
        
        // Setting the initial state 
        this.state = {
                 "date" : (new Date()).toString(),
                 "id": this.props.id,
                 "content": "",
                 "title": "Page Title"
                 }; 
                
    } 

    componentDidMount(){
        console.log(">>> In component did mount");
        console.log(">> ", this.props.id)

        // fetching page details
        fetch('http://localhost:8002/content/v1/?id='+this.props.id)
        .then(response=>response.json()).then(data=>{
            console.log("in success response");
            console.log(data);
            
            this.setState({
                "content": data.data.html_content,
                "title": data.data.page_title
            });
        })
        .catch((err)=>{
            console.log("Error in fetch api");
            console.log(err);
        })
    }

    render(){
        
        return (
            <div>
                <SiteHeader />
                <span>ID in main component : {this.props.id} </span>
                <div className='template-content-wrapper'>
                    <div className='content-header'>{this.state.title}</div>
                    <div className='page-content'>{parse(this.state.content)}</div>
                </div>
                <SiteFooter />
            </div>
        );
    }
}


function PageTemplateWrapper(){
    var {id} = useParams();
    return (
        <PageTemplate id={id} />
    );
}


export default PageTemplateWrapper;