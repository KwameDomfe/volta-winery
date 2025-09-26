import { Link, NavLink} from "react-router-dom";
import { FaNutritionix } from 'react-icons/fa';
import { PiWineFill } from 'react-icons/pi';
import { GiManualJuicer } from 'react-icons/gi';
import { BiSolidBookContent } from 'react-icons/bi';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { BiLogoFacebookCircle } from 'react-icons/bi';
import { useState } from "react";
function MainHeader() {
    const [toggle, setToggle ]= useState(1)

    const handleMenuToggle = () =>{
        setToggle(!toggle)
    }
        
    const menuItems = [
        {
            id : 1,
            name: 'wines',
            url: "wines",
            icon: <PiWineFill />
        },
        {
            id : 2,
            name: 'fruit juices',
            url: "fruit-juices",
            icon: <GiManualJuicer />
        },
        {
            id : 3,
            name: 'nuts',
            url:"nuts",
            icon: <FaNutritionix />
        },
        {
            id : 4,
            name: 'infodesk',
             url: "infodesk",
            icon: <BiSolidBookContent />
        },
    ]

    return (
        <header className="flex flex-column justify-between items-center
            h4-0 w-100
            fixed z-5
            bg-black-50
           "
        >
            <div className="flex justify-between items-center 
                container container90 pv1-00"
            >
                <div className="w-100 w-50-s b f1-75 f2-00-s"
                    onClick={() =>setToggle(handleMenuToggle)}
                >
                    <Link to="/"
                        className="white "
                    >
                    Volta Winery
                    </Link>
                    
                    
                </div>
                <nav className="w-40 f1-25"
                >
                    <ul className="dn 
                        flex-m justify-between 
                        ttc"
                    >
                        {
                            menuItems.map(
                                (menu) => {
                                    return (
                                        <li key={menu.id}>
                                            <NavLink to = {menu.url}
                                                className="white-90"
                                            >
                                                <div className="mr0-50">
                                                    {menu.icon}
                                                </div>
                                                <span className="dn db-l">{menu.name}</span> 
                                            </NavLink> 
                                        </li>
                                    )
                                }
                            )
                        }
                    </ul> 
                </nav> 
                <div className="dn-m ba white-90"
                    onClick={handleMenuToggle}
                >
                    {toggle 
                        ? <AiOutlineMenu className="white f1-75"/> 
                        : <AiOutlineClose className="white f1-75"/>
                    }
                </div>
                
            </div>
            <aside className={`${toggle ? 'dn':'vh-100 flex flex-column'} 
                 dn-m tc  pa1-00 bg-black-90`
                }
            >
                <div className=" pr1-00 white-80 mb2-00 pt1-00 f1-25">
                    <h2>Our Purpose</h2>
                    <p> 
                        Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice. Taste our Made in Ghana Wines and our
                    </p>
                </div>
                <div className="h-100"
                >
                    <nav className=" f1-25 mb4-00"
                >
                        <ul className="flex flex-column justify-start items-center
                            ttc tc w-100 h-100 "
                        >
                            {
                                menuItems.map(
                                    (menu) => {
                                        return (
                                            <li key={menu.id}
                                                className="bb b--white-60 w-100 pb0-50 mb1-00"
                                                onClick={() =>setToggle(handleMenuToggle)}
                                            >
                                                <NavLink to = {menu.url}
                                                    className="white-90"
                                                >
                                                    <span className="mr0-50">
                                                        {menu.icon}
                                                    </span>
                                                    <span className="">{menu.name}</span> 
                                                </NavLink> 
                                            </li>
                                        )
                                    }
                                )
                            }
                        </ul> 
                    </nav>
                    <nav className="flex justify-center">
                        <div className="flex justify-around w-100 w-60-s bg-white pa0-50">
                            <div>
                                <BiLogoFacebookCircle className="f2-00"/>
                            </div>
                            <div>
                                <BiLogoFacebookCircle className="f2-00"/>
                            </div>
                            <div>
                                <BiLogoFacebookCircle className="f2-00"/>
                            </div>
                        </div>
                        
                    </nav>
                </div>
            </aside> 
        </header>
    );
}

export default MainHeader;
