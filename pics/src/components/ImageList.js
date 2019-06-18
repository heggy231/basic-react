import React from 'react';

const ImageList = (props) => {
  const images = props.images.map((image) => {
    // note: image = response.data.result
    return <img key={image.id} src={image.urls.regular} />
  });

  return <div>{images}</div>;
};

export default ImageList;