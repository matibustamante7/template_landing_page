import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Contact() {
    return (
        <div className="flex justify-center items-center bg-slate-500 h-screen" id="contact">

            <div className="flex flex-col m-auto gap-10 w-3/5 md:p-6 xs:p-2">

                <h3 className="text-4xl font-bold text-white text-center">Contact us</h3>

                <div className="flex md:flex-row gap-10 justify-evenly items-center xs:flex-col">
                    <form action="" className="flex flex-col gap-2 items-center md:w-3/5 xs:w-full">

                        {/* <label htmlFor="name">Name</label> */}
                        <input type="text" name="name" id="name" placeholder="Name" required
                            className="md:w-3/6 h-12 p-4 rounded-lg text-slate-800 text-lg xs:w-full" />

                        {/* <label htmlFor="tel">Phone</label> */}
                        <input type="tel" name="tel" id="tel" placeholder="Phone" required
                            className="md:w-3/6 h-12 p-4 rounded-lg text-slate-800 text-lg xs:w-full" />

                        {/* <label htmlFor="email">Email</label> */}
                        <input type="email" name="email" id="email" placeholder="Email" required
                            className="md:w-3/6 h-12 p-4 rounded-lg text-slate-800 text-lg xs:w-full" />

                        <input type="submit" value="Submit"
                            className="md:w-3/6 h-12 p-4 rounded-lg bg-slate-700 font-semibold text-slate-200 text-lg hover:bg-slate-800 hover:shadow-2xl cursor-pointer transition-all xs:w-full" />
                    </form>

                    <div className="flex flex-col gap-4 md:w-2/5 sx:w-full">
                        <div className="flex justify-between w-max gap-2">
                            <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
                            <a href="https://www.instagram.com/" target="blank" className="text-xl" > Name Company</a>
                        </div>
                        
                        <div className="flex justify-between w-max gap-2">
                            <FontAwesomeIcon icon={faFacebook} className="text-3xl" />
                            <a href="https://www.facebook.com/" target="blank" className="text-xl" > Name Company</a>
                        </div>
                        
                        <div className="flex justify-between w-max gap-2">
                            <FontAwesomeIcon icon={faWhatsapp} className="text-3xl" />
                            <a href="https://api.whatsapp.com/send?phone=5493517058846" target="blank" className="text-xl" > Name Company</a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
