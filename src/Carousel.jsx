import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (e) => {
    this.setState({
      active: +e.target.dataset.index,
    });
  };

  /*  componentDidMount() {
    throw new Error("lolg error");
  } */

  render() {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="carousel flex gap-10 items-center">
        <img
          className="rounded-full w-1/2"
          src={images[active]}
          alt="animal her"
        />
        <div className="carousel-smaller flex flex-wrap gap-2">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              className={`${
                index === active ? "opacity-50" : ""
              } rounded-full w-1/3 border-2 border-black`}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
