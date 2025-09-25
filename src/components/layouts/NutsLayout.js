import { NavLink, Outlet } from "react-router-dom";
// import MainHeader from "./MainHeader";
// import MainFooter from "./MainFooter";

function NutsLayout() {
return (
    <article id="wine-layout"
        className="vh-100 w-100 flex justify-start">
        
        <header className="flex flex-column justify-start 
            bg-black-80 .
            w-16-00 w-40-l 
            h-100 
            pa1-00 
            white-90"
        >
            <div>
                <h2 className="pt4-00 sticky top0"
                >
                    Volta Winery Nuts
                </h2>
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
            
            <nav className="ba"
            >
                <ul className="flex flex-column"
                >
                    <li>
                        <NavLink to =""
                            className="white"
                        >
                            Back to Nuts Page
                        </NavLink>
                        
                    </li>
                    <li>
                        <NavLink to = "cocoa-nuts">
                            Cocoa Nuts
                        </NavLink>
                        
                    </li>
                
                    <li>
                        <NavLink to = "cashew-nuts">
                            Cashew Nuts
                        </NavLink>
                    </li>
                
                    <li>
                        <NavLink to = "coffee-nuts">
                            Coffee Nuts
                        </NavLink>
                    </li>
                </ul> 
            </nav>
        </header>
        <div className="w-75">
            <div className="">
                <Outlet />
            </div>
            {/* <footer className="pt2-00 bg-black-50">
                Volta Winery || Nuts
            </footer> */}
        </div>
        
    </article>
);
}

export default NutsLayout;
