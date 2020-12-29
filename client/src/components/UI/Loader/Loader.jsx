import React from 'react'
import './index.scss'


export default function Loader() {
    return (
        <div className="loader">
            <div className="lds-ripple"><div></div><div></div></div>
        </div>
    )
}
