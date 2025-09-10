
import Image from "next/image"
import OutlineButtonIcon from "../Buttons/OutlineButtonIcon" 
import imgUse  from "../../../../public/img/pexels-heyho-5997996.jpg"

type Props ={
  loction: string;   
  blogTitle: string;
  imgAltText:string ;
  // imgSource:string ;
}

export default function BlogCard({loction, blogTitle,imgAltText}: Props) {
  return (
    <div>
      <div>
        <Image
          src={imgUse} 
          // src={`${imgSource}`}  
          alt={imgAltText}
          width={0}
          height={0}
          className=" rounded-3xl mb-5"
        />  

      </div>
      <div className="flex text-sm items-center text-secondary">
        <p>{loction}</p> 
        <p className=" mx-2"> | </p>
        <div className=" flex items-center "> 
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 pr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>

          <p>Dec 22, 2025</p>
          
          </div>
      </div>
      <p className=" text-2xl font-medium pb-3 pt-2 leading-6  text-secondary ">
        {blogTitle}
      </p>  

      <OutlineButtonIcon 
        btnTitle="Read More" 
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
          </svg> 
        } 
        btnLink={"#"} 
      />
    </div>
  )
}
