export const SEND_ORGLOAD = "SEND_ORGLOAD"

export const RECEIVE_ORGLOAD = "RECEIVE_ORGLAD"
export const FAIL_ORGLOAD = "FAIL_ORGLOAD"


export function Send_Orgload () {
  return {
    type: SEND_ORGLOAD,
    payload: {}
  }
}

export function Receive_Orgload (organizations) {
  return {
    type: RECEIVE_ORGLOAD,
    payload: organizations
  }
}

export function Fail_Orgload (failure) {
  return {
    type: FAIL_ORGLOAD,
    payload: failure
  }
}
