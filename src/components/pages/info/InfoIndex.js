import { Link } from "react-router-dom";
import asd from '../../../assets/images/placeholders/square.jpg'
import { BsClockHistory } from 'react-icons/bs';
import { TbBrandShopee } from 'react-icons/tb';
// import { VscLocation } from 'react-icons/vsc';
import { GiArchiveResearch } from 'react-icons/gi';
import { MdOutlineManageAccounts } from 'react-icons/md';
import { MdOutlineMapsHomeWork } from 'react-icons/md';
import { PiTelevisionLight } from 'react-icons/pi';
import { MdOutlineContactEmergency } from 'react-icons/md';
import { BsTextRight } from 'react-icons/bs';
function InfoIndex() {
    
    return (
        <div className="w-100 tc ma1-00 mt5-00"
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
            <section className="container f1-25 pb2-00 tj"
            >
                <h2 className="pt2-00"
                >
                    Our Odyssey
                </h2>
                <div>
                    Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice .

                    Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice ... ... ...

                    <div className="mt1-00">
                        <Link to="">
                            Read More...
                        </Link>
                    </div>

                    {/* Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice .
                    Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice .

                    Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice . */}

                </div>
                {/* <p>
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
                </p> */}
            </section>
            <section className="grid gtc12 ggap0-50
                container container90-m
                ph2-00-m ph8-00-l  white-90 ttc"
            >
                <div className="gc1s4 gr1s1
                    shadow-5
                    "
                >
                    <Card 
                        title="Merchant Shops"
                        description="Visit our merchant shop and be a merchant shop."
                        link="shops"
                        icon = {<TbBrandShopee />}
                    />
                </div>
                <div className="gc5s4 flex 
                    justify-center items-center
                    shadow-5"
                >
                    <Card 
                        title="Contacts"
                        description="Would you like to contact us?"
                        link="contacts"
                        icon = {<MdOutlineContactEmergency />}
                    />
                </div>
                <div className="gc9s4 gr1s1
                    shadow-5 bg-gold br0-50"
                >
                   {/* <Card 
                        title="Location"
                        description="Pay us a visit at our factory at Ho."
                        link="location"
                        icon = {<VscLocation />}

                    /> */}
                </div>
                
                <div className="gc5s4 gr2s1 
                    flex justify-center items-center
                    shadow-5"
                >
                    <Card 
                        title="Management"
                        description="Meet the mangement of Volta Winery"
                        link="management"
                        icon = {<MdOutlineManageAccounts />}
                    />
                </div>
                <div className="gr2s1 gc1s4 
                    flex justify-center items-center
                    shadow-5"
                >
                    <Card 
                        title="R&D"
                        description="Find out more about our research and development"
                        link="research-and-development"
                        icon = {<GiArchiveResearch />}
                    />
                </div>
                <div className="gr3s1 gc9s4 flex justify-center items-center shadow-5"
                >
                    <Card 
                        title="Mission Vision and Values"
                        description="We have a clear Mission Vision and Values"
                        link="mission-vision-and-values"
                        icon = {<PiTelevisionLight />}
                    />
                </div>
                <div className="gr2s1 gc9s4 flex justify-center items-center shadow-5"
                >
                    <Card 
                        title="History"
                        description="We have a very rich history..."
                        link="history"
                        icon = {<BsClockHistory />}
                    />
                </div>
                <div className="gr3s1 gc1s4 flex justify-center items-center shadow-5"
                >
                    <Card 
                        title="Workshops"
                        description="Our wine workshops are open to the public."
                        link="workshops"
                        icon = {<MdOutlineMapsHomeWork />}
                    />
                </div>
                <div className="gr3s1 gc5s4 flex justify-center items-center shadow-5"
                >
                    <Card 
                        title="Other Topics"
                        description="Other topic overview goes here."
                        link="other-topics"
                        icon = {< BsTextRight />}
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


function Card ({title, link, icon}) {
    return (
        <Link to = {link}
            className="w-100 h-100"
        >
            <figure className="flex flex-column items-center justify-center 
                h-100 w-100 
                pv0-25 bg-white-90
                ba b--black-10 br0-50"
            > 
                <h2 className="flex h2-00 w2-00 mb0-00 cover">
                    {icon}
                </h2>
                <figcaption className=" 
                    flex flex-column justify-end items-center 
                    w-100
                    
                    bg-black-5">
                    <p className="f0-75 mb0-00">
                        {title}
                    </p>
                </figcaption>
                
            </figure> 
        </Link> 
    )
}