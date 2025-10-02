import React from 'react'
import { socialNav } from "../../assets/data/menuNav";
const SocialNav = () => {
    return (
        <nav id="m__socialMediaNav" 
            className="flex items-center justify-center w-60 w-100-m  mv1-00-l" 
            tabIndex="0"
        >
            <ul id="social_media_list" 
                className=" flex justify-around items-center  w-100"
            >
                {
                    socialNav.map(
                        (q) => {

                            return (
                                <li key={q.id}
                                    className="pa0-25  ba br5-00  b--white-50 bg-white1"
                                >
                                    <a title={q.title}
                                        rel="noopener noreferrer" 
                                        className="" 
                                        href={q.url} 
                                        target="_blank"
                                        
                                    >
                                        <img src={q.icon}
                                            alt={q.name}
                                            className="w1-00"
                                        />
                                    </a>       
                                </li>
                            )
                        }
                    )
                }
            </ul>
        </nav>
    )
}

export default SocialNav