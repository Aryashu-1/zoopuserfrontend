import React, { useState } from 'react'
import { StoresContext } from '../../Contexts/StoresContext/StoresContext'

const StoresStore = ({children}) => {
    let [stores,setStores] = useState([]) 
  return (
    <div>
      <StoresContext.Provider value={[stores,setStores]}>
        {children}
      </StoresContext.Provider>
    </div>
  )
}

export default StoresStore
