import { Link, NavLink, Outlet } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import { useState } from "react";

const infodeskNav = [
    {
        "id" : 1,
        "name": "Shops",
        "url" : "shops",
    },
    {
        "id" : 2,
        "name": "Contacts",
        "url" : "contacts",
    },
    {
        "id" : 3,
        "name": "Location",
        "url" : "location",
    },
    {
        "id" : 4,
        "name": "Research and Development",
        "url" : "research-and-development",
    },
    {
        "id" : 5,
        "name": "Management",
        "url" : "management",

    },
    {
        "id" : 6,
        "name": "History",
        "url" : "history",
    },
    {
        "id" : 7,
        "name": "Workshops",
        "url" : "workshops",
    },
    {
        "id" : 8,
        "name": "Mission Vision and Values",
        "url" : "mission-vision-and-values",
    },
    {
        "id" : 9,
        "name": "other topics",
        "url" : "other-topics",
    },
]

function InfoLayout() {

    const [toggle, setToggle ]= useState(1)
    
    const handleMenuToggle = () =>{
        setToggle(!toggle)
    }

    return (
        <article id="infodesk-layout"
            className="flex-m justify-start w-100"
        >
            
            <header className=" flex flex-column justify-between 
                sticky top-0 
                bg-black-90
                w20-00-m
                vh-100-m
                pa1-00 pt3-00 
                white-90"
            >
                <div className="pt2-00 pt3-00-m mb1-00">
                    <div className="flex items-center"> 
                        <div className="dn-m mr0-50 white-90"
                            onClick={handleMenuToggle}
                        >
                            {toggle 
                                ? <AiOutlineMenu className="white f1-25"/> 
                                : <AiOutlineClose className="white f1-25"/>
                            }
                        </div> 
                        <div className="mb0-00">Infodesk</div>
                    </div>  
                </div>
                
                <nav className={
                        `${toggle ? 'dn flex-m flex-column' : ''}`
                    }
                >
                    <div className="mb1-00">
                        <p>
                            Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice .Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice .
                        </p>
                        <p>
                            Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice .
                        </p>
                        <div className="mt1-00 mb2-00">
                            <Link to="">
                                Read More...
                            </Link>
                        </div>
                    </div>
                    
                    <div className="f1-25 mb1-00">
                        <NavLink to =""
                            className="white"
                        >
                            Back to Infodesk
                        </NavLink>
                        
                    </div>
                    
                        
                    <ul className="flex flex-column  pa0-50 bg-white-10 f1-00"
                    >   
                        { 
                            infodeskNav.map(
                                (x) => {
                                    return (
                                        <li key={x.id} 
                                            className="mb0-25 pv0-25
                                                bb b--white-20" 
                                            onClick={handleMenuToggle}
                                        >
                                            <NavLink to = {x.url}
                                                className="white"
                                            >
                                                {x.name}
                                            </NavLink>
                                            
                                        </li>
                                    )
                                }
                            )       
                        }
                    </ul> 
                        
                </nav>
            </header>
            <div className="w-100-m">
                <Outlet />
            </div>
        </article>
    );
}

export default InfoLayout;
