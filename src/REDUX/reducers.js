import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable';
import user from './reducers/user'
import organizations from './reducers/organization'
import {registerEpic, loginEpic} from './reducers/api/userEpic'
import {loadOrganizationEpic, loadTournamentsEpic} from './reducers/api/organizationDataEpic'

const olsApp = combineReducers({user, organizations})

export const olsEpics = combineEpics(registerEpic, loadOrganizationEpic, loginEpic, loadTournamentsEpic)
export default olsApp
