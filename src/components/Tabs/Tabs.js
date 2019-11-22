import React, { useState } from 'react';
import Tab from '../Tab/Tab';
// import './Tabs.css';

const Tabs = ({ children }) => {
  const [activeTab, onActiveTabClick] = useState(children[0].props.label);
  return (
    <div className="tabs">
      <ol className="tab-list">
        {children.map(child => {
          const { label } = child.props;
          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={onActiveTabClick}
            />
          );
        })}
      </ol>
      <div className="tab-content">
        {children.map(child => {
          const { children } = child.props;
          if (child.props.label !== activeTab) return null;
          return children;
        })}
      </div>
    </div>
  );
};

export default Tabs;