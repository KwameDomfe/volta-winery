import { Link } from "react-router-dom";
// import vw1 from "../../assets/images/wines/vw_1.jpg";
import vw2 from "../../../assets/images/wines/cashewWine/vw8.jpg";
import LayoutHeader from "../../layouts/LayoutHeader";

function CashewWine() {
    const u = [
        {   id:'1',
            name:'country cashew wine'
        },
         {   id:'2',
            name:'urban cashew wine'
        },
         {   id:'3',
            name:'elite cashew wine'
        },
    ]

    return (
        <article className="
            "
        >
            <LayoutHeader title="cashew Wine"
                overview="Volta Winery can be  through the following addresses."
                image={vw2}
                details={`Taste our Made in Ghana Wines and our delicious Cashew wine. Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice. Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice.`
                }
            
            />
            
            <main>
                <section className="mb4-00">
                    <header className="
                        tc flex flex-column justify-center items-center
                        bg-white
                        mb4-00 pv2-00"
                    >
                        <h2>Cashew Wines on Offer</h2>
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
                    Another section for cashew wines can go here...
                </section>
            </main>
            
            <footer className="flex justify-center items-center h6-00 bg-blue0 white-90 tc"
            >
                Volta Winery || Cashew Wine
            </footer>
        </article>
        
    );
    }

export default CashewWine;


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
                <img src={vw2}
                    alt=""
                    className="w-100"
                />
            </main>
            <footer className="pa1-00">
                <h2>country cashew wine</h2>
                <p>GHC 56.69</p>
                <p>Alcoholic</p>
                <div className="flex justify-between"> 
                    <button className="pa0-50">Add to Cart</button>
                    <Link to ="/wines/cashew-wine/1" className="pa0-50 ba">View More</Link>
                </div>
               
            </footer>
        </article>
    )
}