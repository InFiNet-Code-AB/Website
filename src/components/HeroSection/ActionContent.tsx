export const ActionContent = () => {
  return (
    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
      <h1 className="text-5xl font-bold leading-none sm:text-6xl">
        We are
        <span className="dark:text-indigo-500"> craft</span>ing the future
      </h1>
      <p className="dark dark:text-white light light:text-black mt-6 text-xl pb-2">
        Mentorship in Motion 🧗🏻‍♂️
      </p>
      <p className="mb-8 text-lg">Your Guide to Software Durability 🚀</p>
      <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
        <a
          rel="noopener noreferrer"
          href="#"
          className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
        >
          What we do
        </a>
        <a
          rel="noopener noreferrer"
          href="#"
          className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
        >
          Contact
        </a>
      </div>
    </div>
  );
};
