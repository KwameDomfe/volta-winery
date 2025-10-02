import { Link } from "react-router-dom";
import vw1 from "../../../assets/images/wines/cashewWine/vw_13.jpg";
import vw2 from "../../../assets/images/wines/cashewWine/vw_13.jpg";
import LayoutHeader from "../../layouts/LayoutHeader";

function CoffeeWine() {
    const u = [
        {   id:'1',
            name:'country Coffee wine'
        },
         {   id:'2',
            name:'urban Coffee wine'
        },
         {   id:'3',
            name:'elite Coffee wine'
        },
    ]

    return (
        <article className="
            "
        >
            <LayoutHeader title="Coffe wine"
                overview="Volta Winery can be  through the following addresses."
                image={vw2}
                details={`Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice. Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice. Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice.`
                }
            
            />
            
            <main>
                <section className="mb4-00">
                    <header className="
                        tc flex flex-column justify-center items-center
                        bg-white
                        mb4-00 pv2-00"
                    >
                        <h2>Coffee Wines on Offer</h2>
                    </header>
                    <ul className="grid gtc1 gtc2-m gtc3-l ggap1-00
                        container container90
                        "
                    >
                        {   
                            u.map(
                                (ccc) => {
                                    return (
                                        <li key={ccc.id}>
                                            <WineCard />
                                        </li>
                                    )
                                }
                            )
                        }
                    </ul>
                    
                </section>
                <section className="flex flex-column justify-center items-center mv4-00 bg-white pv4-00">
                    Another section for Coffee wines can go here...
                </section>
            </main>
            
            <footer className="flex justify-center items-center h6-00 bg-blue0 white-90 tc"
            >
                Volta Winery || Coffee Wine
            </footer>
        </article>
        
    );
    }

export default CoffeeWine;


function WineCard(params) {
    return (
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
                <h2>country Coffee wine</h2>
                <p>GHC 56.69</p>
                <p>Alcoholic</p>
                <div className="flex justify-between"> 
                    <button className="pa0-50">Add to Cart</button>
                    <Link to ="/wines/Coffee-wine/1" className="pa0-50 ba">View More</Link>
                </div>
               
            </footer>
        </article>
    )
}