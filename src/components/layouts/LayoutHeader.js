import React from 'react'

const LayoutHeader = ({title,image, overview,details}) => {
    return (
        <header className=" bg-blue0
            tc grid gtc1 justify-center items-center h-1000"
        >
            <img src={image}
                alt=""
                className="gc1s1 gr1s1 cover vh-50 flex"
            />
            <hgroup className="gc1s1 gr1s1 bg-black-50 h-100 flex justify-center items-center">
                <h2 className=" mb0-00 f3-00 white-90 ttc">
                    {title}
                </h2>
            </hgroup>
            
            <section className="flex flex-column justify-center items-center pv4-00 white-90"
            >
                <h2>{overview}</h2>
                <p>
                    {details}
                </p>
            </section>
        </header>
    )
}

export default LayoutHeader