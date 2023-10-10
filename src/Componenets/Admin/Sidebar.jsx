import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard, faHotel, faPlus, faPowerOff, faTable } from '@fortawesome/free-solid-svg-icons';


const logout=()=>{
    window.localStorage.clear()
    window.location.href('/')
}
 export const Sidebar =[
    {
     title:'Dasboard',
     path:'/admin/dashboard',
     icon: <FontAwesomeIcon icon={faDashboard}/>,
     cName:'nav-text'
},
{
    title:'Hotel',
    path:'/admin/hotels',
    icon: <FontAwesomeIcon icon={faHotel}/>,
    cName:'nav-text'
},
{
    title:'Add Hotel',
    path:'/admin/addhotels',
    icon: <FontAwesomeIcon icon={faPlus}/>,
    cName:'nav-text'
},
{
    title:'Logout',
    path:{logout},
    icon: <FontAwesomeIcon icon={faPowerOff}/>,
    cName:'nav-text'
},
] 
    
    