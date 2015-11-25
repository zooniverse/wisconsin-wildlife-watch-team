import React from 'react';
import { Link }  from 'react-router';
import packageJSON from '../../package.json';

export default React.createClass({
  getInitialState: function () {
    return {
      currentTab: 1
    };
  },

  changeTab: function(tab) {
    this.setState({ currentTab: tab.id });
  },

  render: function() {
    return(
      // <div className="secondary-bg">
        <h1>Its working-ish!</h1>
        // <Tabs
        //   currentTab={this.state.currentTab}
        //   changeTab={this.changeTab}
        // />
        // <Content
        //   currentTab={this.state.currentTab}
        // />
      // </div>
    );
  }
});
