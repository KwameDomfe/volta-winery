import React from 'react'
import fff from "../../assets/images/wines/vw_18.jpg";
import ggg from "../../assets/images/wines/cashewWine/vw_13.jpg";
import hhh from "../../assets/images/wines/cocoaWine/vw_5.jpg";
import ThumbnailPortrait from "../atoms/ThumbnailPortrait";
const WinesCarousel = () => {
  return (
    <div className="gc6s5 gr2s1 flex ggap1-00 h12-00 pb2-00"
    >
        <ThumbnailPortrait 
            image={ggg}
            description={'cocoa wine'}
        />
        <ThumbnailPortrait 
            image={fff}
            description={'cashew wine'}
        />
        <ThumbnailPortrait 
            image={hhh}
            description={'coffee wine'}
        />
    </div>
  )
}

export default WinesCarousel