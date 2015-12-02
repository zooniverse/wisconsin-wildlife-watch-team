import React from 'react';
import Tabs from './Tabs';
import Content from './Content';

export default React.createClass({
  getInitialState() {
    return {
      currentTab: 1
    };
  },

  changeTab(tab) {
    this.setState({ currentTab: tab.id });
  },

  render() {
    return (
      <div className="secondary-content">
        <Tabs
          currentTab={this.state.currentTab}
          changeTab={this.changeTab}
          className="secondary-content"
        />
        <Content
          currentTab={this.state.currentTab}
        />
      </div>
    );
  }
});
