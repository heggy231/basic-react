import './ImageList.css';
import React from 'react';


const ImageList = (props) => {
  const images = props.images.map(({ id, urls, description }) => {
    // note: image = response.data.result
    return <img key={id} src={urls.regular} alt={description} />
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;