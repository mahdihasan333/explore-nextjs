import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <div>
      <nav className="flex justify-center">
        <ul className="flex justify-between gap-5">
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/services">SERVICES</Link>
          </li>
          <li>
            <Link href="/about">ABOUT</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
