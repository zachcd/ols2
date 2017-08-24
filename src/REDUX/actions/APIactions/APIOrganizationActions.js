export const RECEIVE_ORGLOAD = "RECEIVE_ORGLAD"
export const FAIL_ORGLOAD = "FAIL_ORGLOAD"


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

export const RECEIVE_TOURNAMENTLOAD = "RECEIVE_TOURNAMENTLOAD"
export const FAIL_TOURNAMENTLOAD = "FAIL_TOURNAMENTLOAD"

export function Receive_TournamentLoad (organization, tournaments) {
  return {
    type: RECEIVE_TOURNAMENTLOAD,
    payload: {
      organization: organization,
      tournaments: tournaments
    }
  }
}

export function Fail_TournamentLoad (failure) {
  return {
    type: FAIL_TOURNAMENTLOAD,
    payload: failure
  }
}
