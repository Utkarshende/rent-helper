


import React from 'react'

function Input({ type, placeholder, value, onChange, className, required, min }) {
  return (
    <div>
       <input
            type={type}
            placeholder={placeholder}
            className={className}
            required={required}
            min={min}
            value={value} 
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
  )
}

export default Input

