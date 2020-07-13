import React , {Component } from "react";
import { connect } from "frontity";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  arrows: true,
  slidesToScroll: 1
};

const numbers = [1, 2, 3, 4, 5];

class Slick extends Component {
  constructor(props) {
      super(props)
      this.props = props;
  }
   render() {
    return (
    <Slider {...settings}>
      {this.props.imgList.map((slide, i) => {
          return <img alt={'Banner' + i} key={numbers, i} src={slide.url} />
      })}
    </Slider>
    )
  }
}

export default Slick