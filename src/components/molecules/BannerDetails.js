import React from 'react'
import { Link } from 'react-router-dom'

const BannerDetails = ({title, description1, description2, url}) => {
    return (
        <div>
            <hgroup>
                <h2 className="f4-50">
                    {title}
                </h2>
                <p className="f1-75">{description1}</p>
                <p className="f1-75">{description2}</p>
            </hgroup>
            
            <div className="flex ggap1-00 mt4-00">
                <div className=" f1-25 pa0-50 gold ba tc"
                >
                    <Link to ={url}
                        className="gold"
                    >
                        Read More...
                    </Link>
                </div>
                <div className="f1-50">
                    <button disabled className="pa0-50">
                        order {title}
                    </button>
                </div>
            </div>
        </div>
        
    )
}

export default BannerDetails