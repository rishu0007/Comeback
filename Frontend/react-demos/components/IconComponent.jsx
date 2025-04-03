import React from 'react'
import { FaBeerMugEmpty } from "react-icons/fa6";

const IconComponent = () => {

    const styles = {
        fontSize: "30px",
        color: "gold"
    }

  return (
    <div style={styles}>
        <h1>Below is the icon</h1>
        <FaBeerMugEmpty/>
    </div>
  )
}

export default IconComponent