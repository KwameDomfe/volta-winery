import { NavLink, Outlet } from "react-router-dom";


function WineLayout() {
return (
    <article id="wine-layout"
        className="w-100 flex justify-start sticky">
        
        <header className="flex flex-column justify-between 
            bg-black-80 .
            w-16-00 w-40-l 
            vh-100 
            pa1-00 
            white-90"
        >
            <div>
                <h2 className="pt4-00 sticky top0">Infodesk</h2>
                <p>
                    Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice .
                </p>
                <p>
                    Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice .
                </p>
                <p>
                    Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice .
                </p>
            </div>
            
            <nav className="flex flex-column mb4-00"
                ><li className="f2-00">
                    <NavLink to =""
                        className="white"
                    >
                        Back to Info Page
                    </NavLink>
                    
                </li>
                <ul className="flex flex-column ba pa1-00 f1-50"
                >
                    
                    <li className="mv1-00">
                        <NavLink to = "location">
                            Location
                        </NavLink>
                        
                    </li>
                
                    <li className="mv1-00">
                        <NavLink to = "contacts">
                            Contact
                        </NavLink>
                    </li>
                
                    <li className="mv1-00">
                        <NavLink to = "other-topics">
                            Other Tupics
                        </NavLink>
                    </li>
                </ul> 
            </nav>
        </header>
        <div className="w-75">
            <div className="h-100">
                <Outlet />
            </div>
        </div>
        
    </article>
);
}

export default WineLayout;
