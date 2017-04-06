import React, { Component } from 'react';
import AccountAccessButton from './accountAccessButton';
import SectionNavigation from './SectionNavigation';
import { connect } from 'react-redux'

class MainHeader extends Component {
  render() {
    return (
      <div>
      <AccountAccessButton username="BeardedDog" isLoggedIn={false}>
      </AccountAccessButton>
      <SectionNavigation isLoggedIn={false}>
      </SectionNavigation>
      </div>
    )
  }

}

export default MainHeader
