import Link from "next/link";
import React from "react";

function Navigation() {
  return (
    <div className="flex ">
      <div>Logo</div>
      <nav className="flex">
        <ul className="flex gap-2 bg-white text-black p-2">
          <li className="bg-red ">
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/admin">Admin </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
