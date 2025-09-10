import ExploreApartmentsCard from "./Cards/ExploreApartmentsCard"; 

const houseListings = [
    { 
        imgSource: "https://images.pexels.com/photos/17675658/pexels-photo-17675658.jpeg",
        imgAltText: "Image",
    },
    { 
        imgSource: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
        imgAltText: "Image",
    },
    { 
        imgSource: "https://images.pexels.com/photos/1643388/pexels-photo-1643388.jpeg",
        imgAltText: "Image",
    }, 
] 

const housingList = [
    { 
        imgSource: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
        imgAltText: "Image",
    },
    { 
        imgSource: "https://images.pexels.com/photos/17675658/pexels-photo-17675658.jpeg",
        imgAltText: "Image",
    },
    { 
        imgSource: "https://images.pexels.com/photos/1643388/pexels-photo-1643388.jpeg",
        imgAltText: "Image",
    }, 
] 



 

export default function ExploreApartments() {
  return (
    <div className=" lg:p-16 p-4 text-secondary bg-white">

        <div className="flex lg:flex-row flex-col">
            <h1 className="lg:w-3/5 lg:text-5xl text-4xl lg:leading-13" >
                <p className=" lg:w-[550px]"><span className="font-semibold  ">Explore Apartment</span> and Homes for Sale</p>
            </h1>
            <p className="lg:w-2/5 flex items-end">
                Each listing offers exceptional quality, unique feature, and prime location.
            </p>
        </div> 
        
        <div className=" lg:pt-5 pt-4  ">

            <nav className="flex lg:flex-row flex-col gap-2" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
            <button type="button" className="hs-tab-active:bg-black border-2  hs-tab-active:hover:bg-[#9e9e9e] hs-tab-active:text-white hs-tab-active:hover:text-white dark:hs-tab-active:bg-neutral-700 dark:hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-x-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-full hover:text-[#006405]  focus:outline-hidden focus:text-[#006405] disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-500 dark:hover:text-neutral-400 dark:focus:text-neutral-400 active " id="pills-on-gray-color-item-1" aria-selected="true" data-hs-tab="#pills-on-gray-color-1" aria-controls="pills-on-gray-color-1" role="tab">
                See More Blogs
            </button>
            <button type="button" className="hs-tab-active:bg-black border-2  hs-tab-active:hover:bg-[#9e9e9e] hs-tab-active:text-white hs-tab-active:hover:text-white dark:hs-tab-active:bg-neutral-700 dark:hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-x-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-full hover:text-[#006405] focus:outline-hidden focus:text-[#006405] disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-500 dark:hover:text-white dark:focus:text-neutral-400" id="pills-on-gray-color-item-2" aria-selected="false" data-hs-tab="#pills-on-gray-color-2" aria-controls="pills-on-gray-color-2" role="tab">
                Apartments
            </button> 
            <button type="button" className="hs-tab-active:bg-black border-2  hs-tab-active:hover:bg-[#9e9e9e] hs-tab-active:text-white hs-tab-active:hover:text-white dark:hs-tab-active:bg-neutral-700 dark:hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-x-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-full hover:text-[#006405] focus:outline-hidden focus:text-[#006405] disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-500 dark:hover:text-white dark:focus:text-neutral-400" id="pills-on-gray-color-item-3" aria-selected="false" data-hs-tab="#pills-on-gray-color-3" aria-controls="pills-on-gray-color-3" role="tab">
                Luxury 
            </button> 
            <button type="button" className="hs-tab-active:bg-black border-2  hs-tab-active:hover:bg-[#9e9e9e] hs-tab-active:text-white hs-tab-active:hover:text-white dark:hs-tab-active:bg-neutral-700 dark:hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-x-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-full hover:text-[#006405] focus:outline-hidden focus:text-[#006405] disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-500 dark:hover:text-white dark:focus:text-neutral-400" id="pills-on-gray-color-item-4" aria-selected="false" data-hs-tab="#pills-on-gray-color-4" aria-controls="pills-on-gray-color-4" role="tab">
                Villas 
            </button> 
            <button type="button" className="hs-tab-active:bg-black border-2  hs-tab-active:hover:bg-[#9e9e9e] hs-tab-active:text-white hs-tab-active:hover:text-white dark:hs-tab-active:bg-neutral-700 dark:hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-x-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-full hover:text-[#006405] focus:outline-hidden focus:text-[#006405] disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-500 dark:hover:text-white dark:focus:text-neutral-400" id="pills-on-gray-color-item-5" aria-selected="false" data-hs-tab="#pills-on-gray-color-5" aria-controls="pills-on-gray-color-5" role="tab">
                Commercial 
            </button> 
            <button type="button" className="hs-tab-active:bg-black border-2  hs-tab-active:hover:bg-[#9e9e9e] hs-tab-active:text-white hs-tab-active:hover:text-white dark:hs-tab-active:bg-neutral-700 dark:hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-x-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-full hover:text-[#006405] focus:outline-hidden focus:text-[#006405] disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-500 dark:hover:text-white dark:focus:text-neutral-400" id="pills-on-gray-color-item-6" aria-selected="false" data-hs-tab="#pills-on-gray-color-6" aria-controls="pills-on-gray-color-6" role="tab">
                Newly Built 
            </button> 
            <button type="button" className="hs-tab-active:bg-black border-2  hs-tab-active:hover:bg-[#9e9e9e] hs-tab-active:text-white hs-tab-active:hover:text-white dark:hs-tab-active:bg-neutral-700 dark:hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-x-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-full hover:text-[#006405] focus:outline-hidden focus:text-[#006405] disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-500 dark:hover:text-white dark:focus:text-neutral-400" id="pills-on-gray-color-item-7" aria-selected="false" data-hs-tab="#pills-on-gray-color-7" aria-controls="pills-on-gray-color-7" role="tab">
                Rentals 
            </button>  
            <button type="button" className="hs-tab-active:bg-black border-2  hs-tab-active:hover:bg-[#9e9e9e] hs-tab-active:text-white hs-tab-active:hover:text-white dark:hs-tab-active:bg-neutral-700 dark:hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-x-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-full hover:text-[#006405] focus:outline-hidden focus:text-[#006405] disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-500 dark:hover:text-white dark:focus:text-neutral-400" id="pills-on-gray-color-item-8" aria-selected="false" data-hs-tab="#pills-on-gray-color-8" aria-controls="pills-on-gray-color-8" role="tab">
                Residential 
            </button> 
            <button type="button" className="hs-tab-active:bg-black border-2  hs-tab-active:hover:bg-[#9e9e9e] hs-tab-active:text-white hs-tab-active:hover:text-white dark:hs-tab-active:bg-neutral-700 dark:hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-x-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-full hover:text-[#006405] focus:outline-hidden focus:text-[#006405] disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-500 dark:hover:text-white dark:focus:text-neutral-400" id="pills-on-gray-color-item-9" aria-selected="false" data-hs-tab="#pills-on-gray-color-9" aria-controls="pills-on-gray-color-9" role="tab">
                Land & Plots 
            </button> 
            <button type="button" className="hs-tab-active:bg-black border-2  hs-tab-active:hover:bg-[#9e9e9e] hs-tab-active:text-white hs-tab-active:hover:text-white dark:hs-tab-active:bg-neutral-700 dark:hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-x-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-full hover:text-[#006405] focus:outline-hidden focus:text-[#006405] disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-500 dark:hover:text-white dark:focus:text-neutral-400" id="pills-on-gray-color-item-10" aria-selected="false" data-hs-tab="#pills-on-gray-color-10" aria-controls="pills-on-gray-color-10" role="tab">
                Flats
            </button> 

            </nav>

            <div className="mt-3">
            <div id="pills-on-gray-color-1" role="tabpanel" aria-labelledby="pills-on-gray-color-item-1">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:pt-3"> 
                    {
                        houseListings.map((item, index) => (
                            <ExploreApartmentsCard 
                                key={index}
                                imgSource={item.imgSource} 
                                imgAltText={item.imgAltText} 
                            />
                        ))
                    } 
                </div>
            </div>
            <div id="pills-on-gray-color-2" className="hidden" role="tabpanel" aria-labelledby="pills-on-gray-color-item-2">
                <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-7 pt-3"> 
                    {
                        housingList.map((item, index) => (
                            <ExploreApartmentsCard 
                                key={index}
                                imgSource={item.imgSource} 
                                imgAltText={item.imgAltText} 
                            />
                        ))
                    } 
                </div>
            </div>
            <div id="pills-on-gray-color-3" className="hidden" role="tabpanel" aria-labelledby="pills-on-gray-color-item-3">
                <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-7 pt-3"> 
                    {
                        houseListings.map((item, index) => (
                            <ExploreApartmentsCard 
                                key={index}
                                imgSource={item.imgSource} 
                                imgAltText={item.imgAltText} 
                            />
                        ))
                    } 
                </div>
            </div>
            <div id="pills-on-gray-color-4" className="hidden" role="tabpanel" aria-labelledby="pills-on-gray-color-item-4">
                <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-7 pt-3"> 
                    {
                        houseListings.map((item, index) => (
                            <ExploreApartmentsCard 
                                key={index}
                                imgSource={item.imgSource} 
                                imgAltText={item.imgAltText} 
                            />
                        ))
                    } 
                </div>
            </div>
            <div id="pills-on-gray-color-5" className="hidden" role="tabpanel" aria-labelledby="pills-on-gray-color-item-5">
                <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-7 pt-3"> 
                    {
                        houseListings.map((item, index) => (
                            <ExploreApartmentsCard 
                                key={index}
                                imgSource={item.imgSource} 
                                imgAltText={item.imgAltText} 
                            />
                        ))
                    } 
                </div>
            </div>
            <div id="pills-on-gray-color-6" className="hidden" role="tabpanel" aria-labelledby="pills-on-gray-color-item-6">
                <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-7 pt-3"> 
                    {
                        houseListings.map((item, index) => (
                            <ExploreApartmentsCard 
                                key={index}
                                imgSource={item.imgSource} 
                                imgAltText={item.imgAltText} 
                            />
                        ))
                    } 
                </div>
            </div>
            <div id="pills-on-gray-color-7" className="hidden" role="tabpanel" aria-labelledby="pills-on-gray-color-item-7">
                <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-7 pt-3"> 
                    {
                        houseListings.map((item, index) => (
                            <ExploreApartmentsCard 
                                key={index}
                                imgSource={item.imgSource} 
                                imgAltText={item.imgAltText} 
                            />
                        ))
                    } 
                </div>
            </div>
            <div id="pills-on-gray-color-8" className="hidden" role="tabpanel" aria-labelledby="pills-on-gray-color-item-8">
                <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-7 pt-3"> 
                    {
                        houseListings.map((item, index) => (
                            <ExploreApartmentsCard 
                                key={index}
                                imgSource={item.imgSource} 
                                imgAltText={item.imgAltText} 
                            />
                        ))
                    } 
                </div>
            </div>
            <div id="pills-on-gray-color-9" className="hidden" role="tabpanel" aria-labelledby="pills-on-gray-color-item-9">
                <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-7 pt-3"> 
                    {
                        houseListings.map((item, index) => (
                            <ExploreApartmentsCard 
                                key={index}
                                imgSource={item.imgSource} 
                                imgAltText={item.imgAltText} 
                            />
                        ))
                    } 
                </div>
            </div>
            <div id="pills-on-gray-color-10" className="hidden" role="tabpanel" aria-labelledby="pills-on-gray-color-item-10">
                <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-7 pt-3"> 
                    {
                        houseListings.map((item, index) => (
                            <ExploreApartmentsCard 
                                key={index}
                                imgSource={item.imgSource} 
                                imgAltText={item.imgAltText} 
                            />
                        ))
                    } 
                </div>
            </div>

            </div>

            
        </div>

        {/* <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-7"> 
            <ExploreApartmentsCard imgSource="https://images.pexels.com/photos/33192876/pexels-photo-33192876.jpeg" imgAltText="Image" />
            <ExploreApartmentsCard imgSource="https://images.pexels.com/photos/33192876/pexels-photo-33192876.jpeg" imgAltText="Image" />
            <ExploreApartmentsCard imgSource="https://images.pexels.com/photos/33192876/pexels-photo-33192876.jpeg" imgAltText="Image" />
        </div> */}
      
    </div>
  )
}
