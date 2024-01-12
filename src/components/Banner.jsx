
export default function Banner() {
    return (
        <div className="flex flex-row justify-evenly items-center w-3/5 m-auto h-screen
        xs:flex-col xs:w-full xs:px-10 md:flex-row">

            <div className="flex flex-col justify-evenly gap-10 md:w-2/3 xs:w-full ">

                <div className="flex flex-col md:gap-4 xs:gap-8">
                    <h2 className="text-2xl font-semibold">Welcome to</h2>
                    <h1 className="text-6xl font-semibold">Name company</h1>
                    <p className="text-l md:w-3/4 xs:w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet neque deleniti tenetur rerum fugit distinctio eius tempora ea? Quis, tempora amet? Voluptas in voluptatem eligendi ipsa voluptate corrupti aliquid omnis.</p>
                </div>

                <div className="flex flex-row gap-4 justify-around md:w-1/2 xs:w-full">
                    <button className="px-4 py-2 rounded-lg bg-slate-600 text-slate-200 hover:bg-slate-800 hover:shadow-xl transition-all">See Services
                    </button>
                    <button className="px-4 py-2 rounded-lg border-2 border-slate-600 text-slate-600 hover:border-slate-800 hover:shadow-xl hover:text-slate-800 transition-all">Contact
                    </button>
                </div>
            </div>

            <div className="md:w-1/2 xs:w-full">
                {/* carrousel de 3 fotos que pasen en automatico */}
                <img src="../../public/ilustration_banner.svg" alt="Imagenes aleatorias" />
            </div>
        </div>
    )
}
