import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <nav className="nav-containers">
      <div className="nav-container">
        <Link to="/" className="Travel-trip-logo">
          Travel Trip
        </Link>
        <ul className="list-item">
          <li>
            <Link to="/" className="Home-name">
              Home
            </Link>
          </li>
          <li>
            <Link to="/my-trips" className="my-trips">
              My Trips
            </Link>
          </li>
        </ul>
        <button className="logout-button" type="button" onClick={onClickLogout}>
          Logout
        </button>
      </div>
    </nav>
  )
}

export default withRouter(Header)
