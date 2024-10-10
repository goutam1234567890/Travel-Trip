import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    showErrorMsg: false,
    showPassword: false,
  }

  onSuccessLogin = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  togglePasswordVisibility = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  onFailureLogin = errorMsg => {
    this.setState({errorMsg, showErrorMsg: true})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const LoginApiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(LoginApiUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSuccessLogin(data.jwt_token)
    } else {
      this.onFailureLogin(data.error_msg)
    }
  }

  onChangeUsername = event => this.setState({username: event.target.value})

  onChangePassword = event => this.setState({password: event.target.value})

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <div className="login-username-container">
        <label htmlFor="username" className="login-username-label">
          Username
        </label>
        <br />
        <input
          type="text"
          id="username"
          className="login-username-input"
          value={username}
          placeholder="Username"
          onChange={this.onChangeUsername}
        />
      </div>
    )
  }

  renderPasswordField = () => {
    const {password, showErrorMsg, errorMsg, showPassword} = this.state
    return (
      <div className="login-password-container">
        <label htmlFor="password" className="login-password-label">
          PASSWORD
        </label>
        <br />
        <div className="input-container">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            className="login-password-input"
            value={password}
            onChange={this.onChangePassword}
            placeholder="Password"
          />
          <button
            type="button"
            onClick={this.togglePasswordVisibility}
            className="eye-button"
            data-testid="show-password"
          >
            {showPassword ? (
              <img
                src="https://res.cloudinary.com/dqhagljvz/image/upload/v1728022114/eye-slash_ae4pia.png"
                alt="eye"
              />
            ) : (
              <img
                src="https://res.cloudinary.com/dqhagljvz/image/upload/v1728022078/eye_as3xy8.png"
                alt="eyeSlash"
              />
            )}
          </button>
        </div>

        {showErrorMsg && <p className="login-error-msg">{errorMsg}</p>}
      </div>
    )
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div>
        <div className="login-container">
          <form onSubmit={this.onSubmitForm} className="login-form">
            <h1 className="login-travel-trip-logo">Travel Trip</h1>
            {this.renderUsernameField()}
            {this.renderPasswordField()}
            <div className="login-button-container">
              <button type="submit" className="login-submit-button">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
