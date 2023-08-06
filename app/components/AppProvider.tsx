'use client'
import { useApp } from "#/hooks/useApp"
import { useCollection } from "#/hooks/useCollection"
import { SchemaName } from "#/types/schema"
import React, { useEffect, useState } from "react"

export const AppContext = React.createContext({
  useApp, 
  useCollection
})
export default function AppProvider({children}: {children: React.ReactNode}){
 
 
  return(
    <AppContext.Provider value={{
      useApp,
      useCollection
      
    }}>
      {children}
    </AppContext.Provider>
  )  
} 
