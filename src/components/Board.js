import React from 'react';
import Card from './Card';
import add from '../assets/add.svg';
import dot_menu from '../assets/3 dot menu.svg';
import npro from '../assets/No-priority.svg';
import low from '../assets/Img - Low Priority.svg';
import med from '../assets/Img - Medium Priority.svg';
import high from '../assets/Img - High Priority.svg';
import urg from '../assets/SVG - Urgent Priority colour.svg';
import to_do from '../assets/To-do.svg';
import in_prog from '../assets/in-progress.svg'
import blog from '../assets/Backlog.svg'
import prof from '../assets/profile-icon.png';

const priorityLevels = [
    "No priority", // 0
    "Low",         // 1
    "Medium",      // 2
    "High",        // 3
    "Urgent"       // 4
];

const priorityIcons = {
  "No priority": (
      <>
          <img src={npro} alt="No priority" />
          <p>No priority</p>
      </>
  ),
  "Low": (
      <>
          <img src={low} alt="Low priority" />
          <p>Low</p>
      </>
  ),
  "Medium": (
      <>
          <img src={med} alt="Medium priority" />
          <p>Medium</p>
      </>
  ),
  "High": (
      <>
          <img src={high} alt="High priority" />
          <p>High</p>
      </>
  ),
  "Urgent": (
      <>
          <img src={urg} alt="Urgent priority" />
          <p>Urgent</p>
      </>
  ),
  "Backlog": (
      <>
          <img src={blog} alt="Backlog" />
          <p>Backlog</p>
      </>
  ),
  "In progress": (
      <>
          <img src={in_prog} alt="In progress" />
          <p>In progress</p>
      </>
  ),
  "Todo": (
      <>
          <img src={to_do} alt="Todo" />
          <p>Todo</p>
      </>
  )
};



function Board({ tickets, grouping, sort, users}) {
  // Group tickets based on the selected grouping option
  const groupedTickets = tickets.reduce((acc, ticket) => {
    const key = ticket[grouping];
    if (!acc[key]) acc[key] = [];
    acc[key].push(ticket);
    return acc;
  }, {});

  // Sort tickets within each group
  const sortedTickets = Object.entries(groupedTickets).map(([key, group]) => {
    return [
      key,
      group.sort((a, b) => {
        if (sort === 'priority') return b.priority - a.priority;
        if (sort === 'title') return a.title.localeCompare(b.title);
        return 0;
      }),
    ];
  });
  function UserName({ userId }) {
    // Find the user by ID
    const user = users.find(user => user.id === userId);
  
    return (
        <div style={{display: "flex"}}>
            <img src={prof} alt='prof' style={{width: "20px", height: "20px", marginTop: "17px"}} />
            {user ? <p>{user.name}</p> : <p></p>}
        </div>
    );
  }
  return (
    <div className="board">
      {sortedTickets.map(([key, tickets, users]) => (
        
        <div className="column" key={key}>
            
          <span className='card_head'><h4 className='head_title'>
            {
            (priorityLevels[key]) ? priorityIcons[priorityLevels[key]] : 
            (priorityIcons[key]) ? priorityIcons[key]: 
            (<UserName userId={key} />) ? <UserName userId={key} /> : key
            
            }
            </h4><p style={{display: "flex", padding: "10px"}}>
            <img src={add} style={{width:"15px"}} alt='add'/>
            <img src={dot_menu} style={{width:"15px"}} alt='dots'/>
            </p></span>
          {tickets.map((ticket) => (
            <Card key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
