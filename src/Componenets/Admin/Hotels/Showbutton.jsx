import React from 'react';
import './Showbutton.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

function Showbutton(props) {
   const[show,setshow]=useState(false)
    const Show=()=>{
        setshow(!show)    
    }
   
    return (
        <div>
            <button id="myBtn" onClick={Show}><FontAwesomeIcon style={{fontSize:'1.2rem'}} icon={faFolderOpen} /></button>
        <div id="myModal" class={show ? "modal" : "modal-hidden"}>

  
  <div class= "modal-content">
    <div className='modal-header'>
          <span>{props.items.name}</span>
    </div>
    <hr/>
    <div className='modal-body'>
         <img src={props.items.image} height={'200px'} width={'200px'}></img>
         <span>{props.items.place}</span>
    </div>
    <div className='modal-button'>
    <button style={{backgroundColor:'#dc3545',color:'white'}} onClick={Show}>close</button>
    </div>
    
  </div>

</div>
        </div>
    );
}

export default Showbutton;