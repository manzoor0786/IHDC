
import React from 'react'
import { NavbarBrand } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Header from '../components/Header';

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1}
  return (
<>
    <div className='nav ' style={{backgroundColor:"gray" , height:"60px"}}>
    {/* <img src="https://i.postimg.cc/9fwZt0S6/real-estate-house.png" style={{height:"100px",marginBottom:"10px"}}/>   */}
    <h2 style={{textAlign:"center"}}>XYZ SYSTEMS LLP.</h2>
   

    </div> 
    <div>
   <div >
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
  
</ul>

</nav></div>
    <div class="container">
        



    <div class="float-container"  >
  <h1 style={{marginLeft:"50px"}} >New Arrival</h1>

  <h4 style={{marginLeft:"50px"}}>Join Today</h4>
<img src='https://i.postimg.cc/0NKWSYC1/membership.jpg' style={{marginLeft:"140px",height:"300px"}} ></img>

<div>
  <Link to={'/join'}>
<button>
      Join Now
      
    </button>
    </Link>
</div>
</div>
<div class="float-child"  >
      <div >
      <Slider {...settings}>
        {data.map((d) => (
          <div key={d.p} >
            <div >
              <img id="image"  src={d.img} alt="" />
            </div>

            <div >
              <p style={{paddingLetf:"70px"}} className="text-xl font-semibold">{d.name}</p>
           
           
            </div>
          </div>
        ))}
      </Slider>
      <button>UNLOCK NOW</button>

    
      </div>
      <div style={{paddingLeft:"18px"}}>
      <button >DETAILS</button>
      </div>
    </div>

</div>
</div>
</>
  )
}
const data = [
  {
    name: `Lower Interest Rate`,
   
    img: `/assets/img2.jpg`,
   
  },
  {
    name: `Interest Free Payment`,
    img: `/assets/img3.jpg`,
    
  },
  {
    name: `Discounts on Materials`,
    img: `/assets/img1.jpg`,
    
  },
  {
    name: `Lower Interest Rate`,
    img: `/assets/img2.jpg`,
   
  },
  {
    name: `Interest Free Payment`,
    img:`/assets/img3.jpg`,
    
  },
  
];
export default Home