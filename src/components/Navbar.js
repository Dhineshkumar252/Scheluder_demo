import React from "react"
import './Navbar.css';
import Slideshow from "./Slideshow";
import TeamTask from "./TeamTask";
import {Link} from 'react-router-dom';
 import Taskuh from "./Taskuh";

 import Dash from "../Dash";
 import { Provider } from 'react-redux';
import store from '../redux/store';

function Navbar (){
   
    
return(
        
        <div>
<div class="main">
<div class="navbar">
    <div class="icon">
        <h2 class="logo">Scheduler</h2>
           
    </div>

    <div class="menu">
        <ul>
            <li><a href="#">HOME</a></li>
    
            <li><a href="Dash.js" ><Link to='/Dash' target="_blank">TASKIE</Link></a></li>
           
        
             <li><a href="#"><Link to='/ReactBigCalendar'>CALENDER</Link></a></li> 
              <li><a href=''><Link to='/Sbar'>TASKS</Link></a></li> 
        </ul>
    </div>
   
<div class="navigationn">

  <a class="buttonn" href="">


<div class="logout"><Link to='/Signin'>LOGOUT</Link></div>

  </a>

</div>
    </div>
</div> 

    <div>
         <Slideshow/> 
    </div>
<div>
    
  
</div>

</div>
)};
export default Navbar;
