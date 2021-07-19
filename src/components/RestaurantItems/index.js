import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiFillStar} from 'react-icons/ai'
import {BiRupee} from 'react-icons/bi'

import Header from '../Header'
import Items from '../Items'
import './index.css'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class RestaurantItems extends Component {
  state = {items: {}, isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/restaurants-list/${id}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)
    const updatedData = {
      costForTwo: data.cost_for_two,
      cuisine: data.cuisine,
      foodItems: data.food_items,
      id: data.id,
      imageUrl: data.image_url,
      itemsCount: data.items_count,
      location: data.location,
      name: data.name,
      opensAt: data.opens_at,
      rating: data.rating,
      reviewsCount: data.reviews_count,
    }
    this.setState({items: updatedData, isLoading: false})
  }

  renderRestaurantItems = () => {
    const {items} = this.state

    const {
      name,
      imageUrl,
      location,
      cuisine,
      rating,
      reviewsCount,
      costForTwo,
      foodItems,
    } = items

    return (
      <>
        <Header />
        <div className="details-container">
          <div>
            <img src={imageUrl} alt={name} className="details-image" />
          </div>
          <div className="detail-container">
            <h1 className="restaurant-name">{name}</h1>
            <p className="restaurant-cuisine">{cuisine}</p>
            <p className="restaurant-location">{location}</p>
            <div className="rating-container">
              <div className="rating-details">
                <div className="rating-de">
                  <AiFillStar className="rating-star" />
                  <p className="all-rtg">{rating}</p>
                </div>
                <p className="all-details-rating">{reviewsCount}+ratings</p>
              </div>
              <hr className="all-hr" />
              <div>
                <div className="rating-de">
                  <BiRupee className="rating-star" />
                  <p className="all-rtg">{costForTwo}</p>
                </div>

                <p className="all-details-rating">Cost for two</p>
              </div>
            </div>
          </div>
        </div>
        <ul className="items-list">
          {foodItems.map(each => (
            <Items foodItem={each} key={each.id} />
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="render-restaurant-items">
        {isLoading ? (
          <Loader type="TailSpin" color="#00Bfff" height={50} width={50} />
        ) : (
          this.renderRestaurantItems()
        )}
      </div>
    )
  }
}

export default RestaurantItems
