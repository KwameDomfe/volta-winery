import { Link } from "react-router-dom";
import asd from '../../../assets/images/placeholders/square.jpg'
function InfoIndex() {
    
    return (
        <div className="w-100 tc bg-white ma1-00 pb6-00 mt5-00"
        > 
            <header className="grid gtc2
                "
            >
                <img src={asd}
                    alt=""
                    className="gc1s2 gr1s1 cover vh-60"
                />
                <h2 className="gc1s2 gr1s1 
                    flex justify-center items-center 
                    mb0-00
                    f3-00 
                    white-90 bg-black-50"
                >
                    Infodesk
                </h2>
                
            </header>
            <section className="container container90 f1-25 pb4-00"
            >
                <h2 className="pv2-00"
                >
                    Our Odyssey
                </h2>
                <p>
                    Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice .

                    Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice .

                    Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice .
                    Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice .

                    Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice .

                </p>
                <p>
                    Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice .

                    Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice .

                    Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice .
                    Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice .

                    Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice .
                </p>
                <p>
                    Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice .

                    Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice .

                    Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice .
                </p>
            </section>
            <section className="grid gtc12 ggap0-50
                container container90 h-100
                ph8-00 bg-black-6 white-90 ttc"
            >
                <div className="gc1s4 gr1s1
                    bg-blue0 "
                >
                    <Card 
                        title="Merchant Shops"
                        description="Visit our merchant shop and be a merchant shop."
                        link="shops"
                    />
                </div>
                <div className="gc9s4 gr1s1 bg-black-80">
                   <Card 
                        title="Location"
                        description="Pay us a visit at our factory at Ho."
                        link="location"

                    />
                </div>
                <div className="gc5s4 gr1s1 flex justify-center items-center bg-blue1">
                    <Card 
                        title="Contacts"
                        description="Would you like to contact us?"
                        link="contacts"
                    />
                </div>
                <div className="gc5s4 gr2s1 flex justify-center items-center bg-gold">
                    <Card 
                        title="Management"
                        description="Meet the mangement of Volta Winery"
                        link="management"
                    />
                </div>
                <div className="gr2s1 gc1s4 flex justify-center items-center bg-blue3">
                    <Card 
                        title="Research and Development"
                        description="Find out more about our research and development"
                        link="research-and-development"
                    />
                </div>
                <div className="gr3s1 gc9s4 flex justify-center items-center bg-blue1">
                    <Card 
                        title="Mission Vision and Values"
                        description="We have a clear Mission Vision and Values"
                        link="mission-vision-and-values"
                    />
                </div>
                <div className="gr2s1 gc9s4 flex justify-center items-center bg-black-50">
                    <Card 
                        title="History"
                        description="We have a very rich history..."
                        link="history"
                    />
                </div>
                <div className="gr3s1 gc1s4 flex justify-center items-center bg-black-50">
                    <Card 
                        title="Workshops"
                        description="Our wine workshops are open to the public."
                        link="workshops"
                    />
                </div>
                <div className="gr3s1 gc5s4 flex justify-center items-center bg-black-10">
                    <Card 
                        title="Other Topics"
                        description="Other topic overview goes here."
                        link="other-topics"
                    />
                </div>
            </section>
            {/* <h2>
                Option 2
            </h2>
            <section className="grid gtc12 ggap0-50
                container container90 h-100
                ph8-00 bg-black-6 white-90 ttc"
            >
                <div className="gc1s8 gr1s2
                    bg-blue0 "
                >
                    <Card 
                        title="Merchant Shops"
                        description="Visit our merchant shop and be a merchant shop."
                        link="shops"
                    />
                </div>
                <div className="gc9s4 gr1s1 bg-black-80">
                   <Card 
                        title="Location"
                        description="Pay us a visit at our factory at Ho."
                        link="location"

                    />
                </div>
                <div className="gc5s8 gr4s2 flex justify-center items-center bg-blue1">
                    <Card 
                        title="Contacts"
                        description="Would you like to contact us?"
                        link="contacts"
                    />
                </div>
                <div className="gc1s4 gr4s1 flex justify-center items-center bg-gold">
                    <Card 
                        title="Management"
                        description="Meet the mangement of Volta Winery"
                        link="management"
                    />
                </div>
                <div className="gr5s1 gc1s4 flex justify-center items-center bg-blue3">
                    <Card 
                        title="Research and Development"
                        description="Find out more about our research and development"
                        link="research-and-development"
                    />
                </div>
                <div className="gr3s1 gc9s4 flex justify-center items-center bg-blue1">
                    <Card 
                        title="Mission Vision and Values"
                        description="We have a clear Mission Vision and Values"
                        link="mission-vision-and-values"
                    />
                </div>
                <div className="gr2s1 gc9s4 flex justify-center items-center bg-black-50">
                    <Card 
                        title="History"
                        description="We have a very rich history..."
                        link="history"
                    />
                </div>
                <div className="gr3s1 gc1s4 flex justify-center items-center bg-black-50">
                    <Card 
                        title="Workshops"
                        description="Our wine workshops are open to the public."
                        link="workshops"
                    />
                </div>
                <div className="gr3s1 gc5s4 flex justify-center items-center bg-black-10">
                    <Card 
                        title="Other Topics"
                        description="Other topic overview goes here."
                        link="other-topics"
                    />
                </div>
            </section> */}
        </div>
       
    );
    }

export default InfoIndex;


function Card ({title, description, link}) {
    return (
        <figure className="grid gtc1 w-100"
        > 
            <img src={asd}
                alt=""
                className="gc1s1 gr1s1 w-100 h-100 cover"
            />
            <figcaption className="gc1s1 gr1s1 
                flex flex-column justify-end items-center 
                w-100
                pa1-00
                bg-black-50">
                <h3 className="mb0-00">
                    {title}
                </h3>
                <div className="mv1-00 ">
                    <p className="dn mb2-00">
                        {description}
                    </p>
                    <p>
                        <Link to = {link}
                            className="gold  ba ph0-50 pv0-25"
                        >
                            explore more
                        </Link>
                    </p>
                </div>
                
            </figcaption>
            
        </figure>  
    )
}