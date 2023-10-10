import React from 'react';
import Adminnavbar from '../Adminnavbar/Adminnavbar';
import './Hotels.css'
import { allhotel } from '../../Utilis/Apis';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faFolderOpen, faTrash } from '@fortawesome/free-solid-svg-icons';
import Showbutton from './Showbutton';
import { Link } from 'react-router-dom';


function Hotels(props) {
    const[data,setdata]=useState([])
    const [records, setrecords] = useState([])

    const search=()=>{

    }
    useEffect(()=>{
        axios.get(allhotel)
        .then((res)=>{
            setdata(res.data)
            setrecords(res.data)
        })
        .catch((error)=>{
            return error
        })
    },[])


    const handlerChange = (e) => {
        setrecords(data.filter(item => item.name.toLowerCase().includes(e.target.value)))
    }
    return (
        <div className='admin-container'>
            <Adminnavbar/>
            <div className='content'>
                   <h3>Hotels</h3>
                   <div className='item-search'>
                   <input type='search' name='search' placeholder='Hotel name' onChange={handlerChange}></input>
                   <select >
                   <option>select place...</option>
                   <option>Ooty</option>
                   <option>Kodaikanal</option>
                   </select>
                   <button onClick={search}>search</button>
                   </div>
                   <ul className='hotel-list'>
                   { records.map(items=> <li>
                       <div className="card">
                       <img src={items.image} alt='...' height={"150px"} width={"150px"} ></img>
                       <div className='card-body'>
                           <span style={{fontWeight:'bold'}}>{items.name}</span>
                           <div>
                           <span style={{color:'royalblue',fontWeight:'bold'}}>{items.place}</span>
                           </div>

                       </div>
                       <div className='card-button'>
                           <Link to='/admin/edithotel' onClick={()=>{props.editdata(items)}} ><button style={{backgroundColor:'gold'}} ><FontAwesomeIcon style={{fontSize:'1.2rem'}} icon={faEdit} /></button></Link>
                           <button><FontAwesomeIcon style={{color:'red',fontSize:'1.2rem'}} icon={faTrash} /></button>
                          <Showbutton items={items}/>
                           </div>
                   </div>
                   </li>)}
                  
                   </ul>
                   
            </div>
            
        </div>
    );
}



export default Hotels; 