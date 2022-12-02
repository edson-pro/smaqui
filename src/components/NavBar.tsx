import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Button } from "@mantine/core";

import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

export default function NavBar() {
  const Links = [
    { link: "/", title: "Ahabanza" },
    { link: "#faq", title: "Ibibazo" },
    { link: "#", title: "Abo Turibo" },
    { link: "#contact", title: "Twandikire" },
  ];
  return (
    <header>
      <Popover className="relative bg-white">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <span className="ml-0  text-primary text-2xl uppercase font-bold">
                Smaqui
              </span>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white border-none rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex space-x-10">
            {Links.map((e, index) => (
              <Link
                to={e.link}
                key={index}
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                {e.title}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex gap-5 items-center justify-end md:flex-1 lg:w-0">
            <Link to={"/login"}>
              <Button size="md" variant="subtle">
                Kwinjira
              </Button>
            </Link>
            <Link to={"/login"}>
              <Button size="md">Tangira</Button>
            </Link>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-2 pb-2 px-2">
                <div className="flex items-center justify-between">
                  <div>
                    <Link to="/">
                      <span className="ml-0 text-primary text-2xl uppercase font-bold">
                        Smaqui
                      </span>
                    </Link>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white border-none rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="py-6 px-5">
                <div className="grid grid-cols-1 gap-8">
                  {Links.map((e, index) => (
                    <Link
                      to={e.link}
                      key={index}
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      {e.title}
                    </Link>
                  ))}
                </div>
                <div className="mt-6">
                  <Button className="w-full" size="md">
                    Sign up
                  </Button>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing User?
                    <a href="#" className="text-gray-900 ml-3">
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
}
