import React, { Component } from 'react';
import AccountAccessButton from './accountAccessButton';
import SectionNavigation from './SectionNavigation';
import { connect } from 'react-redux'

class NavHeader extends Component {
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
/*const mapStateToProps = (state) => {
  return {  }
}

const mapDispatchToProps = (dispatch) => {
  return{}
}
const MainHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavHeader)
export default MainHeader
*/
const MainHeader = NavHeader
export default MainHeader
