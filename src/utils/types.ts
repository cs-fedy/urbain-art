import { StaticImageData } from "next/image"
import { ComponentProps, ReactNode } from "react"

export type Image = StaticImageData | string | ReactNode
export type ClassName = ComponentProps<"span">["className"]
