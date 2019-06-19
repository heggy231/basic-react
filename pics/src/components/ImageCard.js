import React from 'react';
import ImageList from './ImageList';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // console.log(this.imageRef);
    // console.log('ref height', this.imageRef.current.height);
    // console.log('ref clientHeight', this.imageRef.current.clientHeight);

    // makes sure image height has the chance to load to web browser and this.setSpans callback function invoked
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    // get the correct height of this image
    // console.log(this.imageRef.current.clientHeight);
    const height = this.imageRef.current.clientHeight;
    // Math.ceil: cap its value, 150px is row height, adding 1 for any decimal leftover value to get the full number  ex) if you have 320height Imag/ 150 row height
    // => 2.13 + 1 = 3.13 and do a ceil will bring the span to next level up.  Math.ceil(3.13) => 4 rounding up
    const spans = Math.ceil(height / 10);

    // this.setState({ spans: spans });
    this.setState({ spans });
  };

  render () {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          // react's reference to DOM
          ref={this.imageRef}
          alt={description}
          src={urls.regular}
        />
      </div>
    );
  }
}

export default ImageCard;