import ggg from "../../assets/images/fruitJuice/vw_3.jpg";
import hhh from "../../assets/images/fruitJuice/vw_6.jpg";
import ThumbnailPortrait from "../atoms/ThumbnailPortrait";
const FruitJuiceCarousel = () => {
  return (
    <div className="gc2s5 gr2s1 flex ggap1-00 h12-00 pb2-00"
    >
        <ThumbnailPortrait 
            image={ggg}
            description={'cocoa wine'}
        />
        {/* <ThumbnailPortrait 
            image={hhh}
            description={'cashew wine'}
        /> */}
        <ThumbnailPortrait 
            image={hhh}
            description={'coffee wine'}
        />
    </div>
  )
}

export default FruitJuiceCarousel