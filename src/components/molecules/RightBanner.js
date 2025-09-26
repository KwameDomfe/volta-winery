import BannerDetails from './BannerDetails'

const RightBanner = ({title, description1, description2, url}) => {
    return (
        <div className="mt4-00 mb4-00">
            <BannerDetails 
                title={title}
                description1={description1}
                description2={description2}
                url={url}
            />
        </div>
    )
}

export default RightBanner