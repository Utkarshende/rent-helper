
function Heading({heading, className}) {
  return (
    <div>
      <h2 className={`text-center text-4xl text-teal-400 mt-[20px] mb-[20px] font-bold
      ${className}`}>
      {heading}</h2>
    </div>
  )
}


export default Heading
