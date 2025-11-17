function FeatureCard({title, description, icon}) {
    return (
        <div 
            key={title} 
            className='border rounded-xl shadow-xl m-4 py-6 px-4 w-[400px] flex items-center transition-all duration-300 hover:bg-teal-800 hover:scale-[1.02]'>
            <div className='flex justify-center items-center h-[100px] w-[100px] shadow-md bg-teal-900 hover:bg-amber-50 cursor-pointer rounded-full p-6 transition-colors duration-300'>
                {icon}
            </div>
            <div className="ml-6 flex-1">
                <h3 className='text-lg mb-2 font-bold text-white'>{title}</h3>
                <p className='text-teal-100'>{description}</p>
            </div>
        </div>
    );
}

export default FeatureCard;