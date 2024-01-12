import { useState } from "react"
import { Link } from "react-scroll"
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
export default function Header() {

    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    const menuResponsive = <>
        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-800">
            <ul className="text-center text-xl p-20">
                <Link spy={true}
                    smooth={true} to="home">
                    <li className="my-4 py-4 border-b border-slate-600  cursor-pointer hover:bg-slate-600 hover:rounded-xl ">Home</li>
                </Link>
                <Link spy={true}
                    smooth={true} to="services">
                    <li className="my-4 py-4 border-b border-slate-600  cursor-pointer hover:bg-slate-600 hover:rounded-xl ">Services</li>
                </Link>
                <Link spy={true}
                    smooth={true} to="testimonials">
                    <li className="my-4 py-4 border-b border-slate-600  cursor-pointer hover:bg-slate-600 hover:rounded-xl ">Testimonials</li>
                </Link>
                <Link spy={true}
                    smooth={true} to="contact">
                    <li className="my-4 py-4 border-b border-slate-600  cursor-pointer hover:bg-slate-600 hover:rounded-xl ">Contact</li>
                </Link>
            </ul>
        </div>
    </>


    return (
        <nav className="bg-slate-800  flex items-center justify-center" id="home">
            <div className="h-10vh flex justify-between z-50 text-slate-200 lg:py-5 px-20 py-4 flex-1">
                <div className="flex items-center flex-1">
                    <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        className="text-4xl font-bold  cursor-pointer">Your logo</Link>
                </div>


                <div className=" flex-row justify-between items-center gap-20 lg:flex md:flex lg flex-1 hidden">
                    <div className="flex flex-row justify-evenly items-center gap-6">
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500} className="text-2xl font-medium  hover:text-slate-400 cursor-pointer">Home</Link>
                        <Link
                            activeClass="active"
                            to="services"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500} className="text-2xl font-medium  hover:text-slate-400 cursor-pointer">Services</Link>
                        <Link
                            activeClass="active"
                            to="testimonials"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500} className="text-2xl font-medium  hover:text-slate-400 cursor-pointer">Testimonials</Link>
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500} className="text-2xl font-medium  hover:text-slate-400 cursor-pointer">Contact</Link>
                    </div>
                </div>
                <div>
                    {click && menuResponsive}
                </div>

                <button className="block sm:hidden transition" onClick={handleClick}>
                    {click ? <FaTimes /> : <GiHamburgerMenu />}</button>
            </div>

        </nav>
    )
}
