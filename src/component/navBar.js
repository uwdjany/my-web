import React, { useState } from 'react'


const Nav = () => {
    // let Links=[
    //     {name:"HOME",link:"/"},
    //     {name:"ABOUT ME",link:"/"},
    //     {name:"MY SKILLS",link:"/"},
    //     {name:"MY WORK",link:"/"},
    //     {name:"CONTACT",link:"/"},

    // ];
    const [open,setOpen]=useState(false)
    const [activeLink,setActiveLink] = useState('home')
    
  return (
    <div className='shadow-md w-full fixed top-0 left-0 border-y border-y-white-900'>
    <div className="md:flex items-center justify-between bg-black py-4 md:px-10 px-7">
    <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800  '>
    <span className='text-4xl'>
    
    </span>
    <a href="" className='text-3xl font-bold text-brightRed'>Djanati</a>
    </div>
    <div onClick={()=>setOpen(!open)} 
    className='text-white text-4xl absolute right-8 top-4 cursor-pointer md:hidden'>
    <ion-icon name={open ? 'close':'menu'}></ion-icon>
    </div>
    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20' :'top-[-490px]'}`  }>
{  /*  {
       Links.map((link)=>(
        <li key={link.name} className='md:ml-8 text-xl  md:my-0 my-7'>
        <a href={link.link} className="hover:text-brightRed duration-500 text-white">{link.name}</a>
        </li>

       ))}
       */}
       <li className='md:ml-8 text-xl  md:my-0 my-7 hover:text-brightRed duration-500 text-white'>
       <a href="#" className={activeLink === 'home' ? 'text-brightRed' : 'text-white'}>HOME</a>
       </li>
       <li className='md:ml-8 text-xl  md:my-0 my-7'>
       <a href="#" className="hover:text-brightRed duration-500 text-white">ABOUT ME</a>
       </li>
       <li className='md:ml-8 text-xl  md:my-0 my-7'>
       <a href="#" className="hover:text-brightRed duration-500 text-white">MY SKILLS</a>
       </li>
       <li className='md:ml-8 text-xl  md:my-0 my-7'>
       <a href="#" className="hover:text-brightRed duration-500 text-white">MY WORK</a>
       </li>
       <li className='md:ml-8 text-xl  md:my-0 my-7'>
       <a href="#" className="hover:text-brightRed duration-500 text-white">CONTACT ME</a>
       </li>
    
    </ul>
    
    </div>
    
    </div>
  )
}

export default Nav