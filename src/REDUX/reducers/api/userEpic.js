import {REGISTER, LOGIN, LINK_ACCOUNT, LOGOUT} from '../../actions/UserAccountActions'
import {ReceiveRegister, FailRegister} from '../../actions/APIactions/APIUserActions'
import { ajax } from 'rxjs/observable/dom/ajax';

const registerEpic = action$ =>
  action$.filter(action => action.type === REGISTER)
  .mergeMap(action => {
      console.log(action)
      return ajax.post('http://localhost:3200/api/register',action.payload)
        .map(response => {
          if (response.body == "Success") {
            return ReceiveRegister(action.payload)
          } else {
            return FailRegister("Failure")
          }
        })
      }
    );

export {registerEpic}
