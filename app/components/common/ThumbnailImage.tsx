import { ImageProps } from "next/image";
import BlurImage from "./BlurImage";

//TODO default img
export default function ThumbnailImage( { src, alt, width, height}: ImageProps) {
  return (
    <a href="https://ibb.co/7xmcfgQ">
      <BlurImage 
        src={ src || "https://i.ibb.co/7xmcfgQ/Screenshot-from-2023-05-02-18-06-17.png"}
        alt={ alt || "Screenshot-from-2023-05-02-18-06-17"} 
        width={width}
        height={height}
      />
    </a>
  )
}