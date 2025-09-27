import { Link } from "react-router-dom";
import ppp from "../../../assets/images/fruitJuice/vw_3.jpg";
import ttt from "../../../assets/images/fruitJuice/vw_6.jpg";
import PayUsAVisit from "../../organisms/PayUsAVisit";
// import sss from "../../assets/images/Fruits/vw_7.jpg";
function NutsIndex() {
    
    return (
        <div className="w-100 ma1-00 mb1-00 mt5-00"
        > 
            <header className="grid gtc2
                "
            >
                <img src={ppp}
                    alt=""
                    className="gc1s2 gr1s1 cover vh-60"
                />
                <h2 className="gc1s2 gr1s1 
                    flex justify-center items-center 
                    mb0-00
                    f3-00 
                    white-90 bg-black-50"
                >
                    Nuts
                </h2>
                
            </header>
            <section className="container container90-m tj f1-25-m pb4-00"
            >
                <h2 className="pv2-00"
                >
                    Our Nuts
                </h2>
                <p>
                    Taste our Made in Ghana Nuts our delicious Cocoa Fruit Juice .

                    Taste our Made in Ghana Nuts our delicious Cocoa Fruit Juice .

                    Taste our Made in Ghana Nuts our delicious Cocoa Fruit Juice .
                    Taste our Made in Ghana Nuts our delicious Cocoa Fruit Juice .

                    Taste our Made in Ghana Nuts our delicious Cocoa Fruit Juice .

                </p>
                <p>
                    Taste our Made in Ghana Nuts our delicious Cocoa Fruit Juice .

                    Taste our Made in Ghana Nuts our delicious Cocoa Fruit Juice .

                    Taste our Made in Ghana Nuts our delicious Cocoa Fruit Juice .
                    Taste our Made in Ghana Nuts our delicious Cocoa Fruit Juice .

                    Taste our Made in Ghana Nuts our delicious Cocoa Fruit Juice .
                </p>
                <p>
                    Taste our Made in Ghana Nuts our delicious Cocoa Fruit Juice .

                    Taste our Made in Ghana Nuts our delicious Cocoa Fruit Juice .

                    Taste our Made in Ghana Nuts our delicious Cocoa Fruit Juice .
                </p>
            </section>
            <section className="grid gtc12 ggap1-00 
                container
                pa1-00-m bg-white ttc "
            >
                
                <div className="gc1s12 gr1s1 
                    flex justify-center items-center 
                    bg-white-50"
                >
                <NutsCard
                    name ="Cocoa Fruits Juice"
                    description="Taste our Made in Ghana Nuts our delicious Cocoa Fruit Juice .
                    Taste our Made in Ghana Nuts our delicious Cocoa Fruit Juice .
                    Taste our Made in Ghana Nuts our delicious Cocoa Fruit Juice ."
                    url="cocoa-fruits-juice"
                />
                </div>
                <div className="gc1s12 gc1s6-m gr2s1 
                    flex justify-center items-center 
                    bg-white-50"
                >
                <NutsCard 
                    name="Cashew Fruits Juice"
                    description="Taste our Made in Ghana Nuts our delicious Cocoa Fruit Juice .
                    Taste our Made in Ghana Nuts our delicious Cocoa Fruit Juice .
                    Taste our Made in Ghana Nuts our delicious Cocoa Fruit Juice ."
                    url="cashew-fruits-juice"
                />
                </div>
                <div className="gc1s12 gc7s6-m gr3s1 gr2s1-m 
                    flex justify-center items-center 
                    bg-white-50"
                >
                <NutsCard 
                    name="Coffee Fruits Juice"
                    description="Taste our Made in Ghana Nuts our delicious Cocoa Fruit Juice .
                    Taste our Made in Ghana Nuts our delicious Cocoa Fruit Juice .
                    Taste our Made in Ghana Nuts our delicious Cocoa Fruit Juice ."
                    url="coffee-fruits-juice"
                />
                </div>
            
            
               
            </section> 
            <div className="gc1s12 gr4s1">
                <PayUsAVisit />
            </div>
        </div>
    );
}

export default NutsIndex


function NutsCard ({name, description, url}) {
    return(
       
        <figure className="grid"
        >
            <img src={ttt}
                alt=""
                className="gc1s1 gr1s1 vh-40-m cover"
            />
            <figcaption className="gc1s1 gr1s1
                flex flex-column justify-center items-center
                ph1-00 ph2-00-m ph4-00-l
                white-90 bg-black-50 f1-25-m"
            >
                <h2 className="f2-00 f2-50-l
                    mb2-00 
                    "
                >
                    {name}
                </h2>
                <p className="mb2-00 tj">
                    {description}
                </p>
                <div>
                    <Link to={url}
                        className="white ba b pa0-50 b--gold"
                    > 
                        Explore {name}
                    </Link>
                </div>
                
            </figcaption> 
        </figure>
       
    )
}