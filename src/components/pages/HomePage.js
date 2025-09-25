import fff from "../../assets/images/wines/vw_18.jpg";
import ggg from '../../assets/images/wines/vw_2.jpg';
import hhh from '../../assets/images/nuts/vw_4.jpg'
import BackgroundImage from "../atoms/BackgroundImage";
import VoltaWineryLandingPageRightBanner from "../organisms/VoltaWineryLandingPageRightBanner";
import VoltaWineryLandingPageLeftBanner from "../organisms/VoltaWineryLandingPageLeftBanner";
import FruitJuiceCarousel from "../molecules/FruitJuiceCarousel";
import WinesCarousel from "../molecules/WinesCarousel";
import NutsCarousel from "../molecules/NutsCarousel";
import PayUsAVisit from "../organisms/PayUsAVisit";
import OrderForEveryOccation from "../organisms/OrderForEveryOccation";
import ValuableStatsSection from "../organisms/ValuableStatsSection";
import VoltaWineryLandingPageBanner from "../organisms/VoltaWineryLandingPageBanner";

function HomePage() {
    
    return (
        <article id=""
            className="mt5-00"
        >
            <div id=""
                    className="grid gtc12 mb1-00"
                >
                    <BackgroundImage 
                        image={ggg}
                    />
                    <VoltaWineryLandingPageBanner 
                        url = "fruit-juices"
                        title = 'Celebrate your Yam festival in Made in Ghana Style'
                        description1="Get  your country cocoa wines from Volta Winery or Stadium Gate Shopping Mall in Ho"
                        description2="(15th November, 2025 - 15th January, 2026)"
                    >
                        {/* <FruitJuiceCarousel /> */}

                    </VoltaWineryLandingPageBanner>
            </div>
            
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
            <section className="bg-gold mb1-00">
                <ValuableStatsSection />
            </section>
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
            <section>
                <OrderForEveryOccation />
            </section>
            <section id=""
                className=""
            >
                <div id="votla-winery-nuts"
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
            <section>
                <PayUsAVisit />
            </section>
        </article> 
    );
}

export default HomePage;
