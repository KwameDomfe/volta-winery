import RightBanner from "../molecules/RightBanner";


const VoltaWineryLandingPageRightBanner = ({url, title, description1, description2, children}) => {
    return (
        <div className="gc1s12 gr1s1
            grid gtc12
            vh-100 
            bg-black-60 white-90
            linear-gradient
            "
        >
            <div className="gc6s5 gr1s1 mt6-00">
                <RightBanner 
                    title = {title}
                    description1={description1}
                    description2={description2}
                    url={url}
                    children
                />
                {children}
            </div>
            
        </div>
    )
}

export default VoltaWineryLandingPageRightBanner