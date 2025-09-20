import fff from "../../assets/images/nuts/vw_4.jpg";
import ggg from "../../assets/images/nuts/vw_9.jpg";
import hhh from "../../assets/images/nuts/vw_4.jpg";
import ThumbnailPortrait from "../atoms/ThumbnailPortrait";

const NutsCarousel = () => {
  return (
    <div className="gc2s5 gr2s1 flex ggap1-00 h12-00 pb2-00"
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

export default NutsCarousel