import { HiOutlineMail } from 'react-icons/hi';
import SocialNav from './SocialNav';

const PrimaryContact = (
    {   name = "Company Name", 
        streetaddress = "Street Address", 
        city = "City",
        region = "Region",
        country = "Ghana",
        primaryEmail = "info@kdadesign.tech",
        mobileNumber = "024 928 24 88",

    }
) => {
        return (
            <div id="PrimaryContact"
                className="flex flex-column items-center justify-center pa1-00"
            >
                <address className="mb0-50"
                >
                    <h2
                        className="mb1-00 f1-50 tc"
                    >
                        {name}
                    </h2>
                    <div className=" tcf1-00 w-100 mb0-50 tc" 
                        itemProp="streetAddress"
                    >
                        <div className="mb0-25">{streetaddress}, </div>
                        <div className="mb0-25">{city}, {region}</div>
                        <div className="">{country}</div>
                    </div>
                </address>
                <div id="email" 
                    className="mb0-50 "
                >
                    <a title="Send us a Mail" 
                        rel="noopener noreferrer" 
                        // aria-current="page" 
                        className="" 
                        href="/" 
                        target="_blank"
                    >
                        <div className="flex items-center
                            ph0-50 
                            ba br5-00 b--white-90"
                        >
                            <HiOutlineMail 
                                className="w1-50 h2-00 mr0-50"
                            />
                            <div>{primaryEmail}</div> 
                        </div>
                    </a>
                    
                </div>
                <div id="mobile"
                    className="mb1-00"
                >
                    <a href="tel:202-387-2700" 
                        className="f1-25"
                        title="Get in Thouch with Us"
                    >
                        {mobileNumber}
                    </a>
                </div>
                <SocialNav /> 
            </div>
        )
    }

export default PrimaryContact