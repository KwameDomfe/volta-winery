import LeftBanner from '../molecules/LeftBanner';


const VoltaWineryLandingPageLeftBanner = (
    {
        url, 
        title, 
        description1, 
        description2, 
        children,
    }
) => {
    
    return (
        <div className="gc1s12 gr1s1
            grid gtc12 pt4-00
            vh-100 
            bg-black-40 white-90
           "
        >
            <div className="gc1s12 gc1s6-m gc1s4-l gr1s1 
                mt4-00 container container90"
            >
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