'use client';


export default function LoginForm() {
 

  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <form className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center">Login</h2>
          <p className="text-gray-600 text-center mt-2">Access your account below.</p>
         
          <div className="mt-4">
            <input
              type="email"
              name="email"
              
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Email"
              required
            />
          </div>
          <div className="mt-4">
            <input
              type="password"
              name="password"
            
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
