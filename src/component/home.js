import React from "react";

const Home = () => {
  return (
    <div className="container flex flex-col-reverse  md:flex-row items-center px-6 mx-auto  space-y-0 md:space-y-0">
    <div className="flex flex-col mb-32 mt-40 space-y-12 md:w-1/2">
    <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
   <span className="text-center">
   HI!
   <br />
   </span>
My name is <span>Djanati UWASE</span>
  </h1>
 
  <h4 className="text-white md:text-2xl text-lg md:leading-normal leading-5 font-bold text-gray-600">FullStack Web Developer</h4>
<div className=" animate-bounce relative">
<a href="#" className="bg-darkBlue p-3 text-white rounded-full baseline px-6">Contact Me</a>

</div>

    </div>
    
    
    </div>
  );
};
export default Home;
