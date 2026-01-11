import Image from 'next/image'
import halfAirpods from '../../public/Image/half-airpods.png'
import halfAppVision from '../../public/Image/half-appvision.png'
import halfMacBook from '../../public/Image/half-MacBook.png'
import halfPlayStation from '../../public/Image/half-PlayStation.png'

import fullAirpods from '../../public/Image/airpods.png'
import fullAppVision from '../../public/Image/appvision.png'
import fullMacBook from '../../public/Image/MacBook.png'
import fullPlayStation from '../../public/Image/PlayStation.png'

import ResponsiveImage from './ResponsiveImage.tsx'

const Banner = () => {




  return (
    <section className="flex flex-col lg:flex-row ">
      <div className="flex flex-col lg:flex-1 ">
        <div className="flex flex-col lg:flex-row bg-white order-2 lg:order-1 py-4 lg:py-0">
            {/* <div className="hidden lg:flex ">
                <Image 
                    src={halfPlayStation}
                    width={halfPlayStation.width}
                    height={halfPlayStation.height}
                    alt="Playstation 5"
                    className=''
                />
            </div>

            <div className="lg:hidden flex justify-center items-center ">
                <Image 
                    src={fullPlayStation}
                    width={fullPlayStation.width}
                    height={fullPlayStation.height}
                    alt="Playstation 5"
                    className=''
                />
            </div> */}

            <ResponsiveImage
                desktop={halfPlayStation}
                mobile={fullPlayStation}
                alt="Playstation 5 banner"
                
            />

            <div className="flex flex-col text-center lg:text-start  justify-center lg:flex-1 ">
                <h2 className='text-3xl lg:text-5xl font-medium lg:mb-4 mt-4 lg:mt-0 mb-3'>Playstation 5</h2>
                <p className='text-[#909090] text-base lg:max-w-sm  '>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
            </div>
        </div>
        <div className="flex flex-col lg:flex-row">
            <div className="bg-[#EDEDED] flex flex-1 flex-col lg:flex-row py-[40px] lg:py-0 ">
                <div className="hidden lg:flex">
                    <Image 
                        src={halfAirpods}
                        width={halfAirpods.width}
                        height={halfAirpods.height}
                        alt="Apple Vision Pro"
                    />
                </div>
                <div className="lg:hidden flex justify-center items-center">
                    <Image 
                        src={fullAirpods}
                        width={fullAirpods.width}
                        height={fullAirpods.height}
                        alt="Apple AirPods Max"
                    />
                </div>
                <div className="leading-7 flex justify-center flex-col m-auto text-center lg:text-start mt-2 ">
                    <h2 className='text-3xl '>Apple <br className='hidden lg:flex' /> AirPods <br className='hidden lg:flex' /> <span className='font-medium'> Max</span></h2>
                    <p className='text-[#909090]'>Computational audio. <br className='hidden lg:flex' /> Listen, it is powerful</p>
                </div>
            </div>
            <div className="bg-[#353535] leading-7 flex flex-col lg:flex-row items-center flex-1 py-[40px] lg:py-0 ">
                <div className="hidden lg:flex">
                    <Image 
                        src={halfAppVision}
                        width={halfAppVision.width}
                        height={halfAppVision.height}
                        alt="Apple Vision Pro"
                    />
                </div>
                <div className="lg:hidden flex justify-center items-center">
                    <Image 
                        src={fullAppVision}
                        width={fullAppVision.width}
                        height={fullAppVision.height}
                        alt="Apple Vision Pro"
                    />
                </div>
                <div className="leading-7 flex justify-center  flex-col m-auto text-center lg:text-start ">
                    <h2 className='text-3xl text-white '>Apple <br className='hidden lg:flex' /> Vision  <br className='hidden lg:flex' /> <span className='font-medium'> Pro</span></h2>
                    <p className='text-[#909090]'>An immersive way to <br className='hidden lg:flex' /> experience <br /> entertainment</p>
                </div>
            </div>
        </div>
      </div>
      <div className="order-1 lg:order-2 flex flex-col justify-between items-center lg:flex-row lg:flex-1 py-[40px] lg:py-0 bg-[#EDEDED] lg:pl-[56px]">
        <div className="order-2 lg:order-1 mx-4 lg:m-0 ">
            <div className="text-center lg:text-start">
                <h2 className='font-extralight text-3xl lg:text-6xl mb-3'>Macbook <span className='font-normal'> <br className='hidden lg:flex' />Air</span></h2>
                <p className='text-[#909090]'>The new 15‑inch MacBook Air makes room for more <br className='hidden lg:flex' /> of what you love with a spacious Liquid Retina <br className='hidden lg:flex' /> display.</p>
            </div>
                <button className=' w-full lg:w-[191px] h-[56px] border font-medium border-[#211C24] rounded-sm mt-5 cursor-pointer hover:bg-[#211C24] hover:text-white transition-colors'>
                    Shop Now
                </button>
        </div>  
        <div className="order-1 lg:order-2">
            <div className="hidden lg:flex">
                <Image 
                    src={halfMacBook}
                    width={halfMacBook.width}
                    height={halfMacBook.height}
                    alt='Mac Book Air'
                />
            </div>
            <div className="lg:hidden">
                <Image 
                    src={fullMacBook}
                    width={fullMacBook.width}
                    height={fullMacBook.height}
                    alt='Mac Book Air'
                />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
