import {REGISTER, LOGIN, LINK_ACCOUNT, LOGOUT} from '../../actions/UserAccountActions'
import {ReceiveRegister, FailRegister, ReceiveLogin, FailLogin} from '../../actions/APIactions/APIUserActions'
import { ajax } from 'rxjs/observable/dom/ajax';

const registerEpic = action$ =>
  action$.filter(action => action.type === REGISTER)
  .mergeMap(action => {
       return ajax.post('http://localhost:3200/api/register',action.payload)
        .map(response => {
          if (response.body.result === "Success") {
            return ReceiveRegister(response.body)
          } else {
            return FailRegister("Failure")
          }
        })
      }
    );

const loginEpic = action$ =>
  action$.filter(action => action.type === LOGIN)
  .mergeMap(action => {
    return ajax.post('http://localhost:3200/api/login', action.payload)
    .map(response => {
      if (response.body.result === "Success") {
        return ReceiveLogin(response.body)
      } else {
        return FailLogin("Failure")
      }
    })
  })




export {registerEpic, loginEpic}
