'use strict';
import React from 'react';
import ReactDOM from 'react-dom';


let selector = pawtucketUIApps.navscroll.selector;
let sectionSelector = pawtucketUIApps.navscroll.data.sectionSelector;

class Navscroll extends React.Component {
    constructor(props) {
        super(props);
        this.navbar = React.createRef();
        
        this.handleScroll = this.handleScroll.bind(this);
    }  
    
    getOffset(element){
      var bounding = element.getBoundingClientRect();
      return {
          top: bounding.top + document.body.scrollTop,
          left: bounding.left + document.body.scrollLeft
        };
    }

    handleScroll(){
       let navbar = this.navbar.current; //React.findDOMNode(this.refs.navbar);
       let startElement = document.querySelector(sectionSelector); //React.findDOMNode(this.refs.sec2);
       let offset = this.getOffset(startElement)    
       let windowsScrollTop  = window.pageYOffset;
       if(windowsScrollTop >= offset.top){     
         navbar.classList.add("navbar-fixed-top");           
       }else{
         navbar.classList.remove("navbar-fixed-top");   
       }
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);        
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
 
   render() {
    return (<nav className="navbar navbar-expand-md navbar-light bg-light fixed-top" role="navigation" ref={this.navbar}>
		<a href="#">School of Visual Arts Archives</a>
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainnavbar" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse" id="mainnavbar">
        	<ul className="navbar-nav ml-auto">
         		<li><a id="search-button" href="#">Search</a></li>
				<li><a href="/glaser-archives?autoscroll=0">Glaser Archives</a></li>
                <li><a href="/sva-archives">Collections</a></li>
                <li><a href="/page/about?autoscroll=0">About</a></li>
                <li><a href="/visit-us">Visit</a></li>
                <li><a href="/blog/?autoscroll=0">Blog</a></li>
       		</ul>
      	</div>
	</nav>);
   }
}

ReactDOM.render(<Navscroll/>, document.querySelector(selector));