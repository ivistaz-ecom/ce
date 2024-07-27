'use client'

import React, { createContext, useState } from 'react'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [activeServiceId, setActiveServiceId] = useState(1)

  return (
    <AppContext.Provider
      value={{
        activeServiceId,
        setActiveServiceId,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
