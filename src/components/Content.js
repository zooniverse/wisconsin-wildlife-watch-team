import React from 'react';
import Data from './Data';
import BasicItem from './BasicItem';
import ImgSrcItem from './ImgSrcItem';

export default React.createClass({
  render() {
    return (
      <div className="secondary-content">
        <div className="left-column">
          {this.props.currentTab == 1 ?
            <div className="content">
              <h2>{Data.teamTabs[0].heading}</h2>
              {Data.teamMembers.map( (item, index) => {
                return (
                  <BasicItem item={item} key={index}/>
                );
              })}
            </div>
            :null
          }

          {this.props.currentTab == 2 ?
            <div className="content">
              <h2>{Data.teamTabs[1].heading}</h2>
              {Data.organizations.map( (item, index) => {
                return (
                  <BasicItem item={item} key={index}/>
                );
              })}
            </div>
            :null
          }

          {this.props.currentTab == 3 ?
            <div className="content">
              <h2>{Data.teamTabs[2].heading}</h2>
              {Data.imageCredits.map( (item, index) => {
                return (
                  <ImgSrcItem item={item} key={index}/>
                );
              })}
            </div>
            :null
          }

        </div>
      </div>
    )
  }
});
