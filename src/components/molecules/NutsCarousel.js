import fff from "../../assets/images/nuts/vw_4.jpg";
import ggg from "../../assets/images/nuts/vw_9.jpg";
import hhh from "../../assets/images/nuts/vw_4.jpg";
import ThumbnailPortrait from "../atoms/ThumbnailPortrait";

const NutsCarousel = () => {
  return (
    <div className="gc2s5 gr2s1 flex ggap1-00 h10-00 h12-00-m pb2-00"
    >
        <ThumbnailPortrait 
            image={ggg}
            width = "w12-00"
            objectFit="cover"
            description={'cocoa wine'}
        />
        <ThumbnailPortrait 
            image={fff}
            width = "w12-00"
            objectFit="cover"
            description={'cashew wine'}
        />
        <ThumbnailPortrait 
            image={hhh}
            width = "w12-00"
            objectFit="cover"
            description={'coffee wine'}
        />
    </div>
  )
}

export default NutsCarousel