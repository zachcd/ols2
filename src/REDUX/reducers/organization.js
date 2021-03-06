import { CREATE_ORGANIZATION, ADD_ADMIN, REMOVE_ADMIN, LOAD_ORGANIZATIONS, LOAD_TOURNAMENTS } from '../actions/OrganizationActions'
import * as apiActions from '../actions/APIactions/APIOrganizationActions'
import * as api from './api/apiOrganizationDataFunctions'

export default function organizations(state={}, action) {
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
      return Object.assign({}, state, SetLoadingStatus(state[action.payload.organization]|| {})
    )
    case apiActions.RECEIVE_ORGLOAD:
      return api.Organizations(state, action.payload)
    case apiActions.FAIL_ORGLOAD:
      return Object.assign({}, state, {status: action.payload})
    case apiActions.RECEIVE_TOURNAMENTLOAD:
      return Object.assign({}, state, api.Tournament(state, action.payload)
    )
    case apiActions.FAIL_TOURNAMENTLOAD:
      return Object.assign({}, state, {status: action.payload})
    default:
      return state
  }
}

function CreateOrg(organizations, payload) {
  return Object.assign({}, organizations, {[payload.name]: {description: payload.description, status: "Pending"}})
}

function AddAdmin(organization) {
  organization.status = "AwaitingServer"
  return organization
}

function RemoveAdmin(organization) {
  organization.status = "AwaitingServer"
  return organization
}

function SetLoadingStatus(organization) {
  Object.assign(organization, {tournament: "Loading"})
  return organizations
}
