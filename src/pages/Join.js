import React from 'react'

function Join() {
  return (
    <div>
      <header style={{backgroundColor:"silver",height:"50px",textAlign:"center"}}>
<h4 style={{padding:"15px"}}>XYZ SYSTEM LLP.</h4>
      </header>
<div >
  <img  style={{height:"500px",float:"right"}} src='https://i.postimg.cc/VkmR3Yj5/celeb.png'></img>
</div>
<h1 id="h" style={{paddingLeft:"58px"}}>Unlock Exclusive Benefits</h1>
<div class="wrapper">


    <h2>PHONE NUMBER</h2>
    <form action="#">
      <div class="input-box">
        
        <input type="text" placeholder="Phone Number" required/>
      </div>
      <h2>NAME</h2>
      <div class="input-box">
        <input type="text" placeholder="Name" required/>
      </div>
      <h2>EMAIL [OPTIONAL]</h2>
      <div class="input-box">
        <input type="mail" placeholder="Email" required/>
      </div>
      <div class="input-box">
        <button class="btn" style={{height:"80%",width:"107%",marginLeft:"1px",color:"white",borderColor:"black"}} >CONTINUE</button>
      </div>
      <p>Get ready to receive a secret code (OTP) on your Phone</p>
    </form>
  </div>

    </div>
  )
}

export default Join