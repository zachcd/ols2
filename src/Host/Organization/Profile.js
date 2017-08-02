import React, { Component } from 'react';
import { Link } from 'react-router-dom'


// if nothing in Organization is opened
  //display Tournaments
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


export default OrgProfile
