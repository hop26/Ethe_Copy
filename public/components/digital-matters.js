import React from 'react';
import PageTitle from '../flex_Components/page-title';
import Header from '../components/header';
import Overlay from './overlay'
import { selectBook, overlay, menu, valueNextPage, valuePrevPage, defaultView, defaultHeader, invertHeader, engagementNav, identityNav, expectationNav, informationNav, scrollHeader, menuHeader } from '../actions/index.js'
//imports action creator
import { bindActionCreators } from 'redux'
//imports function needed to use action creator
import { connect } from 'react-redux'
//imports function needed to access redux state object

class DigitalMatters extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      engagement: 1,
      identity: 0,
      expectation: 0,
      information: 0,
    }
  }
  render(){
    return(
      <div className='view' id='matters-view' style={{opacity:1, transition:'opacity 3s'}}>
          <Header appState={this.props}><h1 id='why-digital-matters'>Why Digital Matters</h1></Header>
          <Overlay display={this.props.view.overlay} appState={this.props} />
          <div id='matters-nav-div'>
            <div id='matters-nav'>
              <p id='nav-engagement' style={{fontWeight:this.props.matterNav.engagementWeight, borderBottomColor: 'black', borderBottom: this.props.matterNav.engagementBorder, color: 'rgba(46, 0, 0, 1)'}}>Engage</p>
              <hr className='matters-nav-line'/ >
              <p id='nav-identity' style={{fontWeight:this.props.matterNav.identityWeight, borderBottomColor: 'black', borderBottom: this.props.matterNav.identityBorder, color:'rgba(46, 31, 0, 0.48)'}}>Identity</p>
              <hr className='matters-nav-line'/ >
              <p id='nav-expectation' style={{fontWeight:this.props.matterNav.expectationWeight, borderBottomColor: 'black', borderBottom: this.props.matterNav.expectationBorder, color:'rgba(7, 87, 3, 0.45)'}}>Expectation</p>
              <hr className='matters-nav-line'/ >
              <p id='nav-information' style={{fontWeight:this.props.matterNav.informationWeight, borderBottomColor: 'black', borderBottom: this.props.matterNav.informationBorder, color:'rgba(7, 87, 3, 0.45)'}}>Information</p>
            </div>
          </div>



          <div id='matters-content-engagement' className='matters-content-container'>
            <div className='matters-text-div'>
              <h1 className='matters-content-title matters-content'  id='engagement-title'>Find your customers, and help them find you</h1>
              <p className='matters-content-text matters-content' >Digital strategies and technologies increase the reach between you and your customers.</p>
              <p className='matters-content-text matters-content' >They'll also help you engage current customers in new, innovative and exciting ways. </p>
            </div>
            <div className='engagement-image-div matters-image-div'><img src='src/styles/images/xmen-left.jpg' className='engagement-images'/><img src='src/styles/images/xmen-right.jpg' className='engagement-images'/></div>
          </div>

          <div id='matters-content-identity' className='matters-content-container' style={{opacity:this.state.identity, transition:'opacity 1s'}}>
            <div className='matters-text-div  matters-identity-text-div'>
              <h1 className='matters-content-title matters-content'  id='identity-title'>Show them what you're about</h1>
              <p className='matters-content-text matters-content' >Your digital presence is your company's identity to anyone who interacts.</p>
              <p className='matters-content-text matters-content' >It should uphold the ideas your company seeks to embody, and communicate those ideas to your users.</p>
              <p className='matters-content-text matters-content' >It's critical your presence is designed, first, with the user in mind, and sends the message you wish to communicate.</p>
            </div>
            <div className='identity-image-div matters-image-div'><img src='src/styles/images/about.jpg' id='identity-image'/></div>
          </div>

          <div id='matters-content-expectation' className='matters-content-container' style={{opacity:this.state.expectation, transition:'opacity 1s'}}>
            <div className='matters-text-div'>
              <h1 className='matters-content-title matters-content'  id='expectation-title'>Customer loyalty changed</h1>
              <p className='matters-content-text matters-content' >Digital-savvy companies are forcing an evolution in culture, and it's raising your customers' expectations</p>
              <p className='matters-content-text matters-content' >Digitally engaged customers expect timely, tailored products and information at the precise moment they're looking, on whatever platform they're using.</p>
            </div>
            <p className='matters-content-text matters-content' id='expectation-quote-text'>89% of consumers quit doing business with a company after a single poor customer experience in 2018.</p>
          </div>

          <div id='matters-content-information' className='matters-content-container' style={{opacity:this.state.information, transition:'opacity 1s'}}>
          <div className='matters-text-div matters-information-text-div'>
            <h1 className='matters-content-title matters-content'  id='information-title'>Knowledge is Power</h1>
            <p className='matters-content-text matters-content' >What could be more valuable to your business than information about the precise ways your customer interacts with your products and company?</p>
            <p className='matters-content-text matters-content' >Digital products give you access to precious data, substantially increasing your insight into the customer's experience.</p>

            </div>
            <div className='identity-image-div matters-image-div'><img src='src/styles/images/data.gif' id='identity-image'/></div>
          </div>


      </div>
    )
  }
  componentDidMount(){
    window.addEventListener('scroll', (event)=>{
      if(window.pageYOffset < 304){
          this.props.engagementNav();
        }
      if(window.pageYOffset >= 304 && window.pageYOffset < 1051){
          this.props.identityNav();
          this.setState({identity:1})
        }
        if(window.pageYOffset >= 957 && window.pageYOffset < 1416){
            this.props.expectationNav();
            this.setState({expectation:1})
          }
          if(window.pageYOffset >= 1476 ){
              this.props.informationNav();
              this.setState({information:1})
            }
      })
      this.props.scrollHeader();
      this.props.defaultView();
      console.log('matters re-render')
      window.scrollTo(0, 0)


      document.getElementById('nav-engagement').addEventListener('click', ()=>{window.scrollTo({top:document.getElementById('matters-content-engagement').offsetTop - 200, behavior: 'smooth'})})
      document.getElementById('nav-identity').addEventListener('click', ()=>{window.scrollTo({top:document.getElementById('matters-content-identity').offsetTop - 200, behavior: 'smooth'})})
      document.getElementById('nav-expectation').addEventListener('click', ()=>{window.scrollTo({top:document.getElementById('matters-content-expectation').offsetTop - 200, behavior: 'smooth'})})
      document.getElementById('nav-information').addEventListener('click', ()=>{window.scrollTo({top:document.getElementById('matters-content-information').offsetTop - 200, behavior: 'smooth'})})
  }
}

// <img src='src/styles/images/arrow.png' className='matters-nav-arrow' style={{transform:'rotate(-90deg)'}}/>

function mapStateToProps(state){
  return{
    books: state.books,
    view: state.view,
    values: state.values,
    header: state.header,
    matterNav: state.matterNav
  }
}


function mapDispatchToProps(dispatch){
	return bindActionCreators({ selector: selectBook, overlay: overlay, valueNextPage: valueNextPage, valuePrevPage: valuePrevPage, defaultView: defaultView, defaultHeader: defaultHeader, invertHeader: invertHeader, engagementNav: engagementNav, identityNav: identityNav, expectationNav: expectationNav, informationNav:informationNav, scrollHeader:scrollHeader, menuHeader:menuHeader }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(DigitalMatters)
