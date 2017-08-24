import {LOAD_ORGANIZATIONS, LOAD_TOURNAMENTS} from '../../actions/OrganizationActions'
import { Receive_Orgload, Fail_Orgload} from '../../actions/APIactions/APIOrganizationActions'
import { ajax } from 'rxjs/observable/dom/ajax';


const loadOrganizationEpic = action$ =>
  action$.filter(action => action.type == LOAD_ORGANIZATIONS)
  .mergeMap(action => {
    return ajax.get('http://localhost:3200/api/organizations')
    .map(response => {
      if (response.body.message == "Success") {
        return Receive_Orgload(response.body.organizations)
      } else {
        return Fail_Orgload(response.body.message)
      }
    })
  })
