
export default function NavBar() {
  return (
    
<header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full lg:bg-transparent bg-white text-sm py-3 dark:bg-neutral-800">
  <nav className=" w-full mx-auto lg:px-0 px-4 flex flex-wrap basis-full items-center justify-between">

    <div className="flex items-center gap-x-2">
      <div className=" flex rounded-full lg:bg-white bg-primary text-xl font-semibold w-12 h-12 items-center justify-center">
        EG
      </div>
      <p className=" text-primary lg:text-white lg:text-2xl text-xl font-semibold">
        Ever<span className=" text-primary">Green</span> 
      </p>
    </div>    
    
    {/* <a className="sm:order-1 flex-none text-xl font-semibold dark:text-white focus:outline-hidden focus:opacity-80" href="#">Brand</a> */}
    
    <div className="sm:order-3 flex items-center gap-x-2">
      <button type="button" className="sm:hidden hs-collapse-toggle relative size-9 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10" id="hs-navbar-alignment-collapse" aria-expanded="false" aria-controls="hs-navbar-alignment" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-alignment">
        <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
        <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        <span className="sr-only">Toggle</span>
      </button>
      <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium text-nowrap rounded-full border border-transparent bg-primary text-black hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 transition disabled:opacity-50 disabled:pointer-events-none">
        Get Started
      </button>
    </div>
    <div id="hs-navbar-alignment" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2 lg:bg-white lg:rounded-full p-1" aria-labelledby="hs-navbar-alignment-collapse">
      <div className="flex flex-col gap-5 lg:gap-2 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5 ">
        <a className="relative inline-block text-black focus:outline-hidden  dark:text-white bg-[#eeeeee] py-2 rounded-full px-5 " href="#" aria-current="page">Home</a>
        <a className="inline-block text-black hover:text-gray-600 focus:outline-hidden focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300 hover:bg-gray-50 py-2 rounded-full px-5 " href="#">About Us</a>
        <a className="inline-block text-black hover:text-gray-600 focus:outline-hidden focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300 hover:bg-gray-50 py-2 rounded-full px-5 " href="#">Product List</a>
        <a className="inline-block text-black hover:text-gray-600 focus:outline-hidden focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300 hover:bg-gray-50 py-2 rounded-full px-5 " href="#">Country</a>                
        <a className="inline-block text-black hover:text-gray-600 focus:outline-hidden focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300 hover:bg-gray-50 py-2 rounded-full px-5 " href="#">Contact Us</a>            
      </div>
    </div>
  </nav>
</header>


       
  )
}
