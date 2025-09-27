import LeftBanner from '../molecules/LeftBanner';


const VoltaWineryLandingPageLeftBanner = (
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
            <div className="gc2s10 gc2s8-m gc2s6-l gr1s1 mt4-00">
                <LeftBanner 
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

export default VoltaWineryLandingPageLeftBanner