"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Profile() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <div className="text-center mb-4">
          {session.user?.image && (
            <Image
              src={session.user.image}
              alt={`${session.user.name}'s profile picture`}
              className="mx-auto rounded-full"
              width={96}
              height={96}
              priority={true}
            />
          )}
          <p className="text-lg font-semibold mt-4">{session.user?.name}</p>
        </div>

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
    );
  }

  return (
    <>
      <div className="text-center">
        <button
          onClick={() => signIn("google")}
          type="button"
          className="w-full bg-white text-gray-700 border border-gray-300 py-2 px-4 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Sign in with Google
        </button>
      </div>
    </>
  );
}
