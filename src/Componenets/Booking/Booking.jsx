import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Booking.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood, faBroom, faCalendar, faParking, faStar, faTv, faWifi } from '@fortawesome/free-solid-svg-icons';

function Booking(props) {
   const[book,setdata]= useState("")
   const [type,settype]=useState("")
   const [room,setroom]=useState("")
   const[date,setdate]=useState({startdate:"",enddate:""});
   const{id}=useParams()
    useEffect(()=>{
        
        axios.get(`http://localhost:3030/user/getone/${id}`)
        .then((res)=>{
           const value= res.data.room.map((item)=>{
              return item.type})
              const order= [...new Set(value)]
              setdata(res.data)
              settype(order)
        })
        .catch((error)=>{
            return error
        })
    },[id])

    const handler=(e)=>{
        const value= e.target.value
        const filter= book.room.filter(item=>item.type===value)
        setroom(filter)
    }

    const handledate=(e)=>{
        const{name,value}=e.target
         setdate({...date,[name]:value})
         console.log(date)
    }

    const submitdate=()=>{
        axios.post(`http://localhost:3030/user/getdate/${id}`,date)
        .then((res)=>{
            console.log(res)
        })
        .catch((error)=>{
            console.log(error)
        })
          // const startdate= new Date( document.getElementById('startdate').value);
         //  const enddate= new Date (document.getElementById('enddate').value);
         //  const diffTime = Math.abs(startdate - enddate);
         //  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        //  console.log(diffDays)
    }
    
    return (
        <div>
            <Navbar/>
            <div className='container'>
               { book ? <div>
               <div className='card'>
                    <div className='cardimage'>
                        <img src={book.image} alt='...' width={"300px"} height={"300px"}></img>

                    </div>
                    <div className='cardbody'>
                        <h2>{book.name}</h2>
                        <div>
                             <FontAwesomeIcon style={{color:'gold'}} icon={faStar}/>
                        </div>
                        <div className='time'>
                        <div className='card'>
                            <FontAwesomeIcon icon={faCalendar} /><span>11:00 PM</span>
                            </div>
                            <div className='card'>
                            <FontAwesomeIcon icon={faCalendar}/><span>12:00 AM</span>
                            </div>

                        </div>
                        <div className='aminities'>
                            { book.aminities.map(item=>
                                   <div className='card'>
                                    { item==='Breakfast' ? <FontAwesomeIcon  className='icon' icon={faBowlFood}/> : item==='Wifi' ? <FontAwesomeIcon  className='icon' icon={faWifi}/>
                                     : item==='Parking' ? <FontAwesomeIcon  className='icon' icon={faParking}/> : <FontAwesomeIcon className='icon' icon={faTv} /> }<span>{item}</span>
                                   </div>
                                )}
                           
                           
                        </div>
                        <div className='date-area'>
                            <div>
                            <input type='date' id='startdate' name='startdate' onChange={handledate}></input>
                            </div>
                            <div>
                            <input type='date' id='enddate' name='enddate' onChange={handledate}></input>
                            </div>
                            <div>
                                <button className='check-button' onClick={submitdate}>Check</button>
                                </div>
                        </div>
                    </div>

                </div>
                <div className='table'>
                <table>
                    <thead>
                        <tr style={{backgroundColor:'royalblue',textAlign:'center',color:'white'}}>
                            <td >Room type</td>
                            <td >No. of Rooms</td>
                            <td >Select</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='tablebody' style={{textAlign:"center"}}>
                            <td><select style={{width:'50%'}} onChange={handler}>
                                <option>...choose</option>
                               { type.length>0 ? type.map(item=><option>{item}</option>) : null}
                                </select></td>
                            <td><select style={{width:'50%'}}>
                                <option>...choose</option>
                                { room.length>0 ? room.map((_,i)=><option>{i+1}(₹{_.price*(i+1)})</option>) : null}
                                </select></td>
                            <td><select style={{width:'50%'}}>
                                <option>...choose</option>
                                </select></td>
                        </tr>
                    </tbody>

                </table>
                </div>
               </div> : <Loading/> }
            </div>
            
        </div>
    );
}

export default Booking;