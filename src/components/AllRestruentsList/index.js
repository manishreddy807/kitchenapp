import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {CgArrowLeftR, CgArrowRightR} from 'react-icons/cg'

import Cookies from 'js-cookie'

import RestaurantHeader from '../RestaurantHeader'

import Restaurant from '../Restaurant'
import './index.css'

const sortByOptions = [
  {
    optionId: 'HIGH',
    displayText: 'Highest',
  },
  {
    optionId: 'LOW',
    displayText: 'Lowest',
  },
]

class AllRestaurantSection extends Component {
  state = {
    restaurantList: [],
    offset: 0,
    activeOptionId: sortByOptions[1].optionId,
    isLoading: true,
  }

  componentDidMount() {
    this.getRestaurantsList()
  }

  onClickIncrease = () => {
    this.setState(
      prev => ({offset: prev.offset + 9}),
      this.getRestaurantsList(),
    )
  }

  onClickDecrease = () => {
    const {offset} = this.state
    if (offset <= 0) {
      this.setState({offset: 0}, this.getRestaurantsList())
    } else {
      this.setState(
        prev => ({offset: prev.offset - 9}),
        this.getRestaurantsList(),
      )
    }
  }

  getRestaurantsList = async () => {
    const {offset} = this.state
    this.setState({isLoading: true})

    const {activeOptionId} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=12&sort_by_rating= ${activeOptionId}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)

    if (response.ok === true) {
      const fetchedData = await response.json()

      const updatedData = fetchedData.restaurants.map(each => ({
        costForTwo: each.cost_for_two,
        cuisine: each.cuisine,
        groupByTime: each.group_by_time,
        hasOnlineDelivery: each.has_online_delivery,
        hasTableBooking: each.has_table_booking,
        id: each.id,
        imageUrl: each.image_url,
        isDeliveringNow: each.is_delivering_now,
        location: each.location,
        menuType: each.menu_type,
        name: each.name,
        opensAt: each.opens_at,
        userRating: each.user_rating,
      }))
      this.setState({
        restaurantList: updatedData,
        isLoading: false,
      })
    }
  }

  updateActiveOptionId = activeOptionId => {
    this.setState(
      {
        activeOptionId,
      },
      this.getRestaurantsList,
    )
  }

  renderRestaurantList = () => {
    const {restaurantList, activeOptionId} = this.state
    return (
      <>
        <RestaurantHeader
          activeOptionId={activeOptionId}
          sortByOptions={sortByOptions}
          updateActiveOptionId={this.updateActiveOptionId}
        />
        <hr className="header-line" />
        <ul className="restaurant-list">
          {restaurantList.map(eachRestaurant => (
            <Restaurant productData={eachRestaurant} key={eachRestaurant.id} />
          ))}
        </ul>
        <div className="next-page-container">
          <button type="button" onClick={this.onClickDecrease}>
            <CgArrowLeftR size={30} />
          </button>
          <p className="next-page">1 of 20</p>
          <button type="button" onClick={this.onClickIncrease}>
            <CgArrowRightR size={30} />
          </button>
        </div>
      </>
    )
  }

  renderLoader = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return isLoading ? this.renderLoader() : this.renderRestaurantList()
  }
}

export default AllRestaurantSection
