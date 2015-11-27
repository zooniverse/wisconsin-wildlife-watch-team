import React from 'react';
import Data from './Data';
import TeamItem from './TeamItem';
import OrgItem from './OrgItem';
import ImgSrcItem from './ImgSrcItem';

export default React.createClass({
  render() {
    return (
      <div className="secondary-content">
        <div className="left-column">
          {this.props.currentTab == 1 ?
            <div className="content">
              <h2>The WildlifeWatch Team</h2>
              {Data.teamMembers.map( (item, index) => {
                return (
                  <TeamItem item={item} key={index}/>
                );
              })}
            </div>
            :null
          }

          {this.props.currentTab == 2 ?
            <div className="content">
              <h2>Participating Organizations</h2>
              {Data.organizations.map( (item, index) => {
                return (
                  <OrgItem item={item} key={index}/>
                );
              })}
            </div>
            :null
          }

          {this.props.currentTab == 3 ?
            <div className="content">
              <h2>Image Credits</h2>
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
