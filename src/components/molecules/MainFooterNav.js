import { NavLink } from 'react-router-dom';
import { menuItems } from "../../assets/data/menuNav";

const MainFooterNav = () => {
    
    return (
        <nav className="flex items-center justify-center 
            mv1-00 
             f1-50 "
        >          
             <ul className="grid gtc2 ggap0-25 justify-center items-center bl br bw2 b--black-10 pa2-00"
            >
                {
                    menuItems && menuItems.map(
                        (menuItem) => {
                            return(
                                <li key={menuItem.id} className="f-cc 
                                    mb0-00 ba b--black-20 w2-50 h2-50 pa0-50
                                    hover-bg-gold:focus hover-bg-gold:hover"
                                >
                                <NavLink to = {menuItem.url}
                                    className=""
                                > 
                                    {menuItem.icon}
                                </NavLink>
                                </li>
                            )
                        }
                    )
            
                }
            </ul>    
        </nav>
    )

}

export default MainFooterNav