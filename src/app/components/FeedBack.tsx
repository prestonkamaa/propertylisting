import FeedBackCard from "./Cards/FeedBackCard";
import Image from "next/image";
import clientsImg from "../../../public/img/clients.jpg";

export default function FeedBack() {
  return (
    <div className=" lg:p-16 p-4 text-secondary bg-white">
      <div className=" flex lg:mb-10 mb-4 justify-between items-center ">
        <h1 className=" lg:text-5xl text-4xl lg:leading-13 ">
            Our Client <span className=" font-medium">Feedback</span>
        </h1> 

        <div className=" flex flex-end lg:flex-row flex-col lg:gap-5 items-center ">
          <div className=" lg:w-1/2 ">
            <Image 
                src={clientsImg}
                alt="star"
                width={100}
                height={100}
                className=" w-full"
            />
          </div>
          <div className=" lg:w-1/2 ">
            More than <span className=" font-semibold text-xl"> 500+ </span>Client Reviews.
          </div>
        </div>
      </div>

      <div className="relative before:rounded-4xl before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-black before:opacity-40">

        <Image 
            src="https://images.pexels.com/photos/7031594/pexels-photo-7031594.jpeg"
            alt="Picture of the author"
            width={1000}
            height={1000}
            className=" rounded-4xl object-cover w-full lg:h-[650px] h-[430px] z-0 relative"
        />      

        <div className=" bg-black "></div>


        <div className="lg:w-2/5 w-full lg:px-0 px-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 ">
            <FeedBackCard />
        </div>

      </div>


     
    </div>
  )
}
