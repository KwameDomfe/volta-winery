import React from 'react'

const PoweredBy = () => {
    return (
        <div id="m__poweredby" 
            className="flex flex-column items-center justify-center 
                white-90 f0-75
            "
        >
            <small className="mb0-50">powered by:</small>
            <a className="white-90" href="https://www.kdadesign.tech">
                <div className="flex">
                    <small className="">kda design technologies</small>
                </div>
            </a>
        </div>
    )
}

export default PoweredBy