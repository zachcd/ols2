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
    return(<div>{this.props.organizations}</div>)
  }
}

const mapStateToProps = state => {
  return {
    organizations: GenerateOrgList(Object.entries(state.organizations))
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
  orgArray.map((organization) => {
    return <li><h4>{organization[0]}</h4><div className="description">{organization[1].description}</div></li>
  })
}
const LinkedMain = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)

export default LinkedMain
