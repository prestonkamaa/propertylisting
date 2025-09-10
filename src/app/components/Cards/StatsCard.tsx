import React from "react"

type Props ={
    countItem: string; 
    title: string;
}

export default function StatsCard({countItem, title}:Props) {
  return (
    <div>
      <p className=" lg:text-5xl text-4xl font-semibold mb-2">
        {countItem}
      </p>
      <p className=" text-lg">
        {title}
      </p>
    </div>
  )
}
