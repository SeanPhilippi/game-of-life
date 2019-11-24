import React from 'react';

const Tab = ({ onClick, activeTab, label }) => {
  return (
    <li
      className={`tab-list-item ${ activeTab === label ? 'tab-list-active' : '' }`}
      onClick={() => onClick(label)}
    >
      { label }
    </li>
  );
};

export default Tab;