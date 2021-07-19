import {
  FaPinterestP,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'

import './index.css'

const FooterSection = () => (
  <div className="footer-section">
    <h1 className="footer-title">Tasty Kitchens</h1>
    <p className="footer-description">
      The only thing were serious about is food
    </p>
    <div className="social-platforms">
      <FaPinterestP className="pinterset" />
      <FaInstagram className="instagram" />
      <FaTwitter className="twitter" />
      <FaFacebookSquare className="facebook" />
    </div>
  </div>
)

export default FooterSection
