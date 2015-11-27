import React from 'react';
import Data from './Data';
import Tab from './Tab';

export default React.createClass({
  handleClick(tab) {
    this.props.changeTab(tab);
  },

  render() {
    return (
      <div className="secondary-content">
        <div className="sub-nav">
          {Data.teamTabs.map(function(tab, index) {
            return (
              <Tab
                handleClick={this.handleClick.bind(this, tab)}
                key={index}
                name={tab.title}
                isCurrent={(this.props.currentTab === tab.id)}
              />
            );
          }.bind(this))}
        </div>
      </div>
    );
  }
});
