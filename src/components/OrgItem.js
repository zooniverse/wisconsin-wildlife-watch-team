import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div className="teamItem">
        <h3 className="orgName">{this.props.item.name}</h3>
        <img src={this.props.item.imgSrc}/>
        <p className="orgDescription">{this.props.item.description}</p>
      </div>
    );
  }
});
