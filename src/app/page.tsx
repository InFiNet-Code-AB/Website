import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          InFiNet Code
        </p>
      </div>

      <div className="relative flex flex-col items-center justify-center">
        {/* Image */}
        <Image
          className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert w-full h-full"
          src="/underconstruction.webp"
          alt="Next.js Logo"
          width={800}
          height={600}
          priority
        />
        {/* Text */}
        <div className="text-center text-4xl font-semibold text-white mt-4">
          Coming Soon, Work in Progress
        </div>
      </div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
}
