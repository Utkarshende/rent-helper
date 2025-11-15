
function FeatureCard({title,description,icon}) {
        return(
          <div key={title} 
          className='border rounded-md shadow-xl m-4 py-6 px-4 w-[400px] flex items-end hover:bg-teal-800 hover:translate-y-1'>
            <div className='flex justify-center items-left mx-auto h-[100px] w-[100px] shadow-md rounded-m bg-teal-900 hover:bg-amber-50 cursor-pointer rounded-full p-6'>
            {icon}
            </div>
            <div className="ml-4">
            <h3 className='text-md mb-2 font-bold '>{title}</h3>
            <p className='text-teal-100'>{description}</p></div>
            </div>
        )
      }
export default FeatureCard
