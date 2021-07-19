import {Link} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const PaymentSuccess = () => (
  <>
    <Header />
    <div className="bg-payment">
      <div className="payment-container">
        <img
          src="https://res.cloudinary.com/dmylnzu2b/image/upload/v1626366571/Kitchen%20App%20/Vector_1_qkbote.png"
          alt="payment"
          className="payment-img"
        />
        <h1 className="payment-heading">Payment Successful</h1>
        <p className="payment-para">
          Thank you for ordering <br />
          Your payment is successfully completed
        </p>
        <Link to="/">
          <button type="button" className="payment-btn">
            Go To Home Page
          </button>
        </Link>
      </div>
    </div>
  </>
)
export default PaymentSuccess
