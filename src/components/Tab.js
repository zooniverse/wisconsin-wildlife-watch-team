import React from 'react';

export default React.createClass({
  handleClick(e) {
    e.preventDefault();
    this.props.handleClick();
  },

  render() {
    return (
      <button onClick={this.handleClick} className={this.props.isCurrent ? 'active' : null}>
        {this.props.name}
      </button>
    );
  }
});
