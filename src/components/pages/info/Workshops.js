// import { Link } from "react-router-dom";
// import vw1 from "../../assets/images/wines/vw_1.jpg";
import vw2 from "../../../assets/images/placeholders/location.png";
import LayoutHeader from "../../layouts/LayoutHeader";

function Workshops() {
    
    return (
        <article className="mt5-00-m w-100
            "
        >
            <LayoutHeader title="Workshops"
                overview="Volta Winery can be  through the following workshops..."
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
                        <h2 className="mb0-00">YWhat we have done in terms of workshops.</h2>
                    </header>
                    
                </section>
            </main>
            
            <footer className="flex justify-center items-center h6-00 bg-blue0 white-90 tc"
            >
                Volta Winery || Infodesk || Workshops
            </footer>
        </article>
        
    );
    }

export default Workshops;


// function WorkshopsCard(params) {
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