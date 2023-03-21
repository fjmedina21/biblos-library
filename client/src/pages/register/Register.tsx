import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="flex min-h-screen justify-center selection:bg-rose-400 selection:text-white">
  <div className="right px- hidden flex-1 items-center justify-center bg-[url('https://images.pexels.com/photos/13159182/pexels-photo-13159182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover md:flex">
    <div className="p-5">
      <div className="flex flex-col gap-3 rounded-xl px-3 py-14 leading-10 text-white backdrop-blur-lg">
        <h1 className="mb-5 text-[3rem] font-bold">Sign Up</h1>
        <span className="text-[1.7rem] font-medium tracking-tight">Conviértete en un miembro de nuestra biblioteca virtual y descubre un universo de conocimiento y entretenimiento. registrándote hoy mismo y disfruta de la lectura sin límites</span>
      </div>
    </div>
  </div>

  <div className="left flex flex-1 items-center my-auto w-full flex-col ">
  <div className="logo  relative mb-7">
        <div className="absolute h-[1.5rem] w-[1.5rem] bg-amber-300 -top-2 right-4">
          <div className="circle absolute top-0 left-0 h-[0.8rem] w-[0.8rem] rounded-br-full bg-white"></div>

          <div className="circle absolute top-0 right-0 h-[0.8rem] w-[0.8rem] rounded-bl-full bg-white"></div>

          <div className="circle absolute bottom-0 right-0 h-[0.8rem] w-[0.8rem] rounded-tl-full bg-white"></div>
          <div className="circle absolute bottom-0 left-0 h-[0.8rem] w-[0.8rem] rounded-tr-full bg-white"></div>
        </div>

        <div className="absolute h-[1.5rem] w-[1.5rem] bg-amber-300 -top-4 left-2">
          <div className="circle absolute top-0 left-0 h-[0.8rem] w-[0.8rem] rounded-br-full bg-white"></div>

          <div className="circle absolute top-0 right-0 h-[0.8rem] w-[0.8rem] rounded-bl-full bg-white"></div>

          <div className="circle absolute bottom-0 right-0 h-[0.8rem] w-[0.8rem] rounded-tl-full bg-white"></div>
          <div className="circle absolute bottom-0 left-0 h-[0.8rem] w-[0.8rem] rounded-tr-full bg-white"></div>
        </div>

        <div className="absolute h-[1.5rem] w-[1.5rem] bg-amber-300  -right-5 top-3">
          <div className="circle absolute top-0 left-0 h-[0.8rem] w-[0.8rem] rounded-br-full bg-white"></div>

          <div className="circle absolute top-0 right-0 h-[0.8rem] w-[0.8rem] rounded-bl-full bg-white"></div>

          <div className="circle absolute bottom-0 right-0 h-[0.8rem] w-[0.8rem] rounded-tl-full bg-white"></div>
          <div className="circle absolute bottom-0 left-0 h-[0.8rem] w-[0.8rem] rounded-tr-full bg-white"></div>
        </div>

        <div className="absolute h-[1.5rem] w-[1.5rem] bg-amber-300  top-2 -left-6">
          <div className="circle absolute top-0 left-0 h-[0.8rem] w-[0.8rem] rounded-br-full bg-white"></div>

          <div className="circle absolute top-0 right-0 h-[0.8rem] w-[0.8rem] rounded-bl-full bg-white"></div>

          <div className="circle absolute bottom-0 right-0 h-[0.8rem] w-[0.8rem] rounded-tl-full bg-white"></div>
          <div className="circle absolute bottom-0 left-0 h-[0.8rem] w-[0.8rem] rounded-tr-full bg-white"></div>
        </div>

        <div className="absolute h-[1.5rem] w-[1.5rem] bg-amber-300 -bottom-4 left-2">
          <div className="circle absolute top-0 left-0 h-[0.8rem] w-[0.8rem] rounded-br-full bg-white"></div>

          <div className="circle absolute top-0 right-0 h-[0.8rem] w-[0.8rem] rounded-bl-full bg-white"></div>

          <div className="circle absolute bottom-0 right-0 h-[0.8rem] w-[0.8rem] rounded-tl-full bg-white"></div>
          <div className="circle absolute bottom-0 left-0 h-[0.8rem] w-[0.8rem] rounded-tr-full bg-white"></div>
        </div>

        <div className="absolute h-[1.5rem] w-[1.5rem] bg-amber-300 -bottom-3 right-6">
          <div className="circle absolute top-0 left-0 h-[0.8rem] w-[0.8rem] rounded-br-full bg-white"></div>

          <div className="circle absolute top-0 right-0 h-[0.8rem] w-[0.8rem] rounded-bl-full bg-white"></div>

          <div className="circle absolute bottom-0 right-0 h-[0.8rem] w-[0.8rem] rounded-tl-full bg-white"></div>
          <div className="circle absolute bottom-0 left-0 h-[0.8rem] w-[0.8rem] rounded-tr-full bg-white"></div>
        </div>

        <span className="text-[2.5rem] font-bold relative z-40 ">
          Biblos
        </span>

      </div>
    <form action="" className="flex w-3/4 xl:w-1/2 flex-col items-center gap-6 px-10 md:px-0">
      <h1 className="text-[1.5rem] font-bold md:text-[2rem]">Create an account</h1>
      <input className="w-full rounded-lg border-[1px] border-[gray] p-3 outline-none" type="text" placeholder="Username" />
            <input className="w-full rounded-lg border-[1px] border-[gray] p-3 outline-none" type="text" placeholder="Email" />
      <input className="w-full rounded-lg border-[1px] border-[gray] p-3 outline-none" type="password" placeholder="Password" />
            <input className="w-full rounded-lg border-[1px] border-[gray] p-3 outline-none" type="password" placeholder="Confirm password" />

      <button className="w-full rounded-lg bg-indigo-600 p-3 font-medium text-white">Sign Up</button>
      <span >Do you have an account? <Link to="/login" className="text-blue-500 underline">Sign In</Link></span>
    </form>
  </div>
</div>

  )
}

export default Register