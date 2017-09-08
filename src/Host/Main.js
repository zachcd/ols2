import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Load_Organizations} from '../REDUX/actions/OrganizationActions'

class Main extends Component {
  componentWillMount() {
    if (!(this.props.organizations.status && this.props.organizations.status === "Loading")) {
      this.props.load()
    }
  }

  render() {
    return (
      <div>{GenerateOrgList(this.props.organizations)}</div>
    )
  }
}

function GenerateOrgList(orgList) {
  if (orgList && orgList.status !== "Loading") {
    var orgArray = Object.values(orgList)
    if (Array.isArray(orgArray)) {
      return orgArray.map((organization) => {
        return <li key={organization.name}>
          <Link to={organization.url} id="nav1">
            <h4>{organization.name}</h4>
          </Link>
          <div className="description">{organization.description}</div>
        </li>
      })
    } else {
      return <p>Loading</p>
    }
  } else {
    return <p>Loading</p>
  }
}

//REDUX

const mapStateToProps = state => {
  return {organizations: state.organizations}
}

const mapDispatchToProps = dispatch => {
  return {
    load: () => {
      dispatch(Load_Organizations())
    }
  }
}

const LinkedMain = connect(mapStateToProps, mapDispatchToProps)(Main)

export default LinkedMain
