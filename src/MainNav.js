import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Logout } from './REDUX/actions/UserAccountActions'
import './MainNav.css'


const Nav = (props) => {
  let orgLink
  if (props.organization) {
    orgLink = <Link to={"/"+ props.organization.url}>{props.organization.name}</Link>
  } else {
    orgLink = null
  }
  if(props.loggedIn) {
    return (
      <div className="nav">
        <Link to="/" id="nav1">Organizations</Link>
        {orgLink}
        <div onClick={() => props.openCards()} id="nav2">Cards</div>
        <div onClick={() => props.logout()}id="nav3">Logout</div>
      </div>
    )
  } else {
    return(
      <div className="nav">
      <Link to="/" id="nav1">Organizations</Link>
      {orgLink}
      <div onClick={() => props.openLogin()} id="nav2">Login</div>
      <div onClick={() => props.openRegister()} id="nav3">Register</div>
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
      dispatch(Logout())
    }
  }
}

const MainNav = connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav)

export default MainNav
