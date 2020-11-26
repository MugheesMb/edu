import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import crown from './crown.svg';
import { Button } from 'semantic-ui-react'

import './Header.scss';


const Header = () =>  {
 const [navbar, setNavbar] = useState(false);

 
const changeBackground  = () => {
        if(window.scrollY >= 80) {
                
setNavbar(true)
        }
        else {
                setNavbar(false);
                
        }
}
window.addEventListener('scroll', changeBackground);

return (

        <div className={ navbar ? 'header' : 'head' }>
    
   
  
  <div className='options2' >
  <Link className='option'  to='/' >
<div className='logo' >
<img  src={crown}  alt='mugy' />  <span className=' opt  f4   ' > Expertee</span>
</div>
</Link>
  </div>


<div className='options'>



<Link className='option   f4  dim black   ' to='/shop'>Our Services</Link>
<Link className='option  f4  dim black   ' to='/checkout'>How it works</Link>
<Link className='option   f4  dim black   ' to='/shop'>About us</Link>
<Link className='option  f4     ' to='/checkout'> <Button className='ss' color='violet'>Megazine</Button></Link>

            
        </div>
        </div>
)
}


export default Header;
