import React, { useState } from 'react';
import DisplayIcon from '../assets/Display.svg';
import DownIcon from '../assets/down.svg';

function GroupSelector({ grouping, setGrouping, setSort }) {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="group-selector">
      {/* Display Button with Icon */}
      <button className="display-button" onClick={toggleDropdown}>
        <img src={DisplayIcon} alt="Display Icon" className="icon" />
        <p className="disp">Display</p>
        <img src={DownIcon} alt="Dropdown Icon" className={`icon ${isOpen ? 'rotate' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-item">
            <label>Grouping:</label>
            <select value={grouping} onChange={(e) => setGrouping(e.target.value)}>
              <option value="status">Status</option>
              <option value="userId">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>

          <div className="dropdown-item">
            <label>Ordering:</label>
            <select onChange={(e) => setSort(e.target.value)}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}

export default GroupSelector;
