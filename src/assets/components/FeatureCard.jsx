
function FeatureCard({title,description,icon}) {
        return(
          <div key={title} 
          className='border rounded-md shadow-lg m-4 py-6 px-4 w-[400px] flex items-end '>
            <div className='flex justify-center items-left mx-auto h-[100px] w-[100px] shadow-md rounded-m bg-yellow- p-4'>
            {icon}
            </div>
            <div className="ml-4">
            <h3 className='text-md mb-2 font-bold '>{title}</h3>
            <p className='text-slate-300'>{description}</p></div>
            </div>
        )
      }
export default FeatureCard
