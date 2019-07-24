import React from 'react';
import '../styles/main.css'

const PageTitle = (props)=>{
  return(
    <div className='page-title-box'>
      <p className='page-title-text' style={{color: props.color}}>{props.message}</p>
    </div>
  )
}

export default PageTitle;
