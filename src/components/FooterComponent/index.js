import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import './index.css'
import {RiSuitcase2Line} from 'react-icons/ri'
import {BiLogOut} from 'react-icons/bi'
import {FiHome} from 'react-icons/fi'
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
            aria-labelledby="homeLabel"
          >
            <FiHome />
          </button>
          <button
            type="button"
            className="nav-button"
            onClick={handleNavigation('/my-trips')}
            aria-labelledby="tripsLabel"
          >
            <RiSuitcase2Line />
          </button>
          <button
            type="button"
            className="nav-button"
            onClick={() => {
              onClickLogout()
              resetState()
            }}
            aria-labelledby="logoutLabel"
          >
            <BiLogOut />
          </button>
        </div>
      )
    }}
  </AppContext.Consumer>
)

export default withRouter(FooterComponent)
