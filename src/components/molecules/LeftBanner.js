import BannerDetails from "./BannerDetails"

const LeftBanner = ({title, description1, description2, url}) => {
    return (
        <div className="gc2s5 gr1s1 mt6-00 mb4-00">
            <BannerDetails 
                title={title}
                description1={description1}
                description2={description2}
                url={url}
            />
        </div>
    )
}

export default LeftBanner