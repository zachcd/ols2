import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable';
import user from './reducers/user'
import {registerEpic} from './reducers/api/userEpic'

const olsApp = combineReducers({user})

const olsEpics = combineEpics(registerEpic)
export default olsApp

export olsEpics
