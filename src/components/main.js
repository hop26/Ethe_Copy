import React from 'react';
import Header from '../components/header';
import '../styles/main.css';
// import '../styles/header_test.css';
// import '../styles/ourWork.css';
import '../styles/contact.css';
import '../styles/images/e2.png';
import PageTitle from '../flex_Components/page-title'
import '../styles/images/old_ethe.png';
import { HashRouter, Switch, Link, Route, Redirect } from "react-router-dom";


export class AboveFold extends React.Component{

  render(){
    console.log(this.props);
  return(
    <div id='above-fold' onClick={()=>{this.props.props.overlay(); console.log(this.props)}} style={{display: this.props.appState.view.aboveFold}}>
      <h1 id='above-title'>Digital products that help you reach farther.</h1>

    </div>
  )
}
componentDidMount(){
  this.props.appState.defaultHeader();
  document.getElementById('above-fold').addEventListener('wheel', ()=>{
    if (window.pageYOffset < 50){
      window.scrollTo({top: window.innerHeight, left:0, behavior: 'smooth'}); console.log('scroll')
    }})

    document.getElementById('above-fold').addEventListener('keydown', (event)=>{
      if (window.pageYOffset < 50 && event.keyCode == '40'){
        window.scrollTo({top: window.innerHeight, left:0, behavior: 'smooth'}); console.log('scroll')
      }})

  window.addEventListener('scroll', (event)=>{
    ((window.pageYOffset > window.innerHeight && document.getElementById('over-lay').style.display === 'none') || document.getElementById('matters-view')) ? this.props.appState.scrollHeader(): this.props.appState.defaultHeader();
  })
}
}

export class OurWork extends React.Component{
  render(){
  return(
    <div className='view' id='ourWork-view'>

      <p className='ourWork-statement'>We make great digital stuff.</p>
        <div id='ourWork-content'>
          <WhatWeDo title={'Digital Strategy'} description={'We learn how your customers interact with your brand and build strategies that maximize your customer reach and engagement.'} icon={'./src/styles/icons/svg/023-research.svg'}/>
          <WhatWeDo title={`Design x Development`} description={'We design applications, social media experiences, and marketing campaigns that extend your business vision, culture and spirit, and make great user experience a part of your brand.'} icon={'./src/styles/icons/svg/027-social-media.svg'}/>
          <WhatWeDo title={'Data Integration'} description={'We prioritize collection of useful data in designing compelling customer experiences. Adding science to the art allows you to move from guesswork to inspired predictions, using metrics and analytics to inform changes to your business.'} icon={'./src/styles/icons/svg/001-statistics.svg'} noBorder={0}/>
        </div>
      <Link to='/digital_matters' onClick={()=>{this.props.appState.scrollHeader(); console.log(this.props)}}><div id='learn-div'>
        <h2 id='learn-text'>Why you need a great digital footprint</h2><ion-icon id='learn-arrow' name="arrow-dropright"></ion-icon>
      </div></Link>
    </div>
  )
}

componentDidMount(){
  window.addEventListener('scroll', (event)=>{
    if(window.pageYOffset >= 367){
        return document.getElementById('ourWork-view').style.opacity=1}
    })
}
}

export class DigitalMatters extends React.Component{
  render(){
    return(
      <div className='view' id='matters-view' style={{opacity:1, transition:'opacity 1s'}}>
        <PageTitle message={'Why Digital Matters'}/>
        <Header />
        <div id='matters-nav'><img src='src/styles/images/arrow.png' className='matters-nav-arrow' style={{transform:'rotate(-90deg)'}}/><p>Engage</p><hr className='matters-nav-line'/ ><p>Identity</p><hr className='matters-nav-line'/ ><p>Expectation</p><hr className='matters-nav-line'/ ><p>Info</p><img src='src/styles/images/arrow.png' className='matters-nav-arrow' style={{transform:'rotate(90deg)'}}/></div>
        <div id='matters-content'>
          <h1 id='matters-content-title'>Step Up Your Engagement</h1>
          <p id='matters-content-text'>Digital strategies and technologies allow you to reach ALL of your potential customers, even those you didn't know about. In addition, they'll help you engage with current customers in innovative and exciting ways.</p>
        </div>
      </div>
    )
  }
  componentDidMount(){
    window.addEventListener('scroll', (event)=>{
      if(window.pageYOffset >= 991){
          return document.getElementById('matters-view').style.opacity=1}
      }
    )
  }
}


export class RecentProjects extends React.Component {
  render(){
  return(
    <div className='view' id='projects-view'>
      <p className='ourWork-statement'>Recent Projects</p>
      <div id='projects-div'>
        <img className='project-image' src='./src/styles/images/old_ethe.png'/>
        <img className='project-image' src='./src/styles/images/creator.png'/>
        <img className='project-image' src='./src/styles/images/bill.png'/>
      </div>
    </div>
  )
}

componentDidMount(){
  window.addEventListener('scroll', (event)=>{
    if(window.pageYOffset >= 991){
        return document.getElementById('projects-view').style.opacity=1}
    }
  )
}

}

export const ContactUs = ()=>{
  return(
    <div className='view' id='contact-view' style={{backgroundColor:'#333333'}}>
      <PageTitle message={'Contact Us'}/>
        <form id='contact-form'>
          <input type='text' placeholder='Name' className='contact-input' />
          <input type='email' placeholder='Email' className='contact-input' />
          <input type='text' placeholder='Company (optional)' className='contact-input' />
          <input type='tel' name='phone' placeholder='Phone (optional)' className='contact-input' />
          <textarea type='text' placeholder='Message' className='contact-input' id='contact-message'></textarea>
          <div id='submit-button-div'><button type='submit' value='submit' id='submit-button'>Submit</button> </div>
        </form>
    </div>
  )
}

// <img src='src/styles/images/arrow.png' id='submit-arrow' />

const WhatWeDo = (props)=>{
  return(
    <div className='ourWork-div' id='ourWork-strategy-div' style={{border: props.noBorder}}>
      <div className='ourWork-service-div'><h1 className='ourWork-service'>{props.title}</h1></div>
      <img src={props.icon} className='ourWork-icon'/>
      <div className='ourWork-description-div' id='ourWork-strategy-text'><p className='ourWork-description-text'>{props.description}</p></div>
    </div>
  )
}

export class MenuButton extends React.Component {
  render(){
    console.log(this.props);
      return(
      <div id='menu-icon-circle'>
        <ion-icon name={this.props.appState.view.menu} id='menu-icon'></ion-icon>
      </div>

      )
    }

    componentDidMount(){
      document.getElementById('menu-icon-circle').addEventListener('click', (event)=>{this.props.appState.view.overlay === 'none' ? this.props.appState.overlay():this.props.appState.front(); event.stopPropagation()})
      // document.getElementById('e').addEventListener('click', (event)=>{this.props.appState.front(); event.stopPropagation()})
    }
}
