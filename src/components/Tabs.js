import React from 'react';
import Tab from './Tab';

export default React.createClass({
  handleClick(tab) {
    this.props.changeTab(tab);
  },

  render() {
    return (
      <div className="secondary-content">
        <div className="sub-nav">
          {teamTabs.map(function(tab, index) {
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

var teamTabs = [
  {id: 1, title: "People"},
  {id: 2, title: "Organizations"},
  {id: 3, title: "Image Credits"}
];
