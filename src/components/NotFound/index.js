import {Link} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const NotFound = () => (
  <div className="not-found-bg">
    <Header />
    <div className="not-found-container">
      <img
        src="https://res.cloudinary.com/dmylnzu2b/image/upload/v1626109955/Kitchen%20App%20/erroring_1_hcnpmt.png"
        alt="NOT FOUND"
        className="not-found-img"
      />
      <h1>PAGE NOT FOUND</h1>
      <p className="not-found-para">
        were sorry the page you request could not found <br /> Please go back to
        homepage
      </p>
      <Link to="/">
        <button type="button" className="not-found-btn">
          Home Page
        </button>
      </Link>
    </div>
  </div>
)

export default NotFound
