import { CREATE_ORGANIZATION, ADD_ADMIN, REMOVE_ADMIN, LOAD_ORGANIZATIONS, LOAD_TOURNAMENTS } from '../actions/OrganizationActions'
import * as apiActions from '../actions/APIactions/APIOrganizationActions'
import api from './api/apiOrganizationDataFunctions'

funciton organizations(state={}, action) {
  switch(action.type) {
    case CREATE_ORGANIZATION:
      return Object.assign({}, state, {
        organizations: Create(state.organizations || {}, action.payload)
      })
    case ADD_ADMIN:
      return Object.assign({}, state, {
        organizations: AddAdmin(state.organizations || {}, action.payload)
      })
  }
}
