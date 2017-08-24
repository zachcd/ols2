import {LOAD_ORGANIZATIONS, LOAD_TOURNAMENTS} from '../../actions/OrganizationActions'
import { Receive_Orgload, Fail_Orgload, Receive_TournamentLoad, Fail_TournamentLoad} from '../../actions/APIactions/APIOrganizationActions'
import { ajax } from 'rxjs/observable/dom/ajax';


const loadOrganizationEpic = action$ =>
  action$.filter(action => action.type == LOAD_ORGANIZATIONS)
  .mergeMap(action => {
    return ajax.get('http://localhost:3200/api/organizations')
    .map(response => {
      if (response.body.message == "Success") {
        return Receive_Orgload(response.body.data)
      } else {
        return Fail_Orgload(response.body.message)
      }
    })
  })

  export loadOrganizationEpic

const loadTournamentsEpic = action$ =>
  action$.filter(action => action.type == LOAD_TOURNAMENTS)
  .mergeMap(action => {
    return ajax.get('http://localhost:3200/api/' + action.payload.organization)
    .map(response => {
      if (response.body.message == "Success") {
        return Receive_TournamentLoad(action.payload.organization, response.body.data)
      } else {
        return Fail_TournamentLoad(response.body.message)
      }
    })
  })

  export loadTournamentsEpic
