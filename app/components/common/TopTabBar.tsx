'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
//import { useTranslation } from '#/lib/i18n/client';

import { useApp } from '#/hooks/useApp';
import { useTranslation } from '#/lib/i18n/client';


export default function TopTabBar({ className, lng }: {className?: string, lng: string}) {
  const pathname = usePathname();
 
  
  return (
    <div
      className={`flex  items-center space-x-2 h-14 bg-blue-700 px-5 py-3 
        ${className ? className : ''}`}
    >      
      {/* <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
            clipRule="evenodd"
          />
        </svg>
      </div> */}
      <div className="flex space-x-1 text-sm font-medium">
      
     
                 
                    <span
                     
                      className="animate-[highlight_1s_ease-in-out_1] rounded-full px-1.5 py-0.5 text-gray-100  border-pink-100 border-2"
                    >
                      <li className='list-none'>
                      {"Tab1"}
                      </li>
                    </span>
                    
                    <span
                     
                     className="animate-[highlight_1s_ease-in-out_1] rounded-full px-1.5 py-0.5 text-gray-100  border-pink-100 border-2"
                   >
                     <li className='list-none'>
                      {"Tab1"}
                      </li>
                   </span>
                  
         
      </div>
     
         
    </div>
  )
}
