import React from 'react'
import { Link } from 'react-router-dom'

const Diretion = ({ parent_class }) => {
    return (
        <div className={`text-[12px] ${parent_class ? parent_class : ""}`}>
            <span>Bangalore: </span><div className=' line_hover relative'><Link to="/">Get Directions</Link></div>
        </div>
    )
}

export default Diretion