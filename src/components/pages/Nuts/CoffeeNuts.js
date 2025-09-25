import { Link } from "react-router-dom";
import vw2 from "../../../assets/images/fruitJuice/vw_6.jpg";

function CoffeeNuts() {
    const u = [
        {   id:'1',
            name:'country coffee Nuts'
        },
         {   id:'2',
            name:'urban coffee Nuts'
        },
         {   id:'3',
            name:'elite coffee Nuts'
        },
    ]

    return (
        <article className="
            "
        >
            <header className=" bg-blue0
                tc grid gtc1 justify-center items-center h-100"
            >
                <img src={vw2}
                    alt=""
                    className="gc1s1 gr1s1 cover vh-50 flex"
                />
                <hgroup className="gc1s1 gr1s1 bg-black-50 h-100 flex justify-center items-center">
                    <h2 className=" mb0-00 f3-00 white-90 ttc">
                        coffee Nuts
                    </h2>
                </hgroup>
                
                <section className="flex flex-column justify-center items-center pv4-00 white-90"
                >
                    <h2 className="ttc">coffee Nuts Story Line....</h2>
                    <p>
                        Taste our Made in Ghana Nuts and our delicious coffee Nuts.
                    </p>
                    <p>
                        Taste our Made in Ghana Nuts and our delicious coffee Nuts.
                    </p>
                    <p>
                        Taste our Made in Ghana Nuts and our delicious coffee Nuts.
                    </p>

                </section>
            </header>
            
            <main>
                <section className="mb4-00">
                    <header className="
                        tc flex flex-column justify-center items-center
                        bg-white
                        mb4-00 pv2-00"
                    >
                        <h2>coffee Nuts on Offer</h2>
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
                    Another section for coffee nuts can go here...
                </section>
            </main>
            
            <footer className="flex justify-center items-center h6-00 bg-blue0 white-90 tc"
            >
                Volta Winery || Nuts || coffee Nuts
            </footer>
        </article>
        
    );
    }

export default CoffeeNuts;


function NutsCard({name}) {
    return (
        <Link to ="/nuts/coffee-nuts/1" 
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
                    <div className="flex justify-between"> 
                        <button disabled className="pa0-50">Add to Cart</button>
                    </div>
                
                </footer>
            </article>
        </Link>
    )
}