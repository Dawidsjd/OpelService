"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export default function Profile(){

    const {data: session} = useSession()

    if (session) {
        return (
            <>
            {session?.user?.name}
            <div className="text-center">
                <button
                onClick={() => signOut()}
                    type="button"
                    className="w-full bg-white text-gray-700 border border-gray-300 py-2 px-4 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Sign Out
                </button>
            </div>
            </>
        )
    }

    return (
        <>
        <div className="text-center">
          <button
          onClick={() => signIn('google')}
            type="button"
            className="w-full bg-white text-gray-700 border border-gray-300 py-2 px-4 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Sign in with Google
          </button>
        </div>
        </>
    )
}