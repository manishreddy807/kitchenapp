import {Component} from 'react'
import Slider from 'react-slick'

import './index.css'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <div className="coursel-container">
        <Slider {...settings}>
          <div className="coursel">
            <img
              src="https://assets.ccbp.in/frontend/react-js/restaurants-app-project/carousel-images-jammu-special.jpg"
              alt="coursel"
              className="image"
            />
          </div>
          <div>
            <h3>
              <img
                src="https://assets.ccbp.in/frontend/react-js/restaurants-app-project/carousel-images-rajasthani-special.jpg"
                alt="coursel"
                className="image"
              />
            </h3>
          </div>
          <div>
            <h3>
              <img
                src="https://assets.ccbp.in/frontend/react-js/restaurants-app-project/carousel-images-uttar-pradesh-special.jpg"
                alt="coursel"
                className="image"
              />
            </h3>
          </div>
          <div>
            <h3>
              <img
                src="https://assets.ccbp.in/frontend/react-js/restaurants-app-project/carousel-images-north-indian-special.jpg"
                alt="coursel"
                className="image"
              />
            </h3>
          </div>
        </Slider>
      </div>
    )
  }
}
