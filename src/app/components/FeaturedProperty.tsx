import Image from "next/image"
import featuredHome from "../../../public/img/pexels-heyho-7031414.jpg"
import OutlineButton from "./Buttons/OutlineButton"
import IconButton from "./Buttons/IconButton"


export default function FeaturedProperty() {
  return (
    <div className=" lg:px-16 px-4 text-secondary bg-white">
        <div className="flex lg:flex-row flex-col lg:gap-20 gap-4 items-center">
            <div className="lg:w-3/5 lg:text-5xl text-4xl lg:leading-13" >
                <p className=" lg:w-[640px] "><span className=" font-medium">Your primary home</span> might begin to feel left out.</p>
            </div>
            <div className="lg:w-2/5 flex gap-2">
                <div className=" bg-[url(/img/uploads.jpg)] w-20 rounded-full flex items-center justify-center">
                    
                    <div className=" flex items-center justify-center bg-white w-6 h-6 rounded-full my-2 mx-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-primary">
                            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
                <p>
                    Each listing offers exceptional quality, unique feature, and prime location.
                </p> 
            </div>

        </div>

        <div className="flex lg:flex-row flex-col gap-5 lg:mt-10 mt-4">

            <div className="lg:w-2/5">
                <Image 
                    src={featuredHome}
                    alt="Featured Property"
                    width={500}  
                    height={300}  
                    className="w-[600px] h-[430px] rounded-3xl "  
                /> 
            </div>

            <div className="lg:w-3/5">

                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-5 gap-4 ">
                    <div className=" bg-[#fafafa] p-10 rounded-3xl text-center">
                        <p className="text-3xl font-semibold pb-3">
                            Big things can happen in small spaces.
                        </p>
                        <p className=" px-5">
                            With thoughtful design and smart organisation, you can maximize every inch, making room for creativity.
                        </p>
                        <button className=" pt-7">
                            <OutlineButton btnTitle="Details" />
                        </button>
                        

                    </div>

                    <div className=" bg-[#fafafa] rounded-3xl">

                        <Image 
                            src={featuredHome}
                            alt="Featured Property"
                            width={500}  
                            height={300}  
                            className="w-[600px] h-auto rounded-3xl "  
                        /> 
                        <p className="text-2xl py-5 text-center">
                            Pricing Starts at <span className=" font-semibold">$256K</span>
                        </p>

                        <div className="flex justify-center pb-5">
                            <IconButton 
                                btnTitle="Explore Properties" 
                                icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                                } 
                                btnLink={"#"}
                            />
                        </div>




                    </div>

                </div>

                <div className="flex justify-between items-center ">
                    <div className="pt-5 w-3/5">
                        Whenever it&apos;s creating a cozy corner fpr relaxation or tranforming a small area into a workspace.
                    </div>

                    <div className=" flex gap-3"> 
                        <div className="rounded-full w-10 h-10 border border-gray-300 items-center justify-center flex cursor-pointer hover:bg-gray-100 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>
                        </div>
                        <div className="rounded-full w-10 h-10 border border-gray-300 items-center justify-center flex cursor-pointer hover:bg-gray-100 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg> 
                        </div>
                    </div>

                </div>
                


            </div>
        
        </div>        
      
    </div>
  )
}
