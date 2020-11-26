import React from 'react'
import './main.scss';
import vid from './vid.mp4';
import ReactRotatingText from 'react-rotating-text';
import cro from './wave.svg';
import  crow from './team.svg';

const Main = () => {
    return (
      <>
        <div className='main' id='main' >
       {/* <img className='log' src={crow}  alt='mugy' />  */}
          <video className='log' src={vid} autoPlay='true' loop='true' preload />
          
          <div className='writ' >
         
         <span style={{color:'black'  }} className='hy' > Hire a professional helper! </span>  
         <br/>
<br/>
         <span style={{ color: 'black'}} className='senior' >Get your work done in  less time.</span>
         <br/>
         <br/>
         <br/>
        
          
          <ReactRotatingText  
          className='blink'
         
          items={['We Help with Assignments.', 'We Help with Thesis Writing.','We Help with Papers.','We Help with Research Papers.','We Help with Articles.','We Help with Proposal Writing.','We Help with Case studies.',]}
                              color={' blue'}
                              typingInterval ={10   }
                              pause ={1000}
          />
          
          </div>
         
        </div>
        
        <img   src={cro}  alt='mugy' /> 
       

      </>  
    )
}

export default Main;