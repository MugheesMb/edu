import React from 'react'
import './next.css';
import sat from './sat.mp4';
import  { ReactComponent as Astronomy } from './Astronomy.svg';
const Next = () => {
    return (
        <>
        <div className='man'>
        <div className='nex' >
            
             <i className='pt2'> WHAT YOU CAN GET BY JOINING EXPERTEE. </i>   <Astronomy className=' ast fab fa-spin'/> 
        </div>
                                   <div className='svgcontainer' >

                  
                     <video className='logg' src={sat} autoPlay='true' loop='true' preload  controlsList="nodownload" />
                           <div className='newl' >
                            <h2 className='qoute' >  Your Satisfaction is Our Goal  </h2>
                            <div className='opp'>
                              <p>
                            To achieve total customer satisfaction, we will do our best to understand our customer’s requirements and meet those requirements at all times and We are always
ready to go an extra mile to help you
submit all tasks on time, so you make time for the things that matter.
                                
                              </p>
                              </div>
                          </div>
                    </div>


                    








                










                    </div>
        </>
    )
}

export default Next;
