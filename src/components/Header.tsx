import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            height={50}
            width={50}
            src="https://media.licdn.com/dms/image/C4E03AQEbuFeqUG9NvA/profile-displayphoto-shrink_200_200/0/1651065770250?e=1691625600&v=beta&t=wi1Lgrx-nLzmumtuvtzOBdw0_9YdVP5Hfv9kZ2iJ6Fg"
            unoptimized
            alt="logo"
          />
        </Link>
      </div>
      <div>
        <Link
          href="/"
          className="px-3 py-3 md:px-5 md:py-5 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center"
        >
          Inscreva-se na minha Newsletter
        </Link>
      </div>
    </header>
  );
}
