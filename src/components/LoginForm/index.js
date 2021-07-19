import {Component} from 'react'
import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showLoginError: false,
    errorMsg: '',
  }

  onLoginSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})

    const {history} = this.props
    history.replace('/')
  }

  onLoginFailure = errorMsg => {
    this.setState({
      showLoginError: true,
      errorMsg,
    })
  }

  onChangeUSerName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onLoginSuccess(data.jwt_token)
    } else {
      this.onLoginFailure(data.error_msg)
    }
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderUserNameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUSerName}
        />
      </>
    )
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    const {showLoginError, errorMsg} = this.state
    return (
      <div className="login-form-container">
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <img
            src="https://res.cloudinary.com/dmylnzu2b/image/upload/v1626106587/Kitchen%20App%20/kitchenLogo_cv5rek.jpg"
            alt="kitchen"
            className="kitchen-logo"
          />
          <img
            src="https://res.cloudinary.com/dmylnzu2b/image/upload/v1626201176/Kitchen%20App%20/Rectangle_1457_luftlr.png"
            alt="kitchen-mobile"
            className="kitchen-mobile-image"
          />
          <h1 className="title">Tasty Kitchen</h1>
          <h1 className="sign-in">Sign In</h1>
          <div className="input-container">{this.renderUserNameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="button">
            Sign In
          </button>
          {showLoginError && <p className="error-message">*{errorMsg}</p>}
        </form>
        <img
          src="https://res.cloudinary.com/dmylnzu2b/image/upload/v1626190844/Kitchen%20App%20/Rectangle_1456_eziaju.jpg"
          alt="kitchen"
          className="login-image"
        />
      </div>
    )
  }
}

export default LoginForm
