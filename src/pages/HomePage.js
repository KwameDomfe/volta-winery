import { Link } from "react-router-dom";
import fff from "../assets/images/wines/vw_18.jpg";
import ggg from "../assets/images/wines/cashewWine/vw_13.jpg";
import hhh from "../assets/images/wines/cocoaWine/vw_5.jpg";
function HomePage() {
    
    return (
        <article className="w-100 mt5-00">
            <section id=""
                className="grid gtc12"

            >
                <img src={fff}
                    className="gc1s12 gr1s1 vh-100 cover"
                    alt="tree"
                />
                <div className="gc1s12 gr1s1
                    grid gtc12
                    vh-100 bg-black-60 white-90
                   "
                >
                    <div className="gc4s8 gr1s1 mt8-00">
                        <h2 className="f6-00">
                            Volta Wines
                        </h2>
                        <p className="f2-50">People who wonder whether the glass is half empty or half full are missing the point.</p>
                        <p className="f2-50">The glass is refillable.</p>
                        <div className="flex ggap1-00 mt4-00">
                            <div className="mb2-00 f1-50 pa0-50 gold ba tc">
                                <Link to ="wines"
                                    className="gold"
                                >
                                    Read More...
                                </Link>
                            </div>
                            <div className="mb2-00 f1-50">
                                <button disabled className="pa0-50">
                                    order wines
                                </button>
                            </div>
                            
                        </div>
                    </div>
                    
                    <div className="gc7s5 gr2s1 flex ggap1-00 h16-00"
                    >
                        <figure className="ba b--gold bw2"
                        >
                            <img src={ggg}
                                alt=""
                                className="h-100 w-100 "
                            />
                        </figure>
                        <figure className="ba b--gold bw2">
                            <img src={fff}
                                alt=""
                                className="w-100 h-100"
                            />
                        </figure>
                        <figure className="ba b--gold bw2">
                            <img src={hhh}
                                alt=""
                                className="w-100 h-100"
                            />
                        </figure>
                    </div>
                </div>
                
            </section>
            <section id=""
                className=""
            >
                <div className="flex flex-column justify-center items-center 
                    container container90 w-100
                    vh-100 bg-blue0"
                >
                    <h2 className="f4-00">
                        Volta Juices Section
                    </h2>
                    <div>
                        <div className="mb2-00 f2-00 pa1-00 ba tc">
                            <Link to ="fruit-juices">
                                Read More...
                            </Link>
                        </div>
                        <div className="mb2-00 f1-50 pa2-00">
                            <button disabled className="pa1-00">
                                order fruit juices
                            </button>
                        </div>
                        
                    </div>
                </div>
            </section>
            <section id=""
                className=""
            >
                <div className="flex flex-column justify-center items-center 
                    container container90 w-100
                    vh-100 bg-white"
                >
                    <h2 className="f4-00">
                        Volta Nuts Section
                    </h2>
                    <div>
                        <div className="mb2-00 f2-00 pa1-00 ba tc">
                            <Link to ="nuts">
                                Read More...
                            </Link>
                        </div>
                        <div className="mb2-00 f1-50 pa2-00">
                            <button disabled className="pa1-00">
                                order nuts
                            </button>
                        </div>
                        
                    </div>
                </div>
            </section>
        </article> 
    );
}

export default HomePage;
