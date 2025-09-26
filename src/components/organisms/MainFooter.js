import { Link } from "react-router-dom";

function MainFooter() {
    return (
        <footer className="flex justify-between items-center 
            bg-white-80"
        >
            <div className="flex flex-column  items-center justify-between container container90 pv1-00">
                <div className="mb0-50 f1-50"
                >
                    <Link to="">
                        Volta Winery
                    </Link>
                
                </div>
                <nav className="w-100 w-40-m"
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
                            <Link to = "/infodesk"
                                className="white-9"
                            >
                                Infodesk
                            </Link>
                        </li>
                    </ul> 
                </nav> 
                <div>
                    (&copy; {new Date().getFullYear()})
                </div>
                
            </div>
        </footer>
           
            
    );
    
}

export default MainFooter;
