import { StaticImageData } from "next/image"
export interface NavLink {
    href: string
    label: string
}


export type ResponsiveImageProps = {
  desktop: StaticImageData
  mobile: StaticImageData
  alt: string
  priority?: boolean
}