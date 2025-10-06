import PoweredBy from "../molecules/PoweredBy";
import PrimaryContact from "../molecules/PrimaryContact";
import MainFooterNav from "../molecules/MainFooterNav";
import CopyRight from '../molecules/CopyRight'
import AboutCompany from "../molecules/AboutCompany";
import { useEffect, useState } from "react";

function MainFooter() {

    const [isLoading, setIsLoading] = useState(1)

    useEffect (
        () => {
            // setTimeout( 
            //     async () =>{
            setIsLoading(0)        
                    // },
                    //     5000
            // )
        }    
    )
    return (
        
        <footer className="bg-black-10"
        >  
            <div id="VoltaWineryFooter" 
                className="grid gtc12
                    ggap0-25 conta container90
                    black-90
                "
            >
                <div 
                    className={ `gc1s12 gc1s6-s f-cc
                        gc1s4-m  
                        ${isLoading? 'ma0-50 ba b--white br0-50':null}`
                    }
                    
                >
                    {isLoading ? 
                        <div className="fcc pv2-00 ph1-00 w-80
                             
                            "
                        >
                            <div className="w-100 ba b--white pv1-00 mb0-25 bg-white-40"></div>
                            <p className="w-100 ba b--white pv0-50 mb0-25 bg-white-40"></p>
                            <p className="w-100 ba b--white pv0-50 mb0-25 bg-white-40"></p>
                            <p className="w-100 ba b--white pv0-50 mb0-25 bg-white-40"></p>
                            <p className="w-100 ba b--white pv1-00 mb0-25 bg-white-40"></p>
                            <p className="w-100 ba b--white pv1-25 mb0-25 bg-white-40"></p>
                            <p className="w-100 ba b--white pv0-75 mb0-25 bg-white-40"></p>
                            
                        </div> :
                        <PrimaryContact 
                            name="Volta Winery"
                            streetaddress="3 Amexoe Doe Crescent"
                            city="Ho"
                            region="Volta Region"
                            country="Ghana"
                            mobileNumber="024 877 2148"
                            primaryEmail="info@voltawinery.com"
                        />      
                    }
                </div>
        
                <div className={`gc1s12 gc7s6-s gc9s4-m f-cc tc br0-50
                    ${isLoading ? 'ma0-50 ba b--white': null}`}
                >
                    {isLoading ?
                        <div className="pv1-00 ph2-00 w-100">
                            <p className="w-100 ba b--white pv3-00 mb1-00 bg-white-40"></p>
                            <p className="w-100 ba b--white pv2-00 mb0-00 bg-white-40"></p>
                        </div>
                        :
                        <AboutCompany />
                    }
                    
                    
                </div>
                <div className={`gc1s12 gc5s4-m gr1s1-m 
                    f-cc tc
                    ${isLoading ? 'ma0-50 ba b--white': null}`}
                >    
                    {isLoading ?
                        <div className="w-30 pv0-50">
                            <div className="ba b--white pv3-00 bg-white-40">

                            </div>
                        </div>   
                        :
                        <MainFooterNav />
                    }
                    
                </div>
                <div className={`gc1s12 fcc tc ma0-50 ${isLoading ? 'ba b--white mb0-50':null}`}>
                    {isLoading ? 
                        <div className="w-100 flex f-cc mv0-00 tc">
                            <p className="w-40 ma0-50 ba tc  b--white pv0-75 bg-white-40"></p>
                        </div>
                        :
                        <CopyRight />
                    } 
                </div>
            </div>

            <div id="PoweredBy"
                className="pa0-50 bg-gray tc w-100">
                <PoweredBy />
            </div>
            
        </footer>
    );
    
}

export default MainFooter;



