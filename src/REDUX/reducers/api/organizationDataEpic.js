import {LOAD_ORGANIZATIONS, LOAD_TOURNAMENTS} from '../../actions/OrganizationActions'
import { Receive_Orgload, Fail_Orgload, Receive_TournamentLoad, Fail_TournamentLoad} from '../../actions/APIactions/APIOrganizationActions'
import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs'


const loadOrganizationEpic = action$ =>
  action$.filter(action => action.type === LOAD_ORGANIZATIONS)
  .mergeMap(action => {
    return ajax.get('http://localhost:3200/api/organizations')
      .map(ajx => {
        if (ajx.response.message === "Success") {
          return Receive_Orgload(ajx.response.data)
        } else {
          return Fail_Orgload(ajx.response.message)
        }
      })
      .catch(error =>  {
        return Observable.of(Fail_Orgload(error))
      })
  })



const loadTournamentsEpic = action$ =>
  action$.filter(action => action.type === LOAD_TOURNAMENTS)
  .mergeMap(action => {
    return ajax.get('http://localhost:3200/api/organizations/' + action.payload.organization)
    .map(ajx => {
      if (ajx.response.message ===  "Success") {
        return Receive_TournamentLoad(action.payload.organization, ajx.response.data)
      } else {
        return Fail_TournamentLoad(ajx.response.message)
      }
    })
    .catch(error =>  {
      return Observable.of(Fail_TournamentLoad(error))
    })
  })

  export {loadOrganizationEpic, loadTournamentsEpic}
