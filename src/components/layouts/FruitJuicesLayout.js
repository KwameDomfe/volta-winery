import { NavLink, Outlet } from "react-router-dom";
// import MainHeader from "./MainHeader";
// import MainFooter from "./MainFooter";

function FruitJuicesLayout() {
return (
    <article className="">
        
        <h2>Fruit Juices page</h2>
        <nav
        >
            <ul
            >
                <li>
                    <NavLink to = "cocoa"
                    >
                        Cocoa
                    </NavLink>
                    
                </li>
            
                <li>
                    <NavLink to = "cashew"
                    >
                        Cashew
                    </NavLink>
                </li>
            
            </ul> 
        </nav>
        <div>
            <Outlet />
        </div>
    </article>
);
}

export default FruitJuicesLayout;