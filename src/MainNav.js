import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { LogOut } from './REDUX/actions/UserAccountActions'



const Nav = (props) => {
  let orgLink
  if (props.organization) {
    orgLink = <Link to={"/"+ props.organization.url}>{props.organization.name}</Link>
  } else {
    orgLink = null
  }
  if(props.loggedIn) {
    return (
      <div>
        <Link to="/">Organizations</Link>
        {orgLink}
        <div onClick={() => props.openCards()}>Cards</div>
        <div onClick={() => props.logout()}>Logout</div>
      </div>
    )
  } else {
    return(
      <div>
      <Link to="/">Organizations</Link>
      {orgLink}
      <div onClick={() => props.openLogin()}>Login</div>
      <div onClick={() => props.openRegister()}>Register</div>
      </div>
    )
  }


}


const mapStateToProps = state => {
  return {
    loggedIn: state.user.status,
    currentOrg: state.organization
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(LogOut())
    }
  }
}

const MainNav = connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav)

export default MainNav
