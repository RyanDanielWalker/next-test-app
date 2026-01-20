import Link from "next/link";
import React from "react";
import LogoutButton from "./LogoutButton";

export default function Navbar() {
  const session = true;
  return (
    <nav className="bg-white shadow-sm">
      <div className="container max-auto p-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Contact Manager
        </Link>
        <div className="flex items-center space-x-4">
          {session ? (
            <>
              <Link href="/contact" className="hover:text-blue-600 mr-8">
                Contacts
              </Link>
              <LogoutButton />
            </>
          ) : (
            <Link href="/login" className="hover:text-blue-600">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
