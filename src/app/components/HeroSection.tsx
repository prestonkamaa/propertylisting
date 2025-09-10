import NavBar from "./NavBar";

export default function HeroSection() {
  return (
    <div className="bg-[url(/img/pexels-heyho-7061672.jpg)] bg-no-repeat bg-cover h-screen bg-blend-overlay bg-black/40">
    
        <div className="lg:px-16 lg:pt-5">
            <NavBar />
        </div>


        <div className=" text-white lg:absolute bottom-0 lg:px-16 lg:pb-10 px-4 pt-40 w-full ">
            <p className=" font-semibold lg:text-7xl text-4xl lg:w-[880px]">
                Find your <span className="text-primary">dream home </span>with ease and confidence  
                
            </p>

            <p className="text-white my-8">
                Explore the best properties in prime locations and take the next step towards your future today.
            </p>

        <div className=" lg:flex justify-between">

            <div className="w-full max-w-sm min-w-[100px]">
                <div className="relative">
                    <input
                    className="w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm rounded-full pl-3 pr-28 py-4 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Search properties..." 
                    />
                    <button
                    className="absolute top-1 right-1 flex items-center rounded-full bg-primary py-2.75 px-5.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
 
                    </button> 
                </div>
            </div>

            <div className=" flex lg:pt-0 pt-4 items-center justify-center  space-x-3">
                <p>Scroll Down</p>
                 <button className=" rounded-full bg-primary text-secondary w-10 h-10 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                    </svg>

                 </button>
            </div>

        </div>






        </div>



      
    </div>
  )
}
