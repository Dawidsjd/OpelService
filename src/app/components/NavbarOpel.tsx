// components/NavbarOpel.tsx
import React from 'react';
import Link from 'next/link';

const NavbarOpel: React.FC = () => {
  return (
    <div className="navbar bg-base-100 shadow-lg px-4 py-2">
      <div className="flex-1 flex items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo/logo.png" // Poprawiona ścieżka do logo
            alt="Opel Logo"
            className="h-16 w-auto mr-4" // Dostosuj wysokość i margines
          />
          <span className="text-xl font-bold hidden md:block">Opel Service</span> {/* Ukrywa tekst na urządzeniach mobilnych */}
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full border-2 border-gray-300 shadow-md">
              <img
                alt="Profile Avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarOpel;
