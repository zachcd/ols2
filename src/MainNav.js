import { connect } from 'react-redux'



export default const MainNav = (openLogin, openRegister) => {
  if(loggedIn) {
    return (
      <div>
        <Link
      </div>
    )
  } else {
    return(
      <div>

      </div>
    )
  }


}


const mapStateToProps = state => {
  return {
    loggedIn: state.user
  }
}
