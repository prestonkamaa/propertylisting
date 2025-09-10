import StatsCard from "./Cards/StatsCard";

const counterInfo =[
    {
        countItem: "1,500+",
        title: "Succesful Projects"
    },
    {
        countItem: "1,200+",
        title: "Happy Clients"
    },
    {
        countItem: "50+",
        title: "Awards Won"
    },
    {
        countItem: "10+",
        title: "Years of Experience"
    }
]

export default function IntroSection() {
  return (
    <div className=" lg:py-20 lg:px-16 text-secondary  px-4 py-4 bg-white ">
        <div className="flex lg:flex-row flex-col lg:gap-20 gap-4">
            <div className=" lg:w-2/5">
                <h1 className=" font-medium text-3xl mb-5 ">Transform Properties with Tailored Investment Expertise</h1>
                <p className="  ">By leveraging advanceddata analytics and personalised investment approaches, we deliver results that exceed expecations, helping clients unlock the full potential.</p>
            </div>

            <div className=" lg:w-3/5">
                <p className="lg:text-5xl text-3xl lg:leading-13">
                    <span className="font-semibold  ">Maximizing Property</span> Growth Through Cutting-Edge Investment Strategies
                </p>
            </div>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-5 gap-4 lg:mt-16 mt-4 lg:mb-10 mb-5">
            {counterInfo.map((item, i) =>{
                return (
                <StatsCard key={i} countItem={item.countItem} title={item.title}  />
            )
            })}
             
        </div>

        <hr />
      
    </div>
  )
}
