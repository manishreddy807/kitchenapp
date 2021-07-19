import {Link} from 'react-router-dom'

import {AiFillStar} from 'react-icons/ai'

import './index.css'

const Restaurant = props => {
  const {productData} = props
  const {imageUrl, name, id, userRating, cuisine} = productData
  const userRated = {
    totalReviews: userRating.total_reviews,
  }
  const {rating} = userRating

  return (
    <Link to={`/restaurants-list/${id}`} className="link-style">
      <li className="restaurant-item">
        <img src={imageUrl} alt={name} className="restaurant-image" />
        <div>
          <h1 className="name">{name}</h1>
          <p className="cuisine">{cuisine}</p>
          <div className="star-container">
            <AiFillStar className="star" />
            <p className="rating">{rating}</p>
            <p className="user-rating">({userRated.totalReviews} rating)</p>
          </div>
        </div>
      </li>
    </Link>
  )
}
export default Restaurant
