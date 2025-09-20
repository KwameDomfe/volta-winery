import React from 'react'

const ThumbnailPortrait = ({image, description}) => {
  return (
    <figure className="ba b--gold bw2"
    >
        <img src={image}
            alt={description}
            className="h-100 w10-00 cover"
        />
    </figure>
  )
}

export default ThumbnailPortrait