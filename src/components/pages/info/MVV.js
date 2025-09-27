// import { Link } from "react-router-dom";
// import vw1 from "../../assets/images/wines/vw_1.jpg";
import vw2 from "../../../assets/images/placeholders/location.png";

function MVV() {
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
                        Mission Vision and Values
                    </h2>
                </hgroup>
                
                <section className="flex flex-column justify-center items-center pv4-00 white-90"
                >
                    <h2>Volta Winery's products are backed by Mission Vision and Values....</h2>
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
                <section className="">
                    <header className="
                        tc flex flex-column justify-center items-center
                        bg-white
                        mb4-0 pv2-00"
                    >
                        <h2 className="mb0-00">YWhat we have done in terms of Mission Vision and Values</h2>
                    </header>
                    
                </section>
            </main>
            
            <footer className="flex justify-center items-center h6-00 bg-blue0 white-90 tc"
            >
                Volta Winery || Infodesk || Mission Vision and Values
            </footer>
        </article>
        
    );
    }

export default MVV;


// function MVVCard(params) {
//     return (
//         <article className="bg-white"
//         >
//             <main>
//                 <img src={vw2}
//                     alt=""
//                     className="w-100"
//                 />
//             </main>
//             <footer className="pa1-00">
//             </footer>
//         </article>
//     )
// }