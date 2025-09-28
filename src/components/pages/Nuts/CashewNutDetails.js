import { Link } from "react-router-dom";
import vw1 from "../../../assets/images/wines/vw_1.jpg";
import vw2 from "../../../assets/images/wines/vw_2.jpg";

function CashewNutsDetails() {
    const relatedProducts = [
        {   id:'1',
            name:'country cashew nuts'
        },
         {   id:'2',
            name:'urban cashew nuts'
        },
         {   id:'3',
            name:'elite cashew nuts'
        },
    ]

    return (
        <article className=""
        >
            <header className=" bg-blue0
                tc grid gtc1 justify-center items-center h-100"
            >
                <img src={vw2}
                    alt=""
                    className="gc1s1 gr1s1 cover vh-50 flex"
                />
                <hgroup className="gc1s1 gr1s1 bg-black-50 h-100 flex flex-column justify-center items-center">
                    <h2 className=" mb0-00 f3-00 white-90">
                        cashew nuts
                    </h2> 
                    <section className="gc1s1 gr1s1 flex flex-column justify-center items-center pv4-00 white-90"
                    >
                        <p>
                            Taste our Made in Ghana nuts and our delicious Cocoa Fruit Juice.
                        </p>
                        <p>
                            Taste our Made in Ghana nuts and our delicious Cocoa Fruit Juice.
                        </p>
                        <p>
                            Taste our Made in Ghana nuts and our delicious Cocoa Fruit Juice.
                        </p>
                    </section>
                </hgroup>
            </header>
            
            <main>
                <section className="mb4-00">
                    <header className="
                        tc flex flex-column justify-center items-center
                        bg-white
                        mb4-00 pv2-00"
                    >
                        <h2>Cashew Nuts Details</h2>
                    </header>
                    <article className="grid gtc1 ggap1-00
                        container container90
                        "
                    >

                        <NutsDetailCard />                 
                    </article>
                    <section className="flex flex-column justify-center items-center mv4-00 bg-white pv4-00 container container90">
                        <h2>You can also look at these......</h2>
                        <ul className="flex">
                            {
                                relatedProducts.map(
                                    (ccc) =>{
                                        return (
                                            <li key={ccc.id}>
                                                <RelatedProductCard />
                                            </li>
                                        )
                                    }
                                ) 
                            }
                        </ul>
                        
                    </section>
                </section>
                
            </main>
            
            <footer className="flex justify-center items-center h6-00 bg-blue0 white-90 tc"
            >
                Volta Winery || Cashew Nuts Details
            </footer>
        </article>
        
    );
}

export default CashewNutsDetails;


function NutsDetailCard(params) {
    return (
        <article className="bg-white"
        >
            <header className="flex flex-wrap justify-between bg-red pa1-00 ">
                <button>
                    -
                </button>
                <button>
                    +
                </button>
            </header>
            <div className="flex">
                <main className="w-50">
                    <img src={vw1}
                        alt=""
                        className="w-100"
                    />
                </main>
                <aside className="w-50 pa1-00">
                    <h2>country cashew wine</h2>
                    <p>GHC 56.69</p>
                    <p>Alcoholic</p>
                    <div className="flex justify-between"> 
                        <button className="pa0-50 mb2-00 ">Add to Cart</button>
                    </div>
                    <div className="f0-75">
                        <h3>
                            Wine Style
                        </h3>
                        <p>A premium quality, full bodied Noble Late Harvest.</p>
                        <h3>
                            Description
                        </h3>
                        <div>
                            <p>
                                Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice. Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice.
                            </p>
                            
                            <p>
                                Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice. Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice.
                            </p>
                            
                            <p>
                                Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice. Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice.
        
                            </p>
                        </div>
                        <h3>
                            Tasting Note
                        </h3>
                        <div>
                            <p>
                                Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice. Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice.
                            </p>
                            
                            <p>
                                Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice. Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice.
                            </p>
                            
                            <p>
                                Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice. Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice.
        
                            </p>
                        </div>
                        
                        <h3>
                            Food Paring Suggestions
                        </h3>
                        <p>
                                Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice. Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice.
        
                            </p>
                        
                        <h3>Dietary Claims</h3>
                            <p>
                                We make every effort to accurately describe the wines we sell, including any claims made by the wineries regarding the wine's ingredients, additives, or production methods. However, we cannot independently verify the accuracy of these claims. When wineries label their wines as "low sugar," "gluten free," "low sulfites," or any other claim, we rely on the information provided to us and simply label the wines as we are told. Therefore, we cannot be held responsible for any inaccuracies or omissions in these claims. It is always recommended that customers consult with their healthcare professional if they have any concerns or questions about the ingredients in the wines they are purchasing.
                            </p>
                        <h3>Ingredients</h3>
                        <div>
                            <p>
                                Grapes
                            </p> 
                            <p>
                                Yeast
                            </p> 
                            <p>Water</p>


                            <p>
                                Common Additives & Compounds
                            </p>
                        </div>
                        <h3>Other Product Attributes</h3>
                            <div>
                                <p>
                                    Grapes
                                </p> 
                                <p>
                                    Yeast
                                </p> 
                                <p>Water</p>


                                <p>
                                    Common Additives & Compounds
                                </p>
                            </div>
                        <h3>
                           Delivery Options
                        </h3>
                        <p>Local Store</p>
                         <p>Direct delivery</p>
                    </div>
                
                </aside>
            </div>
            <footer className="bg-red">
                Footer
            </footer>
            
        </article>
    )
}


function RelatedProductCard({params}) {
    
    return (
        <article className="bg-white"
        >
            <main>
                <img src={vw1}
                    alt=""
                    className="w10-00"
                />
            </main>
            <footer className="pa1-00">
                <h2>country cashew nuts</h2>
                <p>GHC 56.69</p>
                <div className="flex justify-between"> 
                    <Link to ="/wines/cashew-wine/1" className="pa0-50 ba">View More</Link>
                </div>
               
            </footer>
        </article>
    )
}