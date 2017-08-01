import React, { Component } from 'react';


// if nothing in Organization is opened
  //display Upcoming and Teams as central medium options
// if something in Organization is opened
  //move nav to top
class OrgProfile extends Component {
  render() {
    return (
      <div className="Organization" id="{this.props.org}">
        <Link>Teams</Link>
        <Link>Upcoming</Link>

      </div>
    )
  }
}
