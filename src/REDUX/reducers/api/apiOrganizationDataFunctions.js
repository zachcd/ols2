function Organizations(organizations, payload) {
  return payload
}

function Tournament(organizations, payload) {
  organizations[payload.organization].tournaments = payload.tournaments
  return organizations
}


export {Organizations, Tournament}
