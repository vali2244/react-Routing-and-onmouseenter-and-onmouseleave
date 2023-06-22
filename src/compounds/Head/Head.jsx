import {Link} from "react-router-dom"

import "./head.css"

const Head = () => {
  return (

    
<>

<div className='navbar relative'>
        <div className="leftnav">
<img src="https://netpresenter.wpenginepowered.com/wp-content/themes/netpresenter/resources/images/svg/logo-new.svg" alt="" />
        </div>
        <div className="rightnav">
            <Link to='/'>home</Link>
            <Link to='/about'>about</Link>
            <Link to='/login'>login</Link>
            <Link to='/contact'>contact</Link>
            <Link to='/users'>users</Link>
        </div>
    </div>
    
<span className="absolute">
  <img src="src/assets/img221-removebg-preview.png" alt="" />
  <span className="e1">
    <span className="eg1">
      Eagle is precious 
    </span>
  </span>
</span>

</>
  
  )
}

export default Head