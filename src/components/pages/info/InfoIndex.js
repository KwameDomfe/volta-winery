import { Link } from "react-router-dom";

function InfoIndex() {
    
    return (
        <div className="w-100 tc mb1-00 bg-white ma1-00 pb6-00"
        > 
            <header className="flex justify-center items-center
                vh-60">
                <h2 className="f3-00">
                    InfoDesk
                </h2>
            </header>
            
            <section className="flex flex-column justify-between
                container container90
                pa1-00 f2-25 bg-black-60 ttc"
            >
                <div className="flex justify-center items-center mb1-00 vh-75 bg-white-50">
                    <Link to="location"
                        className="white ba pa1-00"
                    >
                        location
                    </Link>
                </div>
                <div className="flex justify-center items-center mb1-00 vh-75 bg-blue1">
                    <Link to = "contacts"
                        className="white  ba pa1-00"
                    >
                        contacts
                    </Link>
                </div>
                <div className="flex justify-center items-center vh-75 bg-black-50">
                    <Link to = "other-topics"
                        className="white ba pa1-00"
                    >
                        Other Topics
                    </Link>
                </div>
            </section>
        </div>
       
    );
    }

export default InfoIndex;
