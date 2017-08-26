export function Organizations(organizations, payload) {
  return Object.assign({}, organizations)
}

export function Tournament(organizations, payload) {
  organizations[payload.organization].tournaments = payload.tournaments
  return organizations
}
