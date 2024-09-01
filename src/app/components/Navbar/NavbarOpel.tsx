// components/NavbarOpel.tsx
"use client"; // Konieczne, aby używać useSession w komponencie

import React, { useState } from 'react';
import Link from 'next/link';
import { useSession, signOut } from "next-auth/react";
import { IconMenu2 } from '@tabler/icons-react'; // Import ikony hamburgera
import { IconX } from '@tabler/icons-react'; // Import ikony zamknięcia
import Image from 'next/image';

const NavbarOpel: React.FC = () => {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  console.log(session?.user?.image)

  return (
    <div className="navbar sticky top-0 left-0 right-0 shadow-2xl px-4 py-2 bg-[#14181f] z-50">
      <div className="flex-1 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo/logo.png"
            alt="Opel Logo"
            className="h-16 w-auto mr-4"
          />
          <span className="text-xl font-bold hidden md:block">Opel Service</span>
        </Link>

        {/* Hamburger Menu Button for Mobile */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          <IconMenu2 className="w-8 h-8" />
        </button>

        {/* Menu Items for Desktop */}
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/opel" className="text-md font-bold hover:text-gray-300">
            Repairs
          </Link>
          <Link href="/market" className="text-md font-bold hover:text-gray-300">
            Market
          </Link>
          <Link href="/FAQ" className="text-md font-bold hover:text-gray-300">
            FAQ
          </Link>
          <Link href="/contact" className="text-md font-bold hover:text-gray-300">
            Contact
          </Link>
          {/* Avatar i dropdown menu */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full shadow-md">
              <Image
                src={session?.user?.image || "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg"}
                alt="Profile Avatar"
                width={50} // Szerokość obrazu
                height={50} // Wysokość obrazu
                className="rounded-full" // Klasa CSS dla stylizacji, np. zaokrąglenie
                priority // Dodaje priorytet dla ładowania obrazu, jeśli jest to ważne
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

      {/* Full-Screen Menu for Mobile */}
      <div
        className={`fixed inset-0 h-full w-full bg-[#14181f] text-white flex flex-col justify-center items-center transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white"
          onClick={toggleMenu}
        >
          <IconX className="w-8 h-8" />
        </button>

        <div className="flex flex-col gap-8 text-center text-lg">
          <Link href="/opel" className="text-white hover:text-gray-300" onClick={toggleMenu}>
            Repairs
          </Link>
          <Link href="/market" className="text-white hover:text-gray-300" onClick={toggleMenu}>
            Market
          </Link>
          <Link href="/FAQ" className="text-white hover:text-gray-300" onClick={toggleMenu}>
            FAQ
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-300" onClick={toggleMenu}>
            Contact
          </Link>
          {session ? (
            <>
              <a className="text-white hover:text-gray-300" onClick={toggleMenu}>
                Profile
              </a>
              <a className="text-white hover:text-gray-300" onClick={toggleMenu}>
                Settings
              </a>
              <a className="text-white hover:text-gray-300" onClick={() => { toggleMenu(); signOut(); }}>
                Logout
              </a>
            </>
          ) : (
            <Link href="/log-in" className="text-white hover:text-gray-300" onClick={toggleMenu}>
              Log in
            </Link>
          )}
        </div>
      </div>

      {/* Darkened Background when Menu is Open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
};

export default NavbarOpel;
