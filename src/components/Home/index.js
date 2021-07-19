import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import Header from '../Header'
import App from '../HomeCoursel'
import FooterSection from '../FooterSection'
import AllRestaurantSection from '../AllRestruentsList'
import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')

  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <div className="home-container">
      <Header />
      <App />
      <AllRestaurantSection />
      <FooterSection />
    </div>
  )
}

export default Home
