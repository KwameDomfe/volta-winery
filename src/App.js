// CSS
import './assets/css/style.css';
import './assets/css/Utility_Classes.css';
import './assets/css/gdb_normalize.css';
import './assets/css/style.css'
// React Router Dom
import {
    createBrowserRouter,
    RouterProvider,
    // Route,
    // createRoutesFromElements,
} from "react-router-dom";

// Layouts
import RootLayout from './layouts/RootLayout';
import FruitJuicesLayout from './layouts/FruitJuicesLayout';
import NutsLayout from './layouts/NutsLayout';
import WineLayout from "./layouts/WineLayout";
import InfoLayout from "./layouts/InfoLayout";

// Pages
// Home Page
import HomePage from './pages/HomePage';

// Wines Pages
import WineIndex from './pages/wines/WineIndex';
import CocoaWine from "./pages/wines/CocoaWine";
import CashewWine from "./pages/wines/CashewWine";
import CoffeeWine from "./pages/wines/CoffeeWine";
// Fruit Juices Pages
import FruitJuicesIndex from './pages/fruitJuices/FruitJuicesIndex';
import CashewJuice from './pages/fruitJuices/CashewJuice';
import CocoaJuice from './pages/fruitJuices/CocoaJuice';
import CoffeeJuice from './pages/fruitJuices/CoffeeJuice';

// Nuts Pages
import NutsIndex from './pages/Nuts/NutsIndex';
import CocoaNuts from "./pages/Nuts/CocoaNuts";
import CashewNuts from "./pages/Nuts/CashewNuts";
import CoffeeNuts from "./pages/Nuts/CoffeeNuts";

// Info Pages
import InfoIndex from './pages/info/InfoIndex';
import Contacts from "./pages/info/Contact";
import Location from "./pages/info/Location";
import OtherTopics from "./pages/info/OtherTopics";
import CashewWineDetails from './pages/wines/CashewWineDetails';

const router = createBrowserRouter(
    [
        { path: "/",
            element: <RootLayout />,
            children: [
                
                {   path: "/",
                    element: <HomePage />,
                    // loader: ({ request }) =>
                    // fetch("/api/dashboard.json", {
                    //     signal: request.signal,
                    // }),
                    // action: logoutUser,
                    // loader: redirectIfUser,
                },
                {   path: "wines/",
                    element: <WineIndex />,
                        // loader: redirectIfUser,
                }, 
                {   path: "wines/",
                    element: <WineLayout />,
                    children: [
                     
                    {
                        path: "cocoa-wine",
                        element: <CocoaWine />
                        
                    },
                    {
                        path: "cocoa-wine/:id",
                        element: <CashewWineDetails />,
                    },
                    {
                        path: "cashew-wine/",
                        element: <CashewWine />,
                        
                        
                    },
            
                    {
                        path: "cashew-wine/:id",
                        element: <CashewWineDetails />,
                    },
                    
                    { path: "coffee-wine",
                        element: <CoffeeWine />,
                    }, 
                    {
                        path: "coffee-wine/:id",
                        element: <CashewWineDetails />,
                    },
                    ],
                },
                {   path: "fruit-juices/",
                    element: <FruitJuicesIndex />,
                        // loader: redirectIfUser,
                }, 
                {   path: "fruit-juices/",
                    element: <FruitJuicesLayout />,
                    children: [
                    {
                        path: "cocoa-juice",
                        element: <CocoaJuice />,
                        // loader: redirectIfUser,
                    },
                    {
                        path: "cashew-juice",
                        element :<CashewJuice/>,
                        // action: logoutUser,
                    },
                    {
                        path: "coffee-juice",
                        element: <CoffeeJuice />,
                    },
                    ],
                },
                {   path: "nuts/",
                    element: <NutsIndex />,
                        // loader: redirectIfUser,
                }, 
                {   path: "nuts/",
                    element: <NutsLayout />,
                    children: [
                    {
                        path: "cocoa-nuts",
                        element: <CocoaNuts />,
                        // loader: redirectIfUser,
                    },
                    {
                        path: "cashew-nuts",
                        element :<CashewNuts/>,
                        // action: logoutUser,
                    },
                    {
                        path: "coffee-nuts",
                        element: <CoffeeNuts />,
                    },
                    ],
                },
                {   path: "info/",
                    element: <InfoIndex />,
                        // loader: redirectIfUser,
                }, 
                {   path: "info/",
                    element: <InfoLayout />,
                    children: [
                    {
                        path: "location",
                        element: <Location />,
                        // loader: redirectIfUser,
                    },
                    {
                        path: "contacts",
                        element :<Contacts/>,
                        // action: logoutUser,
                    },
                    {
                        path: "other-topics",
                        element: <OtherTopics />,
                    },
                    ],
                },
            ],
        },
    ]
);


function App() {
    
    return (
        <div className="App">
            <RouterProvider router={router} 
            />
        </div>
    );
    }

export default App;