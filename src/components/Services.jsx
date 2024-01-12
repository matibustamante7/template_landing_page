
export default function Services() {
    return (
        <div className="flex justify-center items-center bg-slate-500 h-screen" id="services">
            
            <div className="flex flex-col m-auto gap-10 w-3/5">
                <h3 className="text-4xl font-bold text-white text-center">Services</h3>

                <div className="flex md:flex-row gap-10 justify-evenly items-center flex-wrap xs:flex-col">

                    <div className="flex flex-col gap-2 justify-center items-center bg-slate-50 md:w-1/4 border-2 rounded-lg hover:shadow-2xl hover:cursor-pointer transition-all">
                        <img src="../../public/android.svg" alt="" className="" />
                        <h3 className="text-xl font-semibold">Service 1</h3>
                    </div>

                    <div className="flex flex-col gap-2 justify-center items-center bg-slate-50 md:w-1/4 border-2 rounded-lg hover:shadow-2xl hover:cursor-pointer transition-all">
                        <img src="../../public/android.svg" alt="" className="" />
                        <h3 className="text-xl font-semibold">Service 2</h3>
                    </div>

                    <div className="flex flex-col gap-2 justify-center items-center bg-slate-50 md:w-1/4 border-2 rounded-lg hover:shadow-2xl hover:cursor-pointer transition-all">
                        <img src="../../public/android.svg" alt="" className="" />
                        <h3 className="text-xl font-semibold">Service 3</h3>
                    </div>
                
        
                </div>
            </div>
        </div>
    )
}
