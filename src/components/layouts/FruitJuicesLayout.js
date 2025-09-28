import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, NavLink, Outlet } from "react-router-dom";

const fruitJuicesNav = [
    {
        "id" : 1,
        "name": "cocoa fruits juice",
        "url" : "cocoa-fruits-juice",
    },
    {
        "id" : 2,
        "name": "cashew fruits juice",
        "url" : "cashew-fruits-juice",
    },
    {
        "id" : 3,
        "name": "coffee fruits juice",
        "url" : "coffee-fruits-juice",
    },
]

function FruitJuicesLayout() {

    const [toggle, setToggle ]= useState(1)
        
    const handleMenuToggle = () =>{
        setToggle(!toggle)
    }

    return (
        <article id="fruits-juice-layout"
            className="flex-m justify-start w-100"
        >
            <header className="flex flex-column justify-between 
                sticky top-0 
                bg-black-90
                w20-00-m
                vh-100-m
                pa1-00 pt3-00 
                white-90"
            >
                <div className="pt2-00 pt3-00-m mb1-00">
                    <div className="flex items-center "> 
                        <div className="dn-m mr0-50 white-90"
                            onClick={handleMenuToggle}
                        >
                            {toggle 
                                ? <AiOutlineMenu className="white f1-25"/> 
                                : <AiOutlineClose className="white f1-25"/>
                            }
                        </div> 
                        <div className="mb0-00">fruit juices</div>
                    </div>    
                </div>
                
                <nav className={
                        `${toggle ? 'dn flex-m flex-column' : ''}`
                    }
                >
                    <div className="ba pa1-00"
                    >
                        <p>
                            Taste our Made in Ghana Fruit Juices and our delicious Cocoa Fruit Juice .
                        </p>
                        <p>
                            Taste our Made in Ghana Fruit Juices and our delicious Cocoa Fruit Juice .
                        </p>
                        <p>
                            Taste our Made in Ghana Fruit Juices and our delicious Cocoa Fruit Juice .
                        </p>
                        <div className="mt1-00 mb2-00">
                            <Link to="">
                                Read More...
                            </Link>
                        </div>
                    </div>

                    <div className="f2-00">
                        <NavLink to =""
                            className="white"
                        >
                            Back to Fruit Juices
                        </NavLink>   
                    </div>
                    <ul className="flex flex-column  pa0-50 bg-white-10 f1-00"
                    >   
                        { 
                            fruitJuicesNav.map(
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

export default FruitJuicesLayout;
