import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import './index.css'
import {AppContext} from '../../context/AppProvider'

const FooterComponent = props => (
  <AppContext.Consumer>
    {({resetState}) => {
      const {history} = props

      const handleNavigation = path => event => {
        event.preventDefault() // Prevent default navigation behavior
        resetState() // Reset state
        history.push(path) // Navigate programmatically
      }

      const onClickLogout = () => {
        Cookies.remove('jwt_token')
        history.replace('/login') // Navigate to login page
      }

      return (
        <div className="navbar-container">
          <button
            type="button"
            className="nav-button"
            onClick={handleNavigation('/')}
            aria-label="Go to home"
          >
            <img
              src="https://res.cloudinary.com/dqhagljvz/image/upload/v1726493502/Frame_29_1_wxqo3f.png"
              alt="home"
            />
          </button>
          <button
            type="button"
            className="nav-button"
            onClick={handleNavigation('/my-trips')}
            aria-label="View my trips"
          >
            <img
              src="https://res.cloudinary.com/dqhagljvz/image/upload/v1724763705/Frame_33_zhtbgn.png"
              alt="my-trips"
            />
          </button>
          <button
            type="button"
            className="nav-button"
            onClick={() => {
              onClickLogout() // Call the logout function
              resetState() // Reset state on logout
            }}
            aria-label="Logout"
          >
            <img
              src="https://res.cloudinary.com/dqhagljvz/image/upload/v1724763832/Frame_35_xeiwft.png"
              alt="logout"
            />
          </button>
        </div>
      )
    }}
  </AppContext.Consumer>
)

export default withRouter(FooterComponent)
