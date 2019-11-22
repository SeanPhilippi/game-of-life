import React from 'react';
import './Tab.css';
let className = 'tab-list-item';

const Tab = ({ onClick, activeTab, label }) => {
  if (activeTab === label) {
    className += ' tab-list-active';
  }
  return (
    <li
      className={className}
      onClick={() => onClick(label)}
    >
      { label }
    </li>
  );
};

export default Tab;