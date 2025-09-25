import HeroSectionBannerDetails from '../molecules/HeroSectionBannerDetails'

const VoltaWineryLandingPageBanner = (
    {url, title, description1, description2, children

    }
) => {
    
    return (
        <div className="gc1s12 gr1s1
            grid gtc12
            vh-100 
            bg-black-40 white-90
            "
        >
            <div className="gc2s7 gr1s1 mt6-00">
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