import React from 'react';
import '../styles/overlay.css';
import Header from './header';
import { HashRouter, Switch, Link, Route, Redirect } from "react-router-dom";

class Overlay extends React.Component{

  render(){
    console.log(this.props)
    return(
      <div id='over-lay' style={{display:this.props.appState.view.overlay, opacity:this.props.appState.view.opacity, transition: 'opacity 1s'}} >

        <div id='over-lay-options'>
          <Link to='/' className='over-lay-link' onClick={()=>{this.props.appState.front()}}>Home</Link>
          <hr className='over-lay-line' />
          <Link to='/values' className='over-lay-link' onClick={()=>{this.props.appState.values()}}>Our Values</Link>
          <hr className='over-lay-line' />
          <Link to='/digital_matters' className='over-lay-link'>Why Digital Matters</Link>
          <hr className='over-lay-line' />
          <a href='#' className='over-lay-link'>Contact Us</a>
        </div>
      </div>
    )
  }

  componentDidMount(){

    document.getElementById('over-lay').addEventListener('wheel', (event)=>{event.preventDefault()});
    const menu = () => {(document.getElementById('over-lay').style.display ==='flex') ? this.props.appState.menuHeader() : console.log('whatevs')}
    menu();


  }
}

export default Overlay;
