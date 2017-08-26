import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable';
import user from './reducers/user'
import organizations from './reducers/organization'
import {registerEpic} from './reducers/api/userEpic'
import {loadOrganizationEpic} from './reducers/api/organizationDataEpic'

const olsApp = combineReducers({user, organizations})

export const olsEpics = combineEpics(registerEpic, loadOrganizationEpic)
export default olsApp
