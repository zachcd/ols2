const initialState = {
  user: null,
  cards: null,
  organization: null,
  tournament: null
}

export function initialStateReducer(state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }

  // For now, don't handle any actions
  // and just return the state given to us.
  return state
}
