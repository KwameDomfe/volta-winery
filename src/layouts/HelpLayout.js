import { NavLink, Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";

function HelpLayout() {
return (
    <article className="w-100 bg-red">
        
        <header className="flex">
            <h2>help page</h2>
            <nav
        >
            <ul className="flex"
            >
                <li>
                    <NavLink to ="">
                        Back to Help Page
                    </NavLink>
                    
                </li>
                <li>
                    <NavLink to = "faq">
                        FAQs
                    </NavLink>
                    
                </li>
            
                <li>
                    <NavLink to = "location">
                        Location
                    </NavLink>
                </li>
            
                {/* <li>
                    <NavLink to = "/contact">
                        Contact
                    </NavLink>
                </li> */}
            </ul> 
        </nav>
        </header>
        
        
        <div>
            <Outlet />
        </div>
        <footer>
            help page footer
        </footer>
    </article>
);
}

export default HelpLayout;
