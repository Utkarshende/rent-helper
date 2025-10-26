
function Heading({heading, className}) {
  return (
    <div>
      <h2 className={`text-center text-4xl text-slate-400 mt-[100px] mb-[50px] font-bold
      ${className}`}>
      {heading}</h2>
    </div>
  )
}


export default Heading
