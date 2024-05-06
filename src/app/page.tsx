"use client";
import Image from "next/image";
import { Video } from "./video";
import { useState } from "react";

export default function Home() {
  const [curRadio, setCurRadio] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16 ">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-3 p- lg:pointer-events-auto lg:p-0"
            href="https://open.spotify.com/artist/33TAOnGG0PzpnmzmomktLw?si=EBYjvN0DQwevs9gDBRp86A"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/LogoUtenFargeSvart.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"></div>
      <Video curRadio={curRadio} setCurRadio={setCurRadio} />
      <a
        href="https://open.spotify.com/album/7DcHHdzSWocEdDVp8x0jbW?si=bvge0clcRmeHB4F6N5aHTA"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute text-stone-950 text-5xl font-bold bg-red-600 z-10 p-4 rounded-lg shadow-lg dark:bg-black dark:text-white top-[800px]"
      >
        STREAM THE ALBUM HERE!
      </a>
    </main>
  );
}
