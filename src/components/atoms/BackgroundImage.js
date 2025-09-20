import React from 'react'

const BackgroundImage = ({image, }) => {
    return (
        <img src={image}
            className="gc1s12 gr1s1 
                vh-100
                cover"
            alt="tree"
        />
    )
}

export default BackgroundImage