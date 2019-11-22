import React, { useState } from 'react';
import Tab from '../Tab/Tab';

const Tabs = ({ children }) => {
  console.log('label', children[0].props.label)
  const [activeTab, onActiveTabClick] = useState(children[0].props.label);
  console.log('active', activeTab)
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
          if (child.props.label !== activeTab) return undefined;
          return children;
        })}
      </div>
    </div>
  );
};

export default Tabs;