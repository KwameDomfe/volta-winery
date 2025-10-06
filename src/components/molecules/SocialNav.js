import React from 'react'
import { socialNav } from "../../assets/data/menuNav";
const SocialNav = () => {
    return (
         <nav id="m__socialMediaNav" 
            className="flex items-center justify-center w-100 " 
            tabIndex="0"
        >
            <ul id="social_media_list" 
                className=" flex justify-around items-center w-60"
            >
                {
                    socialNav.map(
                        (q) => {

                            return (
                                <li key={q.id}
                                    className="pa0-25  ba br5-00  b--black-20 bg-white1"
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