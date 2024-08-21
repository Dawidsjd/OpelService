"use client";

const LogIn = () => {
  return (
    <div className="bg-[#1d232a] dark:bg-gray-900">
      <div className="flex justify-center h-screen">
        <div
          className="hidden bg-cover lg:block lg:w-2/3"
          style={{
            backgroundImage: 'url(/aboutGraphic/opel_PixelArt.jpg)',
            backgroundPosition: 'center 70%', // Adjust this as needed
            backgroundSize: 'cover', // Ensures the image covers the element
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
                className="mx-auto h-28" // mx-auto centers the image horizontally
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

              <p className="mt-6 text-sm text-center text-gray-400">
                Don&#x27;t have an account yet? <a href="#" className="text-blue-500 focus:outline-none focus:underline hover:underline">Sign up</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
