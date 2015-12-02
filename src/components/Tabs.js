import React from 'react';
import Data from './Data';

export default React.createClass({
  handleClick(tab) {
    this.props.changeTab(tab);
  },

  render() {
    return (
        <nav className="sub-nav">
          {Data.teamTabs.map( (tab, index) => {
            return (
              <button type="button" key={index} onClick={this.handleClick.bind(this, tab)} className={(this.props.currentTab === tab.id) ? 'active' : null}>
                <span>{tab.title}</span>
              </button>
            );
          }.bind(this))}
        </nav>
    );
  }
});
