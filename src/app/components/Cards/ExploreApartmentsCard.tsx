
import Image from "next/image";
// import imgUse  from "../../../../public/img/pexels-heyho-5997996.jpg"

type Props = {
    imgSource: string;
    imgAltText: string;
};


export default function ExploreApartmentsCard({imgSource, imgAltText}: Props) {
  return (
    <div>
      <div className="relative">
          <Image 
              src={`${imgSource}`}
              alt={imgAltText}
              width={1000}
              height={1000}
              className="w-full h-[350px] object-cover rounded-3xl mb-4"
          />  
          <p className="  font-semibold absolute rounded-full px-4 bg-white top-5 left-5">
            $920,000
          </p>      
      </div>


        <div className=" text-lg">
            <p className=" text-2xl font-medium ">Crystal Hogts Residence</p> 
            <p> 114 Crystal Height Drive, Califonia</p>
            <p> 3 Beds &#x2022; 2 Baths &#x2022; 1,500 sq.ft.</p>
        </div>
      
    </div>
  )
}
