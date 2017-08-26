export const CREATE_ORGANIZATION = "CREATE_ORGANIZATION"
export const ADD_ADMIN = "ADD_ADMIN"
export const REMOVE_ADMIN = "REMOVE_ADMIN"
export const LOAD_ORGANIZATIONS = "LOAD_ORGANIZATIONS"
export const LOAD_TOURNAMENTS = "LOAD_TOURNAMENTS"

export function Create_Organization (organizationData) {
  return {
    type: CREATE_ORGANIZATION,
    payload: {
      name: organizationData.name,
      description: organizationData.description
    }
  }
}

export function Add_Admin (organization, username) {
  return {
    type: ADD_ADMIN,
    payload: {
      organization: organization,
      user: username
    }
  }
}

export function Load_Organizations() {
  return {
    type: LOAD_ORGANIZATIONS,
    payload: {}
  }
}
export function Load_Tournaments(organization_name) {
  return {
    type: LOAD_TOURNAMENTS,
    payload: {
      organization: organization_name
    }
  }
}
