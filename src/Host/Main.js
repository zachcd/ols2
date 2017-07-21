import React, { Component } from 'react';


// if nothing in Organization is opened
  //display Upcoming and Teams as central medium options
// if something in Organization is opened
  //move nav to top
class Organization extends Component {
  render() {
    return (
      <div className="Organization" id="{this.state.organization}">
        <Link>Teams</Link>
        <Link>Upcoming</Link>

      </div>
    )
  }
}
