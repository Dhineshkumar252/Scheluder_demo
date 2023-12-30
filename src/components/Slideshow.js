import React from "react";
import './Slider.css';
import ReactPlayer from 'react-player';
import { useRef } from 'react';
import vid from "./Video.mp4";
import { Link } from "react-router-dom";
function Slideshow(){
  return(
    <div>

<div class="slidershow middle">
      <div class="slides">
        {/* <input type="radio" name="r" id="r1" checked/>
         <input type="radio" name="r" id="r2"/> 
        <input type="radio" name="r" id="r3"/>
        <input type="radio" name="r" id="r4"/>
        <input type="radio" name="r" id="r5"/> */}
        {/* <div class="slide s1">
          <img src="https://images.pexels.com/photos/5990265/pexels-photo-5990265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
        </div>
        <div class="slide">
        <img src="https://images.pexels.com/photos/3782235/pexels-photo-3782235.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
        </div>
        <div class="slide">
        <img src="https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
        </div>
        <div class="slide">
          <img src="https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
        </div>
        <div class="slide">
          <img src="https://images.pexels.com/photos/5386754/pexels-photo-5386754.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
        </div> */}
        <div id="ReactPlayer"> 

      <ReactPlayer width={2400} height={900} url={vid} controls={false} loop autoplay/>
        </div>
      {/* <video autoplay loop muted controls>
           <source src="" type="video/mp4"/>
      </video> */}
      </div> 
      {/* <div class="navigation">
        <label for="r1" class="bar"></label> 
        
        <label for="r3" class="bar"></label>
        <label for="r4" class="bar"></label>
        <label for="r5" class="bar"></label>
      </div> */}
      <div className="foott">
        <div className="images">
             
        </div>
        <div>
      </div>
        <div className="conn"> 
              <p className="">
            <a href="" className="lo">
               |<Link to='Navbar' className="os">Home</Link> |
              </a>
              <a href="" className="lo" >
             <Link to='/Blog' className="os">Blog</Link>  |
              </a>
              <a href="" className="lo">
             <Link to='/Terms' className="os">terms and conditions </Link> |
              </a>
              <a href="" className="lo">
              <Link to='/Contactus' className="os">Contact Us </Link>|
              </a>
              <a href=""className="lo">
              <Link to='/Aboutus' className="os"> about </Link>|
              </a>
              <a href=""className="lo">
              <Link to='/Feedback' className="os"> feedback </Link>|
              </a>
               </p>
        </div>
</div>  
    </div>
    </div>
    )
    }
    export default Slideshow;