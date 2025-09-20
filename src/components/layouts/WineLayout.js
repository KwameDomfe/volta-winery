import { NavLink, Outlet } from "react-router-dom";

function WineLayout() {
return (
    <article id="wine-layout"
        className="min-vh-100 w-100 flex justify-start sticky pt5-00">
        
        <header className="flex flex-column justify-between 
            bg-black-80 .
            w-16-00 w-40-l 
            vh-100 
            pa1-00 relative
            white-90"
        >
            <div className="ba pa1-00">
                <h2 className="sticky top0">Volta Winery Wines</h2>
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
                        Back to Wine Page
                    </NavLink>
                    
                </li>
                <ul className="flex flex-column ba pa1-00 f1-50"
                >
                    
                    <li className="mv1-00">
                        <NavLink to = "cocoa-wine">
                            Cocoa Wine
                        </NavLink>
                        
                    </li>
                
                    <li className="mv1-00">
                        <NavLink to = "cashew-wine">
                            Cashew Wine
                        </NavLink>
                    </li>
                
                    <li className="mv1-00">
                        <NavLink to = "coffee-wine">
                            Coffee Wine
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
