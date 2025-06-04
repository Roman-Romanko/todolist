'use client';
import React from 'react';

const LoginPage = () => {
    return (
        <div className="w-screen flex h-screen items-center justify-center flex-col">
            <h1 className='text-center text-4xl'>Login</h1>
            <form className='flex flex-col w-100'>
                <label className='text-lg mt-4 relative'>
                <input
                    type="email"
                    className='border outline-none focus:border-blue-500 focus:text-white transition duration-200 border-gray-300 rounded-md p-2 mt-2 peer w-full' />
                    <span className='mx-2 absolute left-0 top-4 transition duration-200 peer-focus:-translate-y-4.5 peer-focus:-translate-x-0 peer-focus:text-[15px] peer-focus:bg-black peer-focus:text-blue-400 text-xl font-display'>Email</span>
                </label>
                <label className='text-lg mt-4 relative'>
                <input
                    type="password"
                    className='border outline-none focus:border-blue-500 focus:text-white transition duration-200 border-gray-300 rounded-md p-2 mt-2 peer w-full' />
                    <span className='mx-2 absolute left-0 top-4 transition duration-200 peer-focus:-translate-y-4.5 peer-focus:-translate-x-0 peer-focus:text-[15px] peer-focus:bg-black peer-focus:text-blue-400 text-xl font-display'>Password</span>
                </label>
            </form>
            <button type='submit' className='bg-blue-500 w-40 h-10 rounded-xl text-xl mt-5 hover:cursor-pointer hover:bg-blue-400 duration-300 ease-out'>Login</button>
            <p className='flex mt-5'>Not registered? <div className='hover:cursor-pointer text-blue-700 hover:text-blue-500 duration-300 ease-out ml-2'>Registration</div></p>
        </div>
    )
}

export default LoginPage;
