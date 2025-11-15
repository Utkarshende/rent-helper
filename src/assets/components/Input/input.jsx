import React from 'react'

function Input( {type="text",value,onChange,placeholder, className }){
  return (
  <input type={type}
  value={value}
onChange={(e)=>{
    onChange(e.target.value);
}}
placeholder={placeholder}
className={`w-full p-2 mt-4 border-2 rounded-xl ${className}`} />
)}


export default Input
