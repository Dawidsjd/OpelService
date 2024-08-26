"use client";

import { IconBrandGoogle, IconBrandGithub } from '@tabler/icons-react';
import Link from 'next/link';
import { signIn } from "next-auth/react";


const LogIn = () => {
  return (
    <div className="bg-[#1d232a] dark:bg-gray-900">
      <div className="flex justify-center h-screen">
        <div
          className="hidden bg-cover lg:block lg:w-2/3"
          style={{
            backgroundImage: 'url(/aboutGraphic/opel_PixelArt.jpg)',
            backgroundPosition: 'center 70%',
            backgroundSize: 'cover',
          }}
        >
          <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
            <div>
              <h2 className="text-4xl font-bold text-white">Opel Service</h2>
              <p className="max-w-xl mt-3 text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus molestiae
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <img 
                src="/logo/logo.png" 
                alt="Brand Logo" 
                className="mx-auto h-28"
              />
              <p className="mt-3 text-gray-500 dark:text-gray-300">Log in to access your account</p>
            </div>

            <div className="mt-8">
              <form>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="example@example.com" 
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-[#141a1e] dark:focus:border-[#141a1e] focus:ring-[#141a1e] dark:focus:ring-[#141a1e] focus:outline-none focus:ring focus:ring-opacity-40" 
                  />
                </div>

                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-200">Password</label>
                    <a href="#" className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a>
                  </div>

                  <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="Your Password" 
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-[#141a1e] dark:focus:border-[#141a1e] focus:ring-[#141a1e] dark:focus:ring-[#141a1e] focus:outline-none focus:ring focus:ring-opacity-40" 
                  />
                </div>

                <div className="mt-6">
                  <button
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#141a1e] rounded-md hover:bg-[#141a1eb1] focus:outline-none focus:bg-[#141a1eb1] focus:ring focus:ring-[#141a1e] focus:ring-opacity-50">
                    Log In
                  </button>
                </div>
              </form>

              <div className="my-6 flex items-center justify-center">
                <div className="border-t border-gray-300 w-full"></div>
                <span className="mx-4 text-gray-400">OR</span>
                <div className="border-t border-gray-300 w-full"></div>
              </div>

              <div className="mt-6 space-y-4">
                <button
                  onClick={() => signIn('google', { callbackUrl: '/opel' })}
                  className="w-full flex items-center justify-center px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:bg-red-500 focus:ring focus:ring-red-400 focus:ring-opacity-50"
                >
                  <IconBrandGoogle className="h-5 w-5 mr-2" />
                  Log in with Google
                </button>

                <button
                  className="w-full flex items-center justify-center px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:ring focus:ring-gray-600 focus:ring-opacity-50"
                >
                  <IconBrandGithub className="h-5 w-5 mr-2" />
                  Log in with GitHub
                </button>
              </div>

              <p className="mt-6 text-sm text-center text-gray-400">
                Don&#x27;t have an account yet?{' '}
                <Link href="/sign-in" className="text-blue-500 focus:outline-none focus:underline hover:underline">
                   Sign up
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
