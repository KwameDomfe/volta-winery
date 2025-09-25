import { Link } from "react-router-dom";
import ppp from "../../../assets/images/fruitJuice/vw_3.jpg";
import ttt from "../../../assets/images/fruitJuice/vw_6.jpg";
import PayUsAVisit from "../../organisms/PayUsAVisit";
// import sss from "../../assets/images/Fruits/vw_7.jpg";
function FruitJuiceIndex() {
    
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
                    Fruits Juices
                </h2>
                
            </header>
            <section className="container container90 f1-25 pb4-00"
            >
                <h2 className="pv2-00"
                >
                    Our Fruits Juices
                </h2>
                <p>
                    Taste our Made in Ghana Fruits and our delicious Cocoa Fruit Juice .

                    Taste our Made in Ghana Fruits and our delicious Cocoa Fruit Juice .

                    Taste our Made in Ghana Fruits and our delicious Cocoa Fruit Juice .
                    Taste our Made in Ghana Fruits and our delicious Cocoa Fruit Juice .

                    Taste our Made in Ghana Fruits and our delicious Cocoa Fruit Juice .

                </p>
                <p>
                    Taste our Made in Ghana Fruits and our delicious Cocoa Fruit Juice .

                    Taste our Made in Ghana Fruits and our delicious Cocoa Fruit Juice .

                    Taste our Made in Ghana Fruits and our delicious Cocoa Fruit Juice .
                    Taste our Made in Ghana Fruits and our delicious Cocoa Fruit Juice .

                    Taste our Made in Ghana Fruits and our delicious Cocoa Fruit Juice .
                </p>
                <p>
                    Taste our Made in Ghana Fruits and our delicious Cocoa Fruit Juice .

                    Taste our Made in Ghana Fruits and our delicious Cocoa Fruit Juice .

                    Taste our Made in Ghana Fruits and our delicious Cocoa Fruit Juice .
                </p>
            </section>
            <section className="grid gtc12 ggap1-00 
                container container90
                pa1-00 bg-white ttc "
            >
                
                <div className="gc2s10 gr1s1 
                    flex justify-center items-center 
                    bg-white-50"
                >
                <FruitJuiceCard
                    name ="Cocoa Fruits Juice"
                    url="cocoa-fruits-juice"
                />
                </div>
                <div className="gc2s5 gr2s1 
                    flex justify-center items-center 
                    bg-white-50"
                >
                <FruitJuiceCard 
                    name="Cashew Fruits Juice"
                    url="cashew-fruits-juice"
                />
                </div>
                <div className="gc7s5 gr2s1 
                    flex justify-center items-center 
                    bg-white-50"
                >
                <FruitJuiceCard 
                    name="Coffee Fruits Juice"
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

export default FruitJuiceIndex


function FruitJuiceCard ({name, url}) {
    return(
       
        <figure className="grid"
        >
            <img src={ttt}
                alt=""
                className="gc1s1 gr1s1 vh-40 cover"
            />
            <figcaption className="gc1s1 gr1s1
                flex flex-column justify-center items-center
                ph4-00 
                white-90 bg-black-50 f1-25"
            >
                <h2 className="f3-00  
                    mb2-00 
                    "
                >
                    {name}
                </h2>
                <p className="mb2-00">
                    Taste our Made in Ghana Fruits and our delicious Cocoa Fruit Juice .
                    Taste our Made in Ghana Fruits and our delicious Cocoa Fruit Juice .
                    Taste our Made in Ghana Fruits and our delicious Cocoa Fruit Juice .
                </p>
                <div>
                    <Link to={url}
                        className="white ba pa1-00"
                    > 
                        Explore {name}
                    </Link>
                </div>
                
            </figcaption> 
        </figure>
       
    )
}