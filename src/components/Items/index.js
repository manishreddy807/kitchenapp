import {Component} from 'react'
import {AiFillStar} from 'react-icons/ai'
import {BiRupee} from 'react-icons/bi'

import Counter from '../Counter'
import './index.css'

class Items extends Component {
  state = {
    addItems: true,
  }

  onGenerate = () => {
    this.setState({addItems: false})
  }

  render() {
    const {addItems} = this.state
    const {foodItem} = this.props
    const updatedFoodItem = {
      cost: foodItem.cost,
      foodType: foodItem.food_type,
      id: foodItem.id,
      imageUrl: foodItem.image_url,
      name: foodItem.name,
      rating: foodItem.rating,
    }
    localStorage.setItem('foodItem', JSON.stringify(updatedFoodItem))

    return (
      <li className="food-container">
        <div>
          <img
            src={updatedFoodItem.imageUrl}
            alt={updatedFoodItem.name}
            className="food-img"
          />
        </div>
        <div className="food-details-container">
          <h1 className="food-name">{updatedFoodItem.name}</h1>
          <div className="cst-card">
            <BiRupee />
            <p className="food-cost">{updatedFoodItem.cost}</p>
          </div>
          <div className="cst-card">
            <AiFillStar className="star" />
            <p>{updatedFoodItem.rating}</p>
          </div>
          {addItems ? (
            <button type="button" onClick={this.onGenerate} className="btn-add">
              Add
            </button>
          ) : (
            <Counter />
          )}
        </div>
      </li>
    )
  }
}

export default Items
