import { Link } from "react-router-dom";

function MainFooter() {
    
    return (
        <footer className="flex justify-between items-center 
         bg-white-80"
        >
            <div className="flex justify-between container container90 pv1-00">
                <div
                >
                Volta Winery
                </div>
                <nav className="w-40"
                >
                    <ul className="flex justify-between W-100"
                    >
                        <li>
                            <Link to = "wines/"
                                className="white-9"
                            >
                                Wines
                            </Link>
                            
                        </li>
                
                        <li>
                            <Link to = "fruit-juices"  
                                className="white-9"
                            >
                                Fruit Juices
                            </Link>
                        </li>
            
                
                        <li>
                            <Link to = "/nuts"
                                className="white-9"
                            >
                                Nuts
                            </Link>
                        </li>
                        <li>
                            <Link to = "/info"
                                className="white-9"
                            >
                                info
                            </Link>
                        </li>
                    </ul> 
                </nav> 
                <div>
                    &copy;2025
                </div>
                
            </div>
        </footer>
           
            
    );
    
}

export default MainFooter;
