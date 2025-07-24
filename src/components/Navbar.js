
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white border-gray-200 shadow-md dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
            className="h-8"
            alt="Turf Logo"
          />
          <span className="self-center text-2xl font-bold whitespace-nowrap text-green-600 dark:text-green-400">
            BookMyTurf
          </span>
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link to="/signin">
            <button
              type="button"
              className="text-white bg-green-600 hover:bg-green-700 focus:outline-none font-medium rounded-lg text-lg px-8 py-2 text-center dark:bg-green-500"
            >
              Sign in
            </button>
          </Link>

          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 md:p-0 text-white bg-green-600 rounded md:bg-transparent md:text-green-600 md:dark:text-green-400 text-xl"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-xl block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-600 md:dark:hover:text-green-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/booking"
                className="text-xl block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-600 md:dark:hover:text-green-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Book Turf
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-xl block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-600 md:dark:hover:text-green-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
