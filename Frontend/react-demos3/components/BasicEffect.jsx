import React, { use, useEffect } from 'react'

const BasicEffect = () => {
    useEffect(()=> {
        console.log("Rendered for the first time")
    }, [])
  return (
    <div>
        hii
    </div>
  )
}

export default BasicEffect