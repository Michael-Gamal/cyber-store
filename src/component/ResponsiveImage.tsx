import Image from "next/image"
import type { ResponsiveImageProps } from "@/types/image"

const ResponsiveImage = ({
  desktop,
  mobile,
  alt,
}: ResponsiveImageProps) => {
  return (
    <>
      {/* Desktop Image */}
      <div className="hidden lg:flex ">
        <Image
          src={desktop}
          alt={alt}
          width={desktop.width}
          height={desktop.height}
          className="hidden lg:block"
        />
      </div>
      {/* Mobile Image */}
      <div className="lg:hidden flex justify-center items-center ">

      <Image
        src={mobile}
        alt={alt}
        width={mobile.width}
        height={mobile.height}
        className="block lg:hidden"
      />
      </div>
    </>
  )
}


export default ResponsiveImage
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