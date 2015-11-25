import React from 'react';

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
      <div className="secondary-bg">
        <h1>Main is working-ish</h1>
      </div>
    );
  }
});
