import { Link } from "react-router-dom";
// import { socialNav } from "../../assets/data/menuNav";
import { HiOutlineMail } from 'react-icons/hi';
import { FaNutritionix } from 'react-icons/fa';
import { PiWineFill } from 'react-icons/pi';
import { GiManualJuicer } from 'react-icons/gi';
import { BiSolidBookContent } from 'react-icons/bi';
import SocialNav from "../molecules/SocialNav";
// const mainmenu
function MainFooter() {
    return (
        <div>
            <footer className="flex flex-column justify-between items-center bg-black-90
                w-100"
            >
                {/* <article id="mainFooter" 
                    className="grid gc1s12 container container90"
                >
                    <div id="" 
                        className="gc1s12 grid gtc12 ggap1-00 
                            min-vh-100
                            " 
                        tabIndex="0" 
                        title="" 
                        aria-label=""
                    >
                        <section id="o_navigation" 
                            className="gr2s1 gc1s12 gr1s1-m bg-black- w-100" 
                            sections=""
                        >
                            <div className="grid gtc1 gtc2-s gtc4-m items-start justify-between ggap0-50 pv1-00 w-100"
                            >
                                { 
                                    menuItems.map(({name,icon,url,subMenu}) => {
                                        
                                        return(
                                            <MenuCard key={name}
                                                name = {name}
                                                icon = {icon}
                                                url = {url}
                                                submenus={subMenu} 
                                            />
                                        )
                                    })
                                }
                               
                            </div>
                        </section>
                        <section id="description_and_address" 
                            className="gc1s12 gr1s1 gr2s1-m gc1s8-m 
                                flex flex-column flex-row-s flex-start 
                                w-100 
                                f1-00 tj
                            "
                        >
                            <div id="GRM_address" 
                                className="flex flex-column justify-betwee items-center w-100 f1-00 tl white-90" 
                               
                            >
                                <figure id="aesl_address--LogoAndName" 
                                    className="flex flex-column justify-center items-center w-100 mb0-50 br0-50 "
                                >
                                    <img src="/grm/static/media/GRM_Logo.23e3bc8c13494d19ee7a.jpeg" 
                                        alt="" className="w5-00 mb0-50 "
                                    />
                                    <div className="tc ttu b">
                                        Volta Winery <br /> 
                                    </div>
                                </figure>
                                <span className="dib f0-75 w-100 tc mb0-50 white-90" 
                                    itemProp="streetAddress"
                                >
                                    <div className="mb0-25">3 Amexoe Doe Crescent, </div>
                                    <div className="mb0-25">Ho, volta region</div>
                                    <div className="mb0-25">GHANA</div>
                                </span>
                                <div id="aesl_address--email" 
                                    className="flex flex-column justify-center  items-center f0-75"
                                >
                                    <a title="Get In Touch on WhatsApp" 
                                        rel="noopener noreferrer" 
                                        aria-current="page" 
                                        className="white-90 tc active" 
                                        href="/" 
                                        target="_blank"
                                    >
                                        <p className="flex items-center justify-between  w-100 pv0-25 ph1-00 ba br5-00 mb0-50  b b--white-90"
                                        >
                                            <HiOutlineMail 
                                                className="w2-00 h2-00 mr0-50"
                                            />
                                            info@voltawinery.com
                                        </p>
                                    </a>
                                </div>
                                <p className="lh-copy tj i ph2-00">
                                    Volta Winery Country Wines made in Ghana.Make sure your glass is half full.We can supply you with Cocoa, Cashew,Coffee and our popular Red Ellen cocoa wine .…
                                </p>
                               
                            </div>
                        </section>
                        <section id="o_subscription" 
                            className="gc1s12 gc1s6-ss gr3s1-s gr2s1-m flex ggap1-00 flex-column flex-row-s flex-column-m bg-blue gc9s4-m w-100"
                        >
                            <form className="" action=""
                            >
                                <fieldset className="flex flex-column justify-between  pv1-00 white-90"
                                >
                                    <legend className="ph0-50"
                                    >
                                        Volta Winery SUBSCRIPTIONS
                                    </legend>
                                    <p>
                                        Follow us on our Social Media channels
                                    </p>
                                    <SocialNav />
                                            
                                    <label htmlFor="email" 
                                        className="dib mv1-00 w-100"
                                    >
                                        Want to do business with Volta Winery, enter your Email here:<input id="email"     
                                            className="w-100 pa0-50 mt1-00" 
                                            name="email" 
                                            type="text" 
                                            placeholder="Enter Your Email" 
                                            autoComplete="true"
                                        />
                                    </label>
                                    <label htmlFor="submit" className=""
                                    >
                                        <input id="submit" 
                                            name="submit" 
                                            className="pa0-50 br0-25 b--none" 
                                            type="submit" 
                                            value="Create Customer Account"
                                        />
                                    </label>
                                </fieldset>
                            </form>
                            <div id="m_otherLinks" 
                                className="grid gtc2 ggap0-25 mt1-00 fw5" 
                                aria-hidden="False"
                            >
                                <div id="m_otherLinks--1" 
                                    className="br1-00 gr1s1 gc2s1" 
                                    data-use-new="true"
                                >
                                    <FigOne img={xxx}
                                        caption="Wines"
                                    />
                                </div>
                                
                                <div id="m_otherLinks--2" 
                                    className=" br1-00 gr2s1 gc1s1" 
                                    data-use-new="true"
                                >
                                        <FigOne img={xxx}
                                        caption="Fruit Juice"
                                    />
                                    
                                </div>
                                <div id="m_otherLinks--2" className=" br1-00 gr1s1 gc1s1" data-use-new="true">
                                    <FigOne img={xxx}
                                        caption="Nuts"
                                    />
                                </div>
                                <div id="m_otherLinks--2" className=" br1-00 gr2s1 gc2s1" data-use-new="true">
                                    <FigOne img={xxx}
                                        caption="Infodesk"
                                    />
                                </div>
                            </div>
                        </section>
                    </div>
                </article> */}
                <div className="grid gtc12
                     pv1-00 bb white-90"
                >
                    <div className="gc1s12 gc1s6-s gc1s4-m">
                        <div className=" flex flex-column  items-center justify-center mb0-50"
                        >
                            <h2
                                className="dib mb1-00 f2-00"
                            >
                                Volta Winery
                            </h2>
                            <span className="dib f1-00 w-100 mb0-50 white-90 tc" 
                                itemProp="streetAddress"
                            >
                                <div className="mb0-25">3 Amexoe Doe Crescent, </div>
                                <div className="mb0-25">Ho, volta region</div>
                                <div className="mb0-25">GHANA</div>
                            </span>
                        </div>
                        <div id="aesl_address--email" 
                            className="flex flex-column justify-center  items-center f0-75"
                        >
                            <a title="Get In Touch on WhatsApp" 
                                rel="noopener noreferrer" 
                                aria-current="page" 
                                className="white-90 tc active" 
                                href="/" 
                                target="_blank"
                            >
                                <p className="flex items-center justify-between  w-100 ph0-50 ba br5-00 mb0-50 b--white-90"
                                >
                                    <HiOutlineMail 
                                        className="w1-50 h2-00 mr0-50"
                                    />
                                    info@voltawinery.com
                                </p>
                            </a>
                            <div className="mb1-00">
                                <a href="tel:202-387-2700" className="f1-25 white-90"
                                >
                                    024-387-2700
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="gc1s12 gc7s6-s gc8s4-m flex flex-column items-center">
                        <p className="lh-copy tj i ph2-00 mb2-00">
                            Volta Winery Country Wines made in Ghana.Make sure your glass is half full.We can supply you with Cocoa, Cashew,Coffee and our popular Red Ellen cocoa wine .…
                        </p>
                        <div className="w-60"><SocialNav />    </div>
                    </div>
                           
                    <nav className="gc1s12 gc5s3-m gr1s1-m flex items-center justify-center bl br mv2-00 f1-50 w-100"
                    >
                        {/* <ul className="flex flex-column justify-center items-center w-100 "
                        >
                            <li>
                                <Link to = "wines/"
                                    className="white-9"
                                >
                                    Wines
                                </Link>

                                
                            </li>
                    
                            <li>
                                <Link to = "fruit-juices"  
                                    className="white-9"
                                >
                                    Fruit Juices
                                </Link>
                            </li>
                
                    
                            <li>
                                <Link to = "/nuts"
                                    className="white-9"
                                >
                                    Nuts
                                </Link>
                            </li>
                            <li>
                                <Link to = "/infodesk"
                                    className="white-9"
                                >
                                    Infodesk
                                </Link>
                            </li>
                        </ul>  */}
                        <ul className="grid gtc2 ggap0-25 justify-center items-center "
                        >
                            <li className="flex justify-center items-center ba b--white-10 w2-50 h2-50 pa0-50">
                                <Link to = "wines/"
                                    className="white-90"
                                >
                                    <PiWineFill />
                                </Link>

                                
                            </li>
                    
                            <li className="flex justify-center  items-center ba b--white-10 w2-50 h2-50 pa0-50">
                                <Link to = "fruit-juices"  
                                    className="white-9"
                                >
                                    <GiManualJuicer  />
                                </Link>
                            </li>
                
                    
                            <li className="flex justify-center  items-center ba b--white-10 w2-50 h2-50 pa0-50">
                                <Link to = "/nuts"
                                    className="white-9"
                                >
                                    <FaNutritionix />
                                </Link>
                            </li>
                            <li className="flex justify-center  items-center ba b--white-10 w2-50 h2-50 pa0-50">
                                <Link to = "/infodesk"
                                    className="white-9"
                                >
                                    <BiSolidBookContent />
                                </Link>
                            </li>
                        </ul> 
                    </nav>

                </div>
                <div className="white-90 pv2-00">
                    (Voltawinery, &copy; {new Date().getFullYear()})
                </div>
                <div className="gc1s12 pa1-00 bg-gray w-100">
                    <div id="m__poweredby" 
                        className="flex items-center justify-center flex-column  white-90 f0-75"
                    >
                        <small className="mb0-50">powered by:</small>
                        <a className="white-90" href="https://www.kdadesign.tech">
                            <div className="flex">
                                <small className="">kda design technologies</small>
                            </div>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
    
}

export default MainFooter;


// function FigOne({img, caption}) {
//     return (
//         <figure id="recentProjects" 
//             className="flex flex-column items-center justify-center"
//         >
//             <img src={img} 
//                 alt="" 
//                 className="br0-50 w-100"
//             />
//             <figcaption className=" f0-75 h-100 pa0-25 ph0-50 tc  br0-50"
//             >
//                 <a aria-current="page" 
//                     className="gold active" 
//                     href="/church-services/"
//                 >
//                     {caption}
//                 </a>
//             </figcaption>
//         </figure>
//     )
// }

// function MenuCard ({icon, url, name, submenus}) {
//     return (
//         <div className="flex flex-column-m items-center ggap1-00 
//             w-100 
//             pt1-00
//             ba br0-50 b--white-50"
//         >
//             <header>
//                 <h2 className="ml1-00">
//                     <a role="button" 
//                         aria-expanded="false" 
//                         aria-current="page" 
//                         className="white-90 active" 
//                         href={url}
//                     >
//                         {icon} {name}
//                     </a>
//                 </h2>
//             </header>
//             <nav className="white-90 pa0-50" aria-label=""
//             >
//                 <ul className="mt2-0"
//                 >
//                     {
//                         submenus.map(
//                             (sub) => {
//                                 return(
//                                     <li key={sub.name}
//                                         className="mb1-00 "
//                                     >
//                                         <Link className="white-90" to={sub.url}
//                                         >
//                                             {sub.name} 
//                                         </Link>
//                                     </li>
//                                 )
//                             }
//                         )
//                     }
//                 </ul>
//                 ...
//             </nav>
//         </div>
//     )

// }
