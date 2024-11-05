import React, { useEffect, useState } from 'react';
import Board from './components/Board';
import GroupSelector from './components/GroupSelector';
import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [usr, setusr] = useState([]);
  const [grouping, setGrouping] = useState('status'); // Default grouping
  const [sort, setSort] = useState('priority'); // Default sorting

  // Fetch data from the API on component mount
  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((response) => response.json())
      .then((data) => {
        setTickets(data.tickets);
        setusr(data.users);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Save grouping preference in local storage
  useEffect(() => {
    const savedGrouping = localStorage.getItem('grouping');
    if (savedGrouping) setGrouping(savedGrouping);
  }, []);

  useEffect(() => {
    localStorage.setItem('grouping', grouping);
  }, [grouping]);

  return (
    <div className="App">
      <h1>Kanban Board</h1>
      <GroupSelector grouping={grouping} setGrouping={setGrouping} setSort={setSort} />
      <Board tickets={tickets} grouping={grouping} sort={sort} users={usr}/>
    </div>
  );
}

export default App;
