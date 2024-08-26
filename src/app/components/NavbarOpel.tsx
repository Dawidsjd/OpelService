// components/NavbarOpel.tsx
"use client"; // Konieczne, aby używać useSession w komponencie

import React from 'react';
import Link from 'next/link';
import { useSession, signOut } from "next-auth/react";

const NavbarOpel: React.FC = () => {
  const { data: session } = useSession();

  return (
    <div className="navbar sticky top-0 left-0 right-0 shadow-2xl px-4 py-2 bg-[#14181f] z-50">
      <div className="flex-1 flex items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo/logo.png"
            alt="Opel Logo"
            className="h-16 w-auto mr-4"
          />
          <span className="text-xl font-bold hidden md:block">Opel Service</span>
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full shadow-md">
              <img
                alt="Profile Avatar"
                // Jeśli użytkownik jest zalogowany, pokaż jego zdjęcie profilowe, w przeciwnym razie domyślne
                src={session?.user?.image || "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg"}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg">
            {session ? (
              <>
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li><a onClick={() => signOut()}>Logout</a></li> {/* Wylogowanie */}
              </>
            ) : (
              <li>
                <Link href="/log-in">Log in</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarOpel;
