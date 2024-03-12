import { NavigationMenu } from "@/components/Navigation/Navigation";

export default function Home() {
  return (
    <div className="dark dark:my-dark-bg bg-gradient-to-r from-fuchsia-200 to-blue-300 h-screen">
      <NavigationMenu />
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 skew-y-6 rotate-3 hover:rotate-0 hover:skew-y-0 translate-y-6 translate-x-6 hover:-translate-y-6 hover:-translate-x-6 ease-in-out duration-300">
        <a href="#">
          <img
            class="p-8 rounded-t-lg"
            src="/nemanjaimage.jpeg"
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
            </h5>
          </a>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              $599
            </span>
            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
      {/* <img
        src="/logo-light-long.png"
        className="hover:-skew-y-12 hover:-translate-y-6 hover:translate-x-6 hover:scale-125 ease-in-out duration-300"
      ></img> */}
      {/* <HeroSection /> */}
    </div>
  );
}
