'use client'
import Image, { ImageProps } from 'next/image';
import { useState, useEffect } from 'react';
type SchemaType = "Enterprise" | "Product"
export default function BlurImage(props: ImageProps) {
  const [isLoading, setLoading] = useState(true);
  const [src, setSrc] = useState(props.src);
  useEffect(() => setSrc(props.src), [props.src]); // update the `src` value when the `prop.src` value changes
  const ajaxLoadLinkedObj = async ( typeString: SchemaType) => {
    const requestEndpoint = "https://data.mongodb-api.com/app/application-qrcode-ukplu/endpoint/search"
    try {

      const response = await fetch(requestEndpoint, {
        
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            arg1: 'Product',
            arg2: 'Product a'
          })
        
      })
      console.log(response)
    } catch (error) {
      
    }
    
  }
  return (
    <Image
      {...props}
      src={src}
      alt={props.alt}
      className={`${props.className} transition-all ${
        isLoading
          ? 'grayscale blur-2xl scale-110'
          : 'grayscale-0 blur-0 scale-100'
      }`}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2PYsGHDfwAHNAMQumvbogAAAABJRU5ErkJggg=="
      onLoadingComplete={async () => {
        setLoading(false);
      }}
    />
  );
}
