import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Testimonials() {
    return (
        <div className="flex justify-center items-center md:h-screen" id="testimonials">
            <div className="flex flex-col m-auto gap-10 w-3/5 ">
                <h3 className="text-4xl font-bold text-slate-800 text-center">Testimonials</h3>

                <div className="flex md:flex-row gap-10 justify-evenly items-center flex-wrap xs:flex-col">

                    <div className="flex flex-col gap-2 justify-center bg-slate-500 md:w-2/5  rounded-lg p-6 hover:shadow-2xl transition-all">
                        <h3 className="text-xl font-semibold text-slate-800">Name customer</h3>
                        <p className="text-md font-medium text-slate-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem hic quas optio eligendi minima alias quae consectetur magni consequatur asperiores, adipisci nobis culpa officiis natus quisquam corrupti! Corporis, dolorum porro.</p>
                        
                        <div className="flex flex-row gap-1">
                            <FontAwesomeIcon icon={faStar} className="text-slate-900" />
                            <FontAwesomeIcon icon={faStar} className="text-slate-900" />
                            <FontAwesomeIcon icon={faStar} className="text-slate-900" />
                            <FontAwesomeIcon icon={faStar} className="text-slate-900" />
                            <FontAwesomeIcon icon={faStar} className="text-slate-900" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 justify-center bg-slate-500 md:w-2/5  rounded-lg p-6 hover:shadow-2xl transition-all">
                        <h3 className="text-xl font-semibold text-slate-800">Name customer</h3>
                        <p className="text-md font-medium text-slate-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem hic quas optio eligendi minima alias quae consectetur magni consequatur asperiores, adipisci nobis culpa officiis natus quisquam corrupti! Corporis, dolorum porro.</p>
                        
                        <div className="flex flex-row gap-1">
                            <FontAwesomeIcon icon={faStar} className="text-slate-900" />
                            <FontAwesomeIcon icon={faStar} className="text-slate-900" />
                            <FontAwesomeIcon icon={faStar} className="text-slate-900" />
                            <FontAwesomeIcon icon={faStar} className="text-slate-900" />
                            <FontAwesomeIcon icon={faStar} className="text-slate-900" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 justify-center bg-slate-500 md:w-2/5  rounded-lg p-6 hover:shadow-2xl transition-all">
                        <h3 className="text-xl font-semibold text-slate-800">Name customer</h3>
                        <p className="text-md font-medium text-slate-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem hic quas optio eligendi minima alias quae consectetur magni consequatur asperiores, adipisci nobis culpa officiis natus quisquam corrupti! Corporis, dolorum porro.</p>
                        
                        <div className="flex flex-row gap-1">
                            <FontAwesomeIcon icon={faStar} className="text-slate-900" />
                            <FontAwesomeIcon icon={faStar} className="text-slate-900" />
                            <FontAwesomeIcon icon={faStar} className="text-slate-900" />
                            <FontAwesomeIcon icon={faStar} className="text-slate-900" />
                            <FontAwesomeIcon icon={faStar} className="text-slate-900" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 justify-center bg-slate-500 md:w-2/5  rounded-lg p-6 hover:shadow-2xl transition-all">
                        <h3 className="text-xl font-semibold text-slate-800">Name customer</h3>
                        <p className="text-md font-medium text-slate-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem hic quas optio eligendi minima alias quae consectetur magni consequatur asperiores, adipisci nobis culpa officiis natus quisquam corrupti! Corporis, dolorum porro.</p>
                        
                        <div className="flex flex-row gap-1">
                            <FontAwesomeIcon icon={faStar} className="text-slate-900" />
                            <FontAwesomeIcon icon={faStar} className="text-slate-900" />
                            <FontAwesomeIcon icon={faStar} className="text-slate-900" />
                            <FontAwesomeIcon icon={faStar} className="text-slate-900" />
                            <FontAwesomeIcon icon={faStar} className="text-slate-900" />
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}
