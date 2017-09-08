import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {Load_Tournaments} from '../../REDUX/actions/OrganizationActions'
import {adminNav} from './Admin/nav'
import {CreateTournament} from './Admin/CreateTournament'
import {EditOrganization} from './Admin/EditOrganization'

// if nothing in Organization is opened
//display Tournaments
// if something in Organization is opened
//move nav to top

const Tournaments = (organizationUrl, tournamentsList) => {
  if (Array.isArray(tournamentsList)) {
    return tournamentsList.map((tournament) => {
      return <div>
        <h3>
          <Link to={organizationUrl + "/" + tournament.url}>{tournament.name}</Link>
        </h3>
      </div>
    })
  } else if (tournamentsList === "Loading") {
    return <div>Loading</div>
  } else {
    return <div>There are no tournaments for this organization</div>
  }
}

class OrgProfile extends Component {

  componentWillMount() {
    this.props.load()
  }

  render() {
    return (
      <div className="Organization" id={this.props.organization.url}>
        <h2>{this.props.organization.name}</h2>
        {(this.props.user && typeof this.props.organization.url !== "undefined" && typeof this.props.user.admin[this.props.organization.url] !== "undefined") && <adminNav url={this.props.organization.url}></adminNav>}
        <Route path={this.props.match.url + '/'} render={() => Tournaments(this.props.organization.url, this.props.organization.tournaments)}/>
        <Route path={this.props.match.url + '/create'} render={() => <CreateTournament organization={this.props.organization}/>}/>
        <Route path={this.props.match.url + '/edit'} render={() => <EditOrganization organization={this.props.organization}/>}/>

      </div>
    )
  }
}

//REDUX

const mapStateToProps = (state, ownProps) => {
  return {
    organization: state.organizations[ownProps.match.params.org] || {},
    user: state.user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    load: () => {
      dispatch(Load_Tournaments(ownProps.match.params.org))
    }
  }
}

const LinkedProfile = connect(mapStateToProps, mapDispatchToProps)(OrgProfile)

export default LinkedProfile
