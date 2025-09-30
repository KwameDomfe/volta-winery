// import { Link } from "react-router-dom";
// import vw1 from "../../assets/images/wines/vw_1.jpg";
import vw2 from "../../../assets/images/voltaWinery/vw_17.jpg";
import vw3 from "../../../assets/images/placeholders/location.png";
import { FaAnglesLeft } from 'react-icons/fa6';
import { FaAnglesRight } from 'react-icons/fa6';
function RandD() {
    // const u = [
    //     {   id:'1',
    //         name:'country cashew wine'
    //     },
    //      {   id:'2',
    //         name:'urban cashew wine'
    //     },
    //      {   id:'3',
    //         name:'elite cashew wine'
    //     },
    // ]

    return (
        <article className="mt5-00-m
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
                    <h2 className=" mb0-00 f3-00 white-90">
                       History
                    </h2>
                </hgroup>
                
                <section className="flex flex-column justify-center items-center pv4-00 white-90"
                >
                    <h2>Volta Winery can be Historyed through the following addresses.</h2>
                    <p>
                        Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice.
                    </p>
                    <p>
                        Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice.
                    </p>
                    <p>
                        Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice.
                    </p>

                </section>
            </header>
            
            <main>
                <div className=" mv1-00">
                    
                    <div id="HistorysAndDirection" className="flex flex-column justify-start">
                        <div>
                            <header className="tc">
                                <hgroup className="mb2-00">
                                    <h2>A worthwhile journey</h2> 
                                
                                    <p className="lh-copy">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dicta nihil voluptatibus accusantium aspernatur beatae eius nisi fugiat, consequatur quod minus nesciunt laboriosam libero, quibusdam perferendis ut rerum provident et.
                                    </p>
                                    <p className="lh-copy">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dicta nihil voluptatibus accusantium aspernatur beatae eius nisi fugiat, consequatur quod minus nesciunt laboriosam libero, quibusdam perferendis ut rerum provident et.
                                    </p>
                                </hgroup>
                            </header>
                            <div className="flex items-center justify-between pa1-00">
                                <div className="w-10 tc">
                                    <FaAnglesLeft className="f3-00"/>
                                </div>
                                <div className="grid gtc1 gtc2-s gtc4-m items-center justify-center ggap1-00 tc">
                                    <div className=" flex items-center justify-center  bg-black-20"
                                    >
                                        <figure>
                                            <figcaption className="pa1-00 mt1-00 ">
                                                <h3 className="mv1-00">Historical Milestone One</h3>
                                                <p className="mb2-00">History Details</p>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="flex items-center justify-center bg-black-20 ">
                                        <figure>
                                            <figcaption className="pa1-00 mt1-00 ">
                                                <h3 className="mv1-00">Historical Milestone One</h3>
                                                <p className="mb2-00">History Details</p>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="flex items-center justify-center  bg-black-20"
                                    >
                                        <figure>
                                            <figcaption className="pa1-00 mt1-00 ">
                                                <h3 className="mv1-00">Historical Milestone One</h3>
                                                <p className="mb2-00">History Details</p>
                                            </figcaption>
                                        </figure>
                                    </div>
                                     <div className="flex items-center justify-center bg-black-20 ">
                                        <figure>
                                            <figcaption className="pa1-00 mt1-00 ">
                                                <h3 className="mv1-00">Historical Milestone One</h3>
                                                <p className="mb2-00">History Details</p>
                                            </figcaption>
                                        </figure>
                                    </div>
                            
                                </div>
                                <div className="w-10 tc">
                                    <FaAnglesRight className="f3-00"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <footer className="tc">
                        <h2>Historys Footer</h2>
                    </footer>
                </div>
            </main>
            
            <footer className="flex justify-center items-center h6-00 bg-blue0 white-90 tc"
            >
                Volta Winery || Infodesk || History
            </footer>
        </article>
        
    );
    }

export default RandD;


