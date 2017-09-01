import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { Load_Tournaments } from '../REDUX/actions/OrganizationActions'

// if nothing in Organization is opened
  //display Tournaments
// if something in Organization is opened
  //move nav to top

  class OrgProfile extends Component {
    render() {
      return (
        <div className="Organization" id="{this.props.org}">
          {Tournaments(this.props.organization.tournaments)}

        </div>
      )
    }
  }

  const mapStateToProps = (state, ownProps) => {
    return {
      organization: state.organizations[ownProps.params.organization]
    }
  }

  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      load: () => {
        dispatch(Load_Tournament)
      }
    }
  }

  const LinkedProfile = connect(
    mapStateToProps,
    mapDispatchToProps
  )(OrgProfile)

export default LinkedProfile
