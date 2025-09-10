import OutlineButton from "./Buttons/OutlineButton";
import BlogCard from "./Cards/BlogCard";
 

const blogItems = [
  { 
    location: "CANADA",
    blogTitle: "Sustainable Destination and Practices",
    imgAltText: "Sustainable Destination and Practices",
    // imgSource: "https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg",  
  },
  { 
    location: "KENYA",
    blogTitle: "Where to find the best property deals around",
    imgAltText: "Sustainable Destination and Practices",
    // imgSource: "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg",  
  },
  { 
    location: "USA",
    blogTitle: "Best Mogage Rates in 2025 for New Home Buyers",
    imgAltText: "Sustainable Destination and Practices",
    // imgSource: "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg",  
  },
]

export default function Blog() {
  return (
    <div className=" lg:p-16 p-4 bg-white">
      <div className=" flex lg:flex-row flex-col lg:mb-10 mb-4 justify-between ">
        <h1 className=" lg:text-5xl text-4xl lg:leading-13 ">
            Our Latest <span className=" font-medium">News & Blogs</span>
        </h1>

        <div className="lg:block hidden"> <OutlineButton btnTitle="See More Blogs" /> </div>

      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {blogItems.map((items, i)=> {
                return(
                  <BlogCard 
                    key={i}
                    // imgSource={items.imgSource}
                    loction={items.location}
                    blogTitle={items.blogTitle}
                    imgAltText={items.imgAltText}
                  />  
            )    
            })} 
        </div> 
    </div>
  )
}
