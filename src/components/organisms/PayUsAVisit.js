import ThumbnailPortrait from '../atoms/ThumbnailPortrait'
import fff from '../../assets/images/voltaWinery/vw_19.jpg'
import { Link } from 'react-router-dom'

const PayUsAVisit = () => {
    
    return (
        <section className="flex justify-center items-center 
            w-100
            mv1-00 tc
            bg-black-50 
            white-90
            "
        >
            <div className="flex flex-column flex-row-m 
                h-100
                "
            >
                <div className="w-50-m vh-50-m
                    "
                >
                    <ThumbnailPortrait image={fff}
                        description="Hello World."
                        objectFit="cover"
                        height="vh-30 h-100-m"
                    />
                </div>
                <div className="f-cc flex-column 
                    w-50-m 
                    pv4-00 pa1-00
                    "
                >
                    <h2 className="f2-50"
                    >
                        Pay Us A Visit...
                    </h2>
                    <p className="w-60-s w-100-m
                        f1-25 tj 
                        "
                    >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Sit magni, assumenda officia quas accusantium place quae.
                    </p>
                    <div className="justify-around flex w-100"
                    >
                        <Link className="pv0-50 ba ph0-50 
                            br0-25 bg-gold b--none 
                            f1-25
                            "
                            to="/infodesk/contacts"
                        >
                        Directions ...
                        </Link>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default PayUsAVisit