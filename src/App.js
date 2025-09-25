// CSS
import './assets/css/style.css';
import './assets/css/Utility_Classes.css';
import './assets/css/gdb_normalize.css';
import './assets/css/style.css'

// React Router Dom
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

// Layouts
import RootLayout from './components/layouts/RootLayout';
import FruitJuicesLayout from './components/layouts/FruitJuicesLayout';
import NutsLayout from './components/layouts/NutsLayout';
import WineLayout from "./components/layouts/WineLayout";
import InfoLayout from "./components/layouts/InfoLayout";

// Pages
// Home Page
import HomePage from './components/pages/HomePage';

// Wines Pages
import WineIndex from './components/pages/wines/WineIndex';
import CocoaWine from "./components/pages/wines/CocoaWine";
import CashewWine from "./components/pages/wines/CashewWine";
import CoffeeWine from "./components/pages/wines/CoffeeWine";
// Fruit Juices Pages
import FruitJuicesIndex from './components/pages/fruitJuices/FruitJuicesIndex';
import CashewJuice from './components/pages/fruitJuices/CashewJuice';
import CocoaJuice from './components/pages/fruitJuices/CocoaJuice';
import CoffeeJuice from './components/pages/fruitJuices/CoffeeJuice';

// Nuts Pages
import NutsIndex from './components/pages/Nuts/NutsIndex';
import CocoaNuts from "./components/pages/Nuts/CocoaNuts";
import CashewNuts from "./components/pages/Nuts/CashewNuts";
import CoffeeNuts from "./components/pages/Nuts/CoffeeNuts";
import CashewNutsDetails from "./components/pages/Nuts/CashewNutDetails";

// Info Pages
import InfoIndex from './components/pages/info/InfoIndex';
import Contacts from "./components/pages/info/Contact";
import Location from "./components/pages/info/Location";
import OtherTopics from "./components/pages/info/OtherTopics";
import CashewWineDetails from './components/pages/wines/CashewWineDetails';
import Management from './components/pages/info/Management';
import Shops from './components/pages/info/Shops';
import RAndD from './components/pages/info/RandD';
import History from './components/pages/info/History';
import Workshops from './components/pages/info/Workshops';
import MVV from './components/pages/info/MVV';
import CashewJuiceDetails from './components/pages/fruitJuices/CashewJuiceDetails';

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
                     // action: logoutUser,
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
                        path: "cocoa-fruits-juice",
                        element: <CocoaJuice />,
                        // loader: redirectIfUser,
                    },
                    {
                        path: "cocoa-fruits-juice/:id",
                        element: <CashewJuiceDetails />,
                    },
                    {
                        path: "cashew-fruits-juice",
                        element :<CashewJuice/>,
                        // action: logoutUser,
                    },
                    {
                        path: "cashew-fruits-juice/:id",
                        element: <CashewWineDetails />,
                    },
                    {
                        path: "coffee-fruits-juice",
                        element: <CoffeeJuice />,
                    },
                    {
                        path: "coffee-fruits-juice/:id",
                        element: <CashewWineDetails />,
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
                        path: "cocoa-nuts/:id",
                        element :<CashewNutsDetails />,
                        // action: logoutUser,
                    },
                    {
                        path: "cashew-nuts",
                        element :<CashewNuts/>,
                        // action: logoutUser,
                    },
                    {
                        path: "cashew-nuts/:id",
                        element :<CashewNutsDetails />,
                        // action: logoutUser,
                    },
                    {
                        path: "coffee-nuts",
                        element: <CoffeeNuts />,
                    },
                    {
                        path: "coffee-nuts/:id",
                        element :<CashewNutsDetails />,
                        // action: logoutUser,
                    },
                    ],
                },
                {   path: "infodesk/",
                    element: <InfoIndex />,
                        // loader: redirectIfUser,
                }, 
                {   path: "infodesk/",
                    element: <InfoLayout />,
                    children: [
                    {
                        path: "location",
                        element: <Location />,
                        // loader: redirectIfUser,
                    },
                    {
                        path: "shops",
                        element: <Shops />,
                        // loader: redirectIfUser,
                    },
                    {
                        path: "research-and-development",
                        element: <RAndD />,
                        // loader: redirectIfUser,
                    },
                    {
                        path: "mission-vision-and-values",
                        element: <MVV />,
                    },
                    {
                        path: "management",
                        element: <Management />,
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
                    {
                        path: "history",
                        element: <History />,
                    },
                    {
                        path: "workshops",
                        element: <Workshops />,
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