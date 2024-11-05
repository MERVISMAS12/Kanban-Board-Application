import React from 'react';
import dot from '../assets/dot-svgrepo-com.svg';
import prof from '../assets/profile-icon.png';
import to_do from '../assets/To-do.svg';
import in_prog from '../assets/in-progress.svg'
import blog from '../assets/Backlog.svg'

function Card({ ticket }) {
  return (
    <div className="card">
      <span className='profile_line'><p style={{ color: "grey" }}> {ticket.id}</p> <img className='profile_pic' src={prof} alt='profile'/> </span>

      <span style={{display: "flex"}}>{
        (ticket.status === "Todo")?<img style={{padding:"5px"}} src={to_do} alt='to_do'/> : 
        (ticket.status === "In progress")?<img src={in_prog} style={{padding:"5px"}} alt='in_progress'/> :
        (ticket.status === "Backlog")?<img src={blog} style={{padding:"5px"}} alt='in_baklog'/>:<h1>hello</h1>
        }
        <h4>{ticket.title}</h4></span>

      <span className='featur_req'> <img src={dot} className='dot' alt='dot'/> <p>{ticket.tag}</p></span>
      
    </div>
  );
}

export default Card;
