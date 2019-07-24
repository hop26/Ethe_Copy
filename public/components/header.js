import React from 'react';
import '../styles/main.css';
import '../styles/header.css';
import { HashRouter, Switch, Link, Route, Redirect } from "react-router-dom";

export default class Header extends React.Component {
  render(){
    console.log(this.props);
      return(
        <div id='header' style={(document.documentElement.clientWidth < 376 && document.getElementById('above-fold'))?{backgroundColor:this.props.appState.header.backgroundColor, position:'relative' }:{backgroundColor:this.props.appState.header.backgroundColor}}>
          <Link to='/'><img src='./src/styles/images/e2.png' id='e' onClick={()=>{this.props.appState.defaultView()}} style={{filter:this.props.appState.header.headerInvert}}/></Link>
          {this.props.children}
          <div id='menu-icon-circle'>
            <ion-icon name={this.props.appState.view.menu} id='menu-icon' onClick={(event)=>{
              if (this.props.appState.view.overlay === 'none'){
                this.props.appState.overlay();
                this.props.appState.menuHeader();
              } else{
                this.props.appState.defaultView();
                this.props.appState.defaultHeader();
                event.stopPropagation()
              }
            }}
            style={(document.documentElement.clientWidth > 375)?{filter:this.props.appState.header.headerInvert}:{filter:'invert(0)'}}></ion-icon>
          </div>
        </div>

      )
    }

    componentDidMount(){

      // document.getElementById('menu-icon-circle').addEventListener('click', (event)=>{this.props.appState.view.overlay === 'none' ? this.props.appState.overlay():this.props.appState.defaultView(); event.stopPropagation()})

      // window.addEventListener('scroll', (event)=>{
      //   (window.pageYOffset > window.innerHeight -100) ? this.props.appState.scrollHeader(): this.props.appState.defaultHeader();
      // })
// backgroundColor:(window.pageYOffset > window.innerHeight)?'white':'rgba(0,0,0,0)'

      // document.getElementById('e').addEventListener('click', (event)=>{this.props.appState.front(); event.stopPropagation()})
    }
}

// onClick={()=>{this.props.appState.view.overlay === 'none' ? this.props.appState.overlay():this.props.appState.front()}}

// <a href='#'><img src='./src/styles/images/e2.png' id='e' style={{filter:this.props.appState.view.header}}/></a>
