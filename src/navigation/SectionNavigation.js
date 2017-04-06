import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SectionNavigation extends Component {
    props: {
      isLoggedIn: Boolean
    }
    render() {
      if (isLoggedIn) {
        return(
          <LoggedNavigation>
          </LoggedNavigation>

        )
      } else {
        return(
          <NoUserNavigation>
          </NoUserNavigation>
        )
      }
    }
}
class LoggedNavigation extends Component {
  render() {
    return(
      <Link to="/team"> My Team </Link>
      <Link to="/schedule"> My Schedule </Link>
      <Link to="/stats"> My Stats </Link>
    )
  }
}

class NoUserNavigation extends Component {
  render() {
    return(
      <Link to="/team">Teams </Link>
      <Link to=""
    )
  }
}

export default SectionNavigation
