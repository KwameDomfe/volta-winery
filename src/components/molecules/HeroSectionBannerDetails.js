import { Link } from 'react-router-dom'

const HeroSectionBannerDetails = ({title, description1, description2, url}) => {
    return (
        <div>
            <hgroup>
                <h2 className="f4-50">
                    {title}
                </h2>
                <p className="f1-75">{description1}</p>
                <p className="f1-75">{description2}</p>
            </hgroup>

            <div className='mb2-00'>
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
            
            <div>
                <h2>
                   Attractive Wholesale Discounted Prices:
                </h2>
                <div className='flex flex-column'>
                    <div className='mr1-00  pb1-00'>
                        5% Discount on all selected products
                    </div>
                    <div className='mr1-00  pb1-00'>
                        10% Discount on branded produts for special occasions.
                    </div>
                </div>
            </div>
            <div className="flex ggap1-00 mt4-00">
                <div className=" f1-25 pa0-50 gold ba tc"
                >
                    <Link to ={url}
                        className="gold"
                    >
                        Know More...
                    </Link>
                </div>
            </div>
            <div className="flex justify-center ggap1-00 mt4-00">
                <div className="flex justify-around f1-25 gold tc w-25"
                >
                    <button className="w2-50 h2-50 pa0-50 bg-transparent white-90 b--none pointer">
                        o
                    </button>
                    <button className="w2-50 h2-50 pa0-50 bg-transparent white-90 b--none pointer">
                        o
                    </button>
                    <button className="w2-50 h2-50 pa0-50 bg-transparent white-90 b--none pointer">
                        o
                    </button>
                </div>
               
            </div>
        </div>
        
    )
}

export default HeroSectionBannerDetails