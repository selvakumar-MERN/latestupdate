import React, { useState } from 'react';
import './Adminnavbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import {Sidebar} from '../Sidebar';


function Adminnavbar(props) {
    const [sidebar, setsidebar]=useState(false)

    const sidemenu=()=>{
       setsidebar(!sidebar)
    }
    return (
        <div >
            <div className='adminnav-container'>
            <Link to='#' className='menu-bars' id='barbtn' onClick={sidemenu}><FontAwesomeIcon icon={faBars}/> </Link>
            <h3 style={{fontSize:'1.7rem',fontStyle:'italic'}}>Admin Panel</h3>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars' onClick={sidemenu}>
                            <FontAwesomeIcon className='xicon' icon={faX}/>
                        </Link>
                    </li>
                    {Sidebar.map((item,index)=>{
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>

                            </li>
                        )
                    })}

                </ul>

            </nav>
          
            
            
        </div>
    );
}

export default Adminnavbar;