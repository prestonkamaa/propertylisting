import Link from "next/link"

export default function Footer() {
  return (
    <div className="lg:p-16 p-4 bg-[#fafafa]  text-secondary">
        <div className="flex lg:flex-row flex-col lg:gap-5 gap-3 ">
            <p className="lg:w-3/5 lg:text-5xl text-4xl lg:leading-13 ">
                <span className="font-medium">Discover Nature&apos;s</span> wonders with Expert Guidance
            </p>
            <div className="lg:w-2/5 text-lg font-semibold flex lg:justify-end ">
                <div className=" space-y-3">
                    <p>12345 Nairobi City Center Road, <br />
                        Nairobi, Kenya. </p>
                     <p>(+254) 123-456-789</p>
                    
                </div>
            </div>

            
        </div>

        <hr className="lg:my-12 my-5" />

        <div className=" flex lg:flex-row flex-col lg:gap-10 gap-3">
            <div>
                <div className=" flex items-center lg:w-2/5 ">
                    <p className=" font-bold  rounded-full bg-white h-10 w-10 flex items-center justify-center text-sm mr-2">EG</p>                     
                    <p className=" font-normal text-2xl"> <span className="font-bold">Ever</span>Green</p>                   
                </div>
                <div>
                    <p className="font-semibold pt-5 mb-2"> Subscribe</p>
                    <p>
                        Join our newsletter to stay updated with the latest news and offers.
                    </p>

                    <div className="w-full max-w-sm min-w-[200px] my-3">
                        <div className="relative">
                            <input
                            className="w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm rounded-full pl-3 pr-28 py-4 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                            placeholder="Enter your email" 
                            />
                            <button
                            className="absolute top-1 right-1 flex items-center rounded-full bg-primary py-2.75 px-5.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            >
                            Subscribe
        
                            </button> 
                        </div>
                    </div>                    
                    
                    

                </div>
                <p className="text-sm">
                    By subscribing you agree to our <span className="font-bold">Privacy Policy.</span>
                </p>

            </div>

            <div className=" lg:w-3/5 flex justify-between ">
                <div className=" space-y-3 flex flex-col ">
                    <p className=" font-semibold pb-2">Quick Links</p> 
                    <Link href={"#"}>Home</Link>
                    <Link href={"#"}>About</Link>
                    <Link href={"#"}>Services</Link>
                    <Link href={"#"}>Contact</Link> 
                </div>
                <div className=" space-y-3 flex flex-col">
                    <p className=" font-semibold pb-2">Products</p> 
                    <Link href={"#"}>Ai Assistance</Link>
                    <Link href={"#"}>Mobile App</Link>
                    <Link href={"#"}>Account</Link>
                    <Link href={"#"}>Credit Card</Link> 
                </div>
                <div className=" space-y-3 flex flex-col">
                    <p className=" font-semibold pb-2">Company</p> 
                    <Link href={"#"}>About</Link>
                    <Link href={"#"}>Privacy Policy</Link>
                    <Link href={"#"}>Support</Link>
                    <Link href={"#"}>Terms of Service</Link> 
                </div>
            </div>


            
        </div>

        <hr className="lg:mt-10 mt-4 lg:mb-5 mb-3" />

        <div className=" flex lg:flex-row flex-col lg:justify-between text-center lg:text-left">
            <p>
                <span className=" font-bold">© 2025</span> EG EverGreen. All rights reserved. UI Design  
            </p>
            <div>
                <Link href={"#"}>Terms & Conditions</Link> | <Link href={"#"}>Privacy Policy</Link>
            </div>

        </div>

        

      
    </div>
  )
}
