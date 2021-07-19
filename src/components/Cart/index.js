import {Link} from 'react-router-dom'

import Header from '../Header'

import FooterSection from '../FooterSection'

import './index.css'

const Cart = () => {
  const getCountvalue = localStorage.getItem('count')
  function noItemCard() {
    return (
      <>
        <Header />
        <div className="empty-card">
          <img
            src="https://res.cloudinary.com/dmylnzu2b/image/upload/v1626363295/Kitchen%20App%20/OBJECTS_wsit4i.png"
            alt="no-items"
            className="no-items-img"
          />
          <h1 className="no-orders-name">No Orders Yet!</h1>
          <p className="no-orders-para">
            Your Cart is empty. Add Some thing from the Menu.
          </p>
          <Link to="/">
            <button type="button" className="no-ordders-btn">
              Order Now
            </button>
          </Link>
        </div>
        <FooterSection />
      </>
    )
  }
  function renderCart() {
    const getFoodItem = localStorage.getItem('foodItem')

    const parsedFoodItem = JSON.parse(getFoodItem)
    const price = getCountvalue * parsedFoodItem.cost
    return (
      <>
        <Header />
        <div className="item-bg-container">
          <div className="menu-card">
            <h1>Item</h1>
            <h1 className="quantity">Quantity</h1>
            <h1>price</h1>
          </div>
          <div className="food-menu">
            <div className="food-card">
              <img
                src={parsedFoodItem.imageUrl}
                alt={parsedFoodItem.name}
                className="cart-img"
              />
              <p>{parsedFoodItem.name}</p>
            </div>
            <p className="quantity-1">{getCountvalue}</p>
            <p>{price}</p>
          </div>
          <hr />
          <div className="total-card">
            <p>Order total:</p>
            <p className="price">{price}</p>
          </div>
          <div className="confirm-container">
            <Link to="/cart/payment-success">
              <button type="button" className="confirm-btn">
                Confirm Order
              </button>
            </Link>
          </div>
        </div>
        <FooterSection />
      </>
    )
  }
  return <>{getCountvalue > 0 ? renderCart() : noItemCard()}</>
}

export default Cart
