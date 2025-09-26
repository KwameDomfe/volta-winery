import { Link } from 'react-router-dom'

const HeroSectionBannerDetails = ({title, description1, description2, url}) => {
    return (
        <div className="ph0-50 pv1-00 pv2-00-m  bg-black-40 br1-00">
            <hgroup>
                <h2 className="f2-00 f3-50-m ttc">
                    {title}
                </h2>
                <div className="mv2-00">
                    <p className="f1-25 f1-75-m">{description1}</p>
                    <p className="f1-00 f1-75-m b">{description2}</p>
                </div> 
            </hgroup>

            <div className='dn db-m mb2-00'>
                <h2>
                    Sales Shops:
                </h2>
                <div className='flex '>
                    <div className='mr1-00 ba pa1-00'>
                        Shop 1, Ho.
                    </div>
                    <div className='mr1-00 ba pa1-00'>
                        Shop 2, Ho
                    </div>
                    <div className='mr1-00 ba pa1-00'>
                        Shop 3, Accra.
                    </div>
                    <div className='mr1-00 ba pa1-00'>
                        Shop5, Tema
                    </div>
                </div>
            </div>
            
            <div className="w-100">
                <h2>
                   Attractive Wholesale Discounted Prices:
                </h2>
                <div className='flex flex-column'>
                    <div className='mr1-0  pb1-00'>
                        5% Discount on all selected products
                    </div>
                    <div className='mr1-0  pb1-00'>
                        10% Discount on branded produts for special occasions.
                    </div>
                </div>
            </div>
            <div className="flex ggap1-00 mt2-00">
                <div className=" f1-25 pa0-50 gold ba tc"
                >
                    <Link to ={url}
                        className="gold"
                    >
                        Know More...
                    </Link>
                </div>
            </div>
            <div className="flex justify-center ggap1-00 mt2-00">
                <div className="flex justify-between f1-25 gold tc w-20-m ba mb2-00"
                >
                    <button className="w2-50 h2-50 pa0-50 bg-transparent white-90 b--none pointer">
                        O
                    </button>
                    <button className="w2-50 h2-50 pa0-50 bg-transparent white-90 b--none pointer">
                        O
                    </button>
                    <button className="w2-50 h2-50 pa0-50 bg-transparent white-90 b--none pointer">
                        O
                    </button>
                </div>
               
            </div>
        </div>
        
    )
}

export default HeroSectionBannerDetails