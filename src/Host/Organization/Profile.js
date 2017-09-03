import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { Load_Tournaments } from '../../REDUX/actions/OrganizationActions'

// if nothing in Organization is opened
  //display Tournaments
// if something in Organization is opened
  //move nav to top

  class OrgProfile extends Component {
    render() {
      return (
        <div className="Organization" id="{this.props.organization.name}">
          {Tournaments(this.props.organization.url, this.props.organization.tournaments)}

        </div>
      )
    }
  }

  const mapStateToProps = (state, ownProps) => {
    return {
      organization: state.organizations[ownProps.params.org]
    }
  }

  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      load: () => {
        dispatch(Load_Tournaments(ownProps.params.org))
      }
    }
  }

  const Tournaments = (organizationUrl, tournamentsList) => {
    return tournamentsList.map((tournament)=> {
      return <div><h3><Link to={organizationUrl + "/" + tournament.url}>{tournament.name}</Link></h3></div>
    })
  }

  const LinkedProfile = connect(
    mapStateToProps,
    mapDispatchToProps
  )(OrgProfile)

export default LinkedProfile
