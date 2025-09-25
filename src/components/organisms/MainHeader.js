import { Link, NavLink} from "react-router-dom";

function MainHeader() {
    
    return (
        <header className="flex justify-between items-center
            h4-0 w-100
            fixed z-5
            bg-black-50
           "
        >
            <div className="flex justify-between items-center 
                container container90 pv1-00"
            >
                <div className="b f2-00"
                >
                    <Link to="/"
                        className="white "
                    >
                    Volta Winery
                    </Link>
                    
                    
                </div>
                <nav className="w-40 f1-50"
                >
                    <ul className="flex justify-between"
                    >
                        <li>
                            <NavLink to = "wines/"
                                className="white-90"
                            >
                                Wines
                            </NavLink>
                            
                        </li>
                
                        <li>
                            <NavLink to = "fruit-juices"  
                                className="white-90"
                            >
                                Fruit Juices
                            </NavLink>
                        </li>
            
                
                        <li>
                            <NavLink to = "/nuts"
                                className="white-90"
                            >
                                Nuts
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to = "/infodesk"
                                className="white-90"
                            >
                                infodesk
                            </NavLink>
                        </li>
                    </ul> 
                </nav> 
            </div>
            
        </header>
    );
}

export default MainHeader;
