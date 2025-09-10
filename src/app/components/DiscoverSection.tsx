import IconButton from "./Buttons/IconButton";

export default function DiscoverSection() {
  return (
    <div className=" bg-[url(/img/pexels-heyho-7061672.jpg)] bg-no-repeat bg-cover py-32 bg-blend-overlay bg-black/40"> 
    
    <div className="text-center text-white lg:px-0 px-4 ">
        <h1 className="lg:text-5xl text-4xl lg:leading-13 lg:w-1/2 mx-auto">
             <span className=" font-medium">Discover the World,</span> One Adventure at a time
        </h1>
        <p className="py-5">
            Travel Beyond Limits, Explore Without Boundaries. See the wordld. Live the Journey.
        </p>

        <IconButton 
          btnTitle=" Get Started"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg> 
          }
          btnLink="#" 
        />
    </div>

      
    </div> 
  )
}
