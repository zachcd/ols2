import {REGISTER, LOGIN, LINK_ACCOUNT} from '../../actions/UserAccountActions'
import {ReceiveRegister, FailRegister, ReceiveLogin, FailLogin} from '../../actions/APIactions/APIUserActions'
import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs'

const registerEpic = action$ =>
  action$.filter(action => action.type === REGISTER)
  .mergeMap(action => {
       return ajax.post('http://localhost:3200/api/register',action.payload)
        .map(ajx => {
          if (ajx.response.message === "Success") {
            return ReceiveRegister(ajx.response)
          } else {
            return FailRegister("Failure")
          }
        })
        .catch(error =>  {
          return Observable.of(FailRegister(error))
        })
      }
    );

const loginEpic = action$ =>
  action$.filter(action => action.type === LOGIN)
  .mergeMap(action => {
    return ajax.post('http://localhost:3200/api/login', action.payload)
    .map(ajx => {
      console.log(ajx)
      if (ajx.response.message === "Success") {
        return ReceiveLogin(ajx.response)
      } else {
        return FailLogin("Failure")
      }
    })
    .catch(error =>  {
      return Observable.of(FailLogin(error))
    })
  })




export {registerEpic, loginEpic}
