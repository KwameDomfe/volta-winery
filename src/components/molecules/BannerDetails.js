import React from 'react'
import { Link } from 'react-router-dom'

const BannerDetails = ({title, description1, description2, url}) => {
    return (
        <div>
            <hgroup>
                <h2 className="f2-00 f3-50-m">
                    {title}
                </h2>
                <p className="f1-25 f1-75-m">{description1}</p>
                <p className="f1-00 f1-75-m">{description2}</p>
            </hgroup>
            
            <div className="flex ggap1-00 mt4-00">
                <div className=" f1-00 pa0-25 gold ba tc"
                >
                    <Link to ={url}
                        className="gold"
                    >
                        Read More...
                    </Link>
                </div>
                <div className="f1-25">
                    <button disabled className="pa0-25">
                        order title
                    </button>
                </div>
            </div>
        </div>
        
    )
}

export default BannerDetails