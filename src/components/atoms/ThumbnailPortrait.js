import React from 'react'

const ThumbnailPortrait = ({image, description}) => {
  return (
    <figure className="ba b--gold bw2"
    >
        <img src={image}
            alt={description}
            className="h-100 w-100 w10-00-l cover"
        />
    </figure>
  )
}

export default ThumbnailPortrait