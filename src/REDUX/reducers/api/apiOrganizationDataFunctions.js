function Organizations(organizations, payload) {
  let orgObj = {}
  payload.forEach((org) => {
    if (!organizations[org.url]){
      orgObj[org.url] = org
    } else {
      orgObj[org.url] = {}
      Object.assign(orgObj[org.url], organizations[org.url], org)
    }
  })
  return orgObj
}

function Tournament(organizations, payload) {
  Object.assign(organizations[payload.url]||{}, payload)
  return organizations
}


export {Organizations, Tournament}
