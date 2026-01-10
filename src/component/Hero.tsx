import heroImage from '../../public/Image/Iphone-Image.png'
import Image from 'next/image'
const Hero = () => {

    return (
    <section className=" max-h-screen overflow-hidden bg-[#211C24]">
      <div className="max-w-7xl mx-auto px-4 flex justify-between flex-col md:flex-row  items-center">
        <div className="text-white mt-12">
            <div className="">
                <p className='text-[#909090] text-2xl font-medium mb-1 text-center md:text-start'>Pro.Beyond.</p>
                <h1 className='text-5xl md:text-7xl font-extralight mb-1 text-center md:text-start'>iPhone 14 <span className='font-medium'>Pro</span></h1>
            </div>
            <div className="flex justify-center items-center flex-col md:items-start">
                <p className='text-[#909090] text-xl text-center md:text-start'>Created to change everything for the better. For everyone</p>
                <button className='w-[191px] h-[56px] border border-white rounded-sm mt-5 cursor-pointer hover:bg-white hover:text-[#211C24] transition-colors'>
                    Shop Now
                </button>
            </div>
        </div>
        <div className="flex justify-center md:justify-end">
            <Image 
                src={heroImage}
                width={heroImage.width}
                height={heroImage.height}
                alt='Iphone 14 pro'
                priority
            />
        </div>
      </div>
    </section>
  )
}

export default Hero
