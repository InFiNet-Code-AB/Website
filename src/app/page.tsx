import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Image
          src="/logo-dark-long.png"
          alt="InFiNet Code AB logo"
          width={200}
          height={50}
          priority
        />
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
