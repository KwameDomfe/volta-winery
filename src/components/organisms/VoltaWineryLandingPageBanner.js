import HeroSectionBannerDetails from '../molecules/HeroSectionBannerDetails'

const VoltaWineryLandingPageBanner = (
    {url, title, description1, description2, children

    }
) => {
    
    return (
        <div className="gc1s12 gr1s1
            grid gtc12
            vh-100
            white-90 pa0-50
            "
        >
            <div className="gc1s12 gc2s9-m gr1s1 pt5-00-m h-1000">
                <HeroSectionBannerDetails 
                    title = {title}
                    description1={description1}
                    description2={description2}
                    url={url}
                    children={children}
                />
                {children}
            </div>
            
        </div>
    )

}

export default VoltaWineryLandingPageBanner