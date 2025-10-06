import React from 'react'

const ThumbnailPortrait = ({image, width, height, objectFit, description}) => {
  return (
    <img src={image}
        alt={description}
        className={`${width} ${height} ${objectFit}`}
    />
  )
}

export default ThumbnailPortrait