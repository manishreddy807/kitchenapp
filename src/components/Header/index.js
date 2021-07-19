import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {Navbar, Nav, Container} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'

import './index.css'

const Header = props => {
  const onClickSignOut = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <Navbar className="nav-header" expand="lg">
      <Container>
        <div className="logo-and-title-container">
          <img
            src="https://res.cloudinary.com/dmylnzu2b/image/upload/v1626106587/Kitchen%20App%20/kitchenLogo_cv5rek.jpg"
            alt="logo"
            className="logo"
          />
          <h1 className="logo-title">Tasty Kitchens</h1>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">
                <Link to="/">
                  <li className="nav-link-home">Home</li>
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="Cart">
                  <li className="nav-link-cart">Cart</li>
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <button
                  type="button"
                  onClick={onClickSignOut}
                  className="header-button"
                >
                  Logout
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  )
}
export default withRouter(Header)
