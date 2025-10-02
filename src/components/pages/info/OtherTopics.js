// import { Link } from "react-router-dom";
// import vw1 from "../../assets/images/wines/vw_1.jpg";
import vw2 from "../../../assets/images/placeholders/location.png";
import LayoutHeader from "../../layouts/LayoutHeader";

function OtherTopics() {
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
            <LayoutHeader title="Other Topics"
                overview="Volta Winery's products are ...."
                image={vw2}
                details={`Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice. Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice. Taste our Made in Ghana Wines and our delicious Cocoa Fruit Juice.`
                }
            
            />
            <main>
                <section className="pl1-00">
                    <header className="
                        tc flex flex-column justify-center items-center
                        bg-white
                        mb4-0 pv2-00"
                    >
                        <h2 className="mb0-00">YWhat we have done in terms of Other Topics.</h2>
                    </header>
                    
                </section>
            </main>
            
            <footer className="flex justify-center items-center h6-00 bg-blue0 white-90 tc"
            >
                Volta Winery || Infodesk || Other Topics
            </footer>
        </article>
        
    );
    }

export default OtherTopics;


// function OtherTopicsCard(params) {
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