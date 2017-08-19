import {REGISTER, LOGIN, LINK_ACCOUNT, LOGOUT} from '../../actions/UserAccountActions'
import { ajax } from 'rxjs/observable/dom/ajax';

const registerEpic = action$ =>
  action$.filter(action => action.type === REGISTER)
  .mergeMap(action =>
      ajax.ajaxPost('http://localhost:3200/api/register',action.payload)
        .map(response => fetchUserFulfilled(response))
    );

export userEpic
