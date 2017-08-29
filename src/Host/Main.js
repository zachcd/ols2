import React, { Component } from 'react';

import {connect} from 'react-redux'
import { Load_Organizations } from '../REDUX/actions/OrganizationActions'
// if nothing in Organization is opened
  //display Upcoming and Teams as central medium options
// if something in Organization is opened
  //move nav to top

class Main extends Component {

  constructor(props) {
    super(props);
    this.props.load()
  }

  render (){
    return(<div>{GenerateOrgList(this.props.organizations)}</div>)
  }
}

const mapStateToProps = state => {
  return {
    organizations: state.organizations
  }
}

const mapDispatchToProps = dispatch => {
  return {
    load: () => {
      dispatch(Load_Organizations())
    }
  }
}

function GenerateOrgList(orgArray){
  if (Array.isArray(orgArray)) {
    console.log(orgArray)
    return orgArray.map((organization) => {
      return <li key={organization.name}><h4>{organization.name}</h4><div className="description">{organization.description}</div></li>
    })
  } else {
    return <p>Loading</p>
  }
}
const LinkedMain = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)

export default LinkedMain
