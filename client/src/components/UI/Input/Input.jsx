import React from 'react'

export default function Input({type, placeholder, id, name, onChange, value}) {
    return (
        <div className="row">
            <div className="input-field col s12">
                <input 
                    id={id} 
                    type={type}
                    value={value}
                    onChange={onChange}
                    className="validate" 
                    />
                <label htmlFor={id}>{placeholder}</label>
            </div>
        </div>
    )
}
