import { Link } from "react-router-dom";
import vw1 from "../../../assets/images/wines/cocoaWine/vw_15.jpg";
import vw2 from "../../../assets/images/wines/cocoaWine/vw_5.jpg";
import LayoutHeader from "../../layouts/LayoutHeader";

function CocoaWine() {
    const u = [
        {   id:'1',
            name:'country cocoa wine'
        },
         {   id:'2',
            name:'urban cocoa wine'
        },
         {   id:'3',
            name:'elite cocoa wine'
        },
    ]

    return (
        <article className="
            "
        >
            <LayoutHeader title="Cocoa Wine"
                overview="Volta Winery can be  through the following addresses."
                image={vw2}
                details={`Taste our Made in Ghana Wines and our delicious Cocoa Wine. Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice. Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice.`
                }
            
            />
            
            <main>
                <section className="mb4-00">
                    <header className="
                        tc flex flex-column justify-center items-center
                        bg-white
                        mb4-00 pv2-00"
                    >
                        <h2>cocoa Wines on Offer</h2>
                    </header>
                    <ul className="grid gtc1 gtc2-m gtc3-l ggap0-50
                        container container90
                        "
                    >
                        {   
                            u.map(
                                (ccc) => {
                                    return (
                                        <li key={ccc.id} className="mb0-00">
                                            <WineCard />
                                        </li>
                                    )
                                }
                            )
                        }
                    </ul>
                    
                </section>
                <section className="flex flex-column justify-center items-center mv4-00 bg-white pv4-00">
                    Another section for cocoa wines can go here...
                </section>
            </main>
            
            <footer className="flex justify-center items-center h6-00 bg-blue0 white-90 tc"
            >
                Volta Winery || cocoa Wine
            </footer>
        </article>
        
    );
    }

export default CocoaWine;


function WineCard(params) {
    return (
        <Link to ="/wines/cocoa-wine/1" 
            className=""
        >
            <article className="bg-white"
            >
                <header className="flex flex-wrap justify-betwee ggap0-50 pa1-00">
                    <button className="w2-00 h2-00">
                        -
                    </button>
                    <button className="w2-00 h2-00">
                        +
                    </button>
                </header>
                <main>
                    <img src={vw1}
                        alt=""
                        className="w-100"
                    />
                </main>
                <footer className="pa1-00">
                    <h2>country cocoa wine</h2>
                    <p className="mb0-25">GHC 56.69</p>
                    <p>Alcoholic</p>
                    <div className="flex justify-between"> 
                        <button disabled className="pa0-50">Add to Cart</button>
                    </div>
                
                </footer>
            </article>
        </Link>
    )
}