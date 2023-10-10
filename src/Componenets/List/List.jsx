import React, { useEffect, useState } from 'react';
import './List.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { gethotelooty } from '../Utilis/Apis';

function List(props) {
    const[data1,setdata1]=useState([]);
     const[data2,setdata2]=useState();

    useEffect(()=>{
        axios.get(gethotelooty)
        .then((res)=>{
            const filter= res.data.filter(item=>item.rating>=4)
            setdata1(filter)
        })
        .catch((error)=>{
            return error
        })
    },[])
    return (
        <div className='list'>
            <div className="listcontainer">
            <div className='firstlist'>
                <h2>Top pics in Ooty</h2>
                <ul className='hotellist'>
                   { data1.length>0 ? data1.map(items=> <Link to={`/booking/${items._id}`} ><li className='item'>
                        <img src={items.image} alt='...' height={"200px"} width={"200px"}></img>
                        <div className='cardbody'>
                        <h4>{items.name}</h4>
                        <span>Hotel in Ooty</span>
                        </div>
                    </li> </Link>):null}
                    </ul>
            </div>
            <div className='secondlist'>
                <h2>Top pics in Kodaikannal</h2>
                <ul className="hotelist">
                <li className='item'>
                       <a href='/'><img src='images\capital o hotel.jpg' alt='...' height={"200px"} width={"200px"}></img>
                        <div className='cardbody'>
                        <h4>Capital O Hotel Hills Palace</h4>
                        <span>Hotel in Ooty</span>
                        </div></a> 
                    </li>

                </ul>
            </div>
            </div>
           
        </div>
    );
}

export default List;