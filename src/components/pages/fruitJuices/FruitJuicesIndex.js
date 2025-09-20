import { Link } from "react-router-dom";

function FruitJuicesIndex() {
    
    return (
        <div className="w-100 tc mb1-00 bg-white ma1-00 pb6-00"
        > 
            <header className="flex justify-center items-center
                vh-60">
                <h2 className="f3-00">
                    Fruit Juices
                </h2>
            </header>
            
            <section className="flex flex-column justify-between
                container container90
                pa1-00 f2-25 bg-black-60 ttc"
            >
                <div className="flex justify-center items-center mb1-00 vh-75 bg-white-50">
                    <Link to="cocoa-juice"
                        className="white ba pa1-00"
                    >
                        cocoa juice
                    </Link>
                </div>
                <div className="flex justify-center items-center mb1-00 vh-75 bg-blue1">
                    <Link to = "cashew-juice"
                        className="white  ba pa1-00"
                    >
                        cashew juice
                    </Link>
                </div>
                <div className="flex justify-center items-center vh-75 bg-black-50">
                    <Link to = "coffee-juice"
                        className="white ba pa1-00"
                    >
                        coffee juice
                    </Link>
                </div>
            </section>
        </div>
    );
    }

export default FruitJuicesIndex;
