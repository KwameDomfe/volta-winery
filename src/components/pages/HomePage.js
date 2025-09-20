import fff from "../../assets/images/wines/vw_18.jpg";
import ggg from '../../assets/images/fruitJuice/vw_6.jpg';
import hhh from '../../assets/images/nuts/vw_4.jpg'
import BackgroundImage from "../atoms/BackgroundImage";
import VoltaWineryLandingPageRightBanner from "../organisms/VoltaWineryLandingPageRightBanner";
import VoltaWineryLandingPageLeftBanner from "../organisms/VoltaWineryLandingPageLeftBanner";
import FruitJuiceCarousel from "../molecules/FruitJuiceCarousel";
import WinesCarousel from "../molecules/WinesCarousel";
import NutsCarousel from "../molecules/NutsCarousel";

function HomePage() {
    
    return (
        <article id=""
            className="mt5-00"
        >
            <header id="HomepageHeader"
                className="mb1-00"
            >
                <div id=""
                    className="grid gtc12"
                >
                    <BackgroundImage 
                        image={fff}
                    />
                    <VoltaWineryLandingPageRightBanner 
                        url = "wines"
                        title = "Volta Wines"
                        description1="Volta Winery Wines the development build is not optimized.
                            To create a production build, use npm run build.
                            webpack compiled successfully."
                        description2="Note that the development build is not optimized.
                            
                            webpack compiled successfully."
                    >
                        <WinesCarousel />
                    </VoltaWineryLandingPageRightBanner>
                </div>
                
            </header>
            <section id=""
                className="mb1-00"
            >
                <div id=""
                    className="grid gtc12"
                >
                    <BackgroundImage 
                        image={ggg}
                    />
                    <VoltaWineryLandingPageLeftBanner 
                        url = "fruit-juices"
                        title = "Volta Fruit Juices"
                        description1="Volta Winery Fruit Juices People who wonder whether the glass is half empty or half full are missing the point."
                        description2="The glass is refillable.
                            webpack compiled successfully."
                    >
                        <FruitJuiceCarousel />
                    </VoltaWineryLandingPageLeftBanner>
                    
                </div>
            </section>
            <section id=""
                className=""
            >
                <div id=""
                    className="grid gtc12"
                >
                    <BackgroundImage 
                        image={hhh}
                    />
                    <VoltaWineryLandingPageRightBanner 
                        url = "nuts"
                        title = "Volta Nuts"
                        description1="Volta Winery Nuts Note that the development build is not optimized.
                            To create a production build, use npm run build.
                            webpack compiled successfully."
                        description2="Note that the development build is not optimized.
                            
                            webpack compiled successfully."
                    >
                         <NutsCarousel  />
                    </VoltaWineryLandingPageRightBanner>
                </div>
            </section>
        </article> 
    );
}

export default HomePage;
