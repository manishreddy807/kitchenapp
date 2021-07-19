import {BsFilterRight} from 'react-icons/bs'

import './index.css'

const RestaurantHeader = props => {
  const {sortByOptions, activeOptionId, updateActiveOptionId} = props

  const onChangeSortBy = event => {
    updateActiveOptionId(event.target.value)
  }
  return (
    <div className="restaurant-header">
      <div className="popular-heading-container">
        <h1 className="popular-name">Popular Restaurants</h1>
        <p className="description">
          Select your favourite restaurant special dish and make your day
          happy...
        </p>
      </div>
      <div className="sort-container">
        <BsFilterRight />
        <h1 className="sort-by">Sort By</h1>
        <select
          className="sort-by-select"
          value={activeOptionId}
          onChange={onChangeSortBy}
        >
          {sortByOptions.map(eachOption => (
            <option
              key={eachOption.optionId}
              value={eachOption.optionId}
              className="select-option"
            >
              {eachOption.displayText}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default RestaurantHeader
