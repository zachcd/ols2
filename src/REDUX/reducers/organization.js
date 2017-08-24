import { CREATE_ORGANIZATION, ADD_ADMIN, REMOVE_ADMIN, LOAD_ORGANIZATIONS, LOAD_TOURNAMENTS } from '../actions/OrganizationActions'
import * as apiActions from '../actions/APIactions/APIOrganizationActions'
import api from './api/apiOrganizationDataFunctions'

funciton organizations(state={}, action) {
  switch(action.type) {
    case CREATE_ORGANIZATION:
      return Object.assign({}, state, CreateOrg(state || {}, action.payload)
        )
    case ADD_ADMIN:
      return Object.assign({}, state, {[action.payload.organization]: AddAdmin(state[action.payload.organization] || {})}
        )
    case REMOVE_ADMIN:
      return Object.assign({}, state, {[action.payload.organization]: RemoveAdmin(state[action.payload.organization] || {})}
        )
    case LOAD_ORGANIZATIONS:
      return Object.assign({}, state, { status: "Loading"}
        )
    case LOAD_TOURNAMENTS:
      return Object.assign({}, state, SetLoadingStatus(state, action.payload.organization)
    )
    case apiActions.RECEIVE_ORGLOAD:
      return Object.assign({}, state, api.Organizations(state, action.payload))
    case apiActions.FAIL_ORGLOAD:

    case apiActions.RECEIVE_TOURNAMENTLOAD:

    case apiActions.FAIL_TOURNAMENTLOAD:

  }
}

function CreateOrg(organizations, payload) {
  return Object.assign({}, organizations, {[payload.name]: {description: payload.description}})
}

function AddAdmin(organization) {
  organization.status = "AwaitingServer"
  return organization
}

function RemoveAdmin(organization) {
  organization.status = "AwaitingServer"
  return organization
}

function SetLoadingStatus(organizations, organization) {
    return Object.assign({}, organizations, {[organization]: {tournament = "Loading"}} ) // don't know if the deep copy here will work as intended, needs testing
}
