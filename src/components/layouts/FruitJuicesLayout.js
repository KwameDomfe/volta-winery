import { NavLink, Outlet } from "react-router-dom";

const infodeskNav = [
    {
        "id" : 1,
        "name": "cocoa",
        "url" : "cocoa-fruits-juice",
    },
    {
        "id" : 2,
        "name": "cashew",
        "url" : "cashew-fruits-juice",
    },
    {
        "id" : 3,
        "name": "coffee",
        "url" : "coffee-fruits-juice",
    },
    
]

function FruitJuicesLayout() {
return (
    <article id="wine-layout"
        className="w-100 flex justify-start ">
        
        <header className="flex flex-column sticky top-0 justify-between 
            bg-black-80 .
            w-16-00 w-40-l 
            vh-100 
            pa1-00 
            white-90"
        >
            <div>
                <h2 className="pt4-00">Fruit Juices</h2>
                <p>
                    Taste our Made in Ghana Fruit Juices and our delicious Cocoa Fruit Juice .
                </p>
                <p>
                    Taste our Made in Ghana Fruit Juices and our delicious Cocoa Fruit Juice .
                </p>
                <p>
                    Taste our Made in Ghana Fruit Juices and our delicious Cocoa Fruit Juice .
                </p>
            </div>
            
            <nav className="flex flex-column mb4-0"
                >
                <div className="f2-00 mb1-00">
                    <NavLink to =""
                        className="white"
                    >
                        Back to Fruit Juices
                    </NavLink>
                    
                </div>
                
                    
                <ul className="flex flex-wra flex-column ba pa1-00 f1-25"
                >   
                    { 
                        infodeskNav.map(
                            (x) => {
                                return (
                                    <li key={x.id} 
                                        className="mb1-00 pa0-50 mr1-00 
                                            bb b--white-20" 
                                    >
                                        <NavLink to = {x.url}
                                            className="white"
                                        >
                                            {x.name}
                                        </NavLink>
                                        
                                    </li>
                                )
                            }
                        )       
                    }
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

export default FruitJuicesLayout;
