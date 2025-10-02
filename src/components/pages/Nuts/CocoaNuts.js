import { Link } from "react-router-dom";
import vw2 from "../../../assets/images/fruitJuice/vw_6.jpg";
import LayoutHeader from "../../layouts/LayoutHeader";

function CocoaNuts() {
    const u = [
        {   id:'1',
            name:'country cocoa Nuts'
        },
         {   id:'2',
            name:'urban cocoa Nuts'
        },
         {   id:'3',
            name:'elite cocoa Nuts'
        },
    ]

    return (
        <article className="
            "
        >
            <LayoutHeader title="Cocoa Nuts"
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
                        <h2>cocoa Nuts on Offer</h2>
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
                                            <NutsCard name ={ccc.name}/>
                                        </li>
                                    )
                                }
                            )
                        }
                    </ul>
                    
                </section>
                <section className="flex flex-column justify-center items-center mv4-00 bg-white pv4-00">
                    Another section for cocoa nuts can go here...
                </section>
            </main>
            
            <footer className="flex justify-center items-center h6-00 bg-blue0 white-90 tc"
            >
                Volta Winery || Nuts || cocoa Nuts
            </footer>
        </article>
        
    );
    }

export default CocoaNuts;


function NutsCard({name}) {
    return (
        <Link to ="/nuts/cocoa-nuts/1" 
            className=""
        >
            <article className="bg-white h-100"
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
                    <h2>{name}</h2>
                    <p className="mb0-25">GHC 56.69</p>
                    <p>Non Alcoholic</p>
                    <div className="flex justify-between"> 
                        <button disabled className="pa0-50">Add to Cart</button>
                    </div>
                
                </footer>
            </article>
        </Link>
    )
}