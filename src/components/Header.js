import React from 'react'

function Header() {
  return (
    <div><div className='nav ' style={{backgroundColor:"gray" , height:"60px"}}>
    <img src="https://i.postimg.cc/9fwZt0S6/real-estate-house.png" style={{height:"100px",marginBottom:"10px"}}/>  
    <h2 style={{textAlign:"center"}}>XYZ SYSTEMS LLP.</h2>
   

    </div> 
    <div>
    <nav>
<ul>
  <li>
    <a href="#">Home</a>
  </li>
  
  <li>
    <a href="#">Dashboard</a>
  </li>
  <li>
    <a href="#">Products</a>
  </li>
  <li>
    <a href="#">Transactions</a>
  </li>
  <li>
    <a href="#">Journal</a>
  </li>
  <img  src='./'></img>
</ul>

</nav></div></div>
  )
}

export default Header