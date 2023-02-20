/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/solid";
import { Menu, Transition } from "@headlessui/react";
const months = [
  {
    name: "January",
    days: [
      { date: "2021-12-28" },
      { date: "2021-12-29" },
      { date: "2021-12-30" },
      { date: "2021-12-31" },
      { date: "2022-01-01", isCurrentMonth: true },
      { date: "2022-01-02", isCurrentMonth: true },
      { date: "2022-01-03", isCurrentMonth: true },
      { date: "2022-01-04", isCurrentMonth: true },
      { date: "2022-01-05", isCurrentMonth: true },
      { date: "2022-01-06", isCurrentMonth: true },
      { date: "2022-01-07", isCurrentMonth: true },
      { date: "2022-01-08", isCurrentMonth: true },
      { date: "2022-01-09", isCurrentMonth: true },
      { date: "2022-01-10", isCurrentMonth: true },
      { date: "2022-01-11", isCurrentMonth: true },
      { date: "2022-01-12", isCurrentMonth: true, isToday: true },
      { date: "2022-01-13", isCurrentMonth: true },
      { date: "2022-01-14", isCurrentMonth: true },
      { date: "2022-01-15", isCurrentMonth: true },
      { date: "2022-01-16", isCurrentMonth: true },
      { date: "2022-01-17", isCurrentMonth: true },
      { date: "2022-01-18", isCurrentMonth: true },
      { date: "2022-01-19", isCurrentMonth: true },
      { date: "2022-01-20", isCurrentMonth: true },
      { date: "2022-01-21", isCurrentMonth: true },
      { date: "2022-01-22", isCurrentMonth: true },
      { date: "2022-01-23", isCurrentMonth: true },
      { date: "2022-01-24", isCurrentMonth: true },
      { date: "2022-01-25", isCurrentMonth: true },
      { date: "2022-01-26", isCurrentMonth: true },
      { date: "2022-01-27", isCurrentMonth: true },
      { date: "2022-01-28", isCurrentMonth: true },
      { date: "2022-01-29", isCurrentMonth: true },
      { date: "2022-01-30", isCurrentMonth: true },
      { date: "2022-01-31", isCurrentMonth: true },
    ],
  },

  {
    name: "February",
    days: [
      { date: "2022-01-31" },
      { date: "2022-02-01", isCurrentMonth: true },
      { date: "2022-02-02", isCurrentMonth: true },
      { date: "2022-02-03", isCurrentMonth: true },
      { date: "2022-02-04", isCurrentMonth: true },
      { date: "2022-02-05", isCurrentMonth: true },
      { date: "2022-02-06", isCurrentMonth: true },
      { date: "2022-02-07", isCurrentMonth: true },
      { date: "2022-02-08", isCurrentMonth: true },
      { date: "2022-02-09", isCurrentMonth: true },
      { date: "2022-02-10", isCurrentMonth: true },
      { date: "2022-02-11", isCurrentMonth: true },
      { date: "2022-02-12", isCurrentMonth: true },
      { date: "2022-02-13", isCurrentMonth: true },
      { date: "2022-02-14", isCurrentMonth: true },
      { date: "2022-02-15", isCurrentMonth: true },
      { date: "2022-02-16", isCurrentMonth: true },
      { date: "2022-02-17", isCurrentMonth: true },
      { date: "2022-02-18", isCurrentMonth: true },
      { date: "2022-02-19", isCurrentMonth: true },
      { date: "2022-02-20", isCurrentMonth: true },
      { date: "2022-02-21", isCurrentMonth: true },
      { date: "2022-02-22", isCurrentMonth: true },
      { date: "2022-02-23", isCurrentMonth: true },
      { date: "2022-02-24", isCurrentMonth: true },
      { date: "2022-02-25", isCurrentMonth: true },
      { date: "2022-02-26", isCurrentMonth: true },
      { date: "2022-02-27", isCurrentMonth: true },
      { date: "2022-02-28", isCurrentMonth: true },
      { date: "2022-03-01" },
      { date: "2022-03-02" },
      { date: "2022-03-03" },
      { date: "2022-03-04" },
      { date: "2022-03-05" },
      { date: "2022-03-06" },
    ],
  },

  {
    name: "March",
    days: [
      { date: "2022-02-26" },

      { date: "2022-02-27" },

      { date: "2022-02-28" },
      { date: "2022-03-01", isCurrentMonth: true },
      { date: "2022-03-02", isCurrentMonth: true },
      { date: "2022-03-03", isCurrentMonth: true },
      { date: "2022-03-04", isCurrentMonth: true },
      { date: "2022-03-05", isCurrentMonth: true },
      { date: "2022-03-06", isCurrentMonth: true },
      { date: "2022-03-07", isCurrentMonth: true },
      { date: "2022-03-08", isCurrentMonth: true },
      { date: "2022-03-09", isCurrentMonth: true },
      { date: "2022-03-10", isCurrentMonth: true },
      { date: "2022-03-11", isCurrentMonth: true },
      { date: "2022-03-12", isCurrentMonth: true },
      { date: "2022-03-13", isCurrentMonth: true },
      { date: "2022-03-14", isCurrentMonth: true },
      { date: "2022-03-15", isCurrentMonth: true },
      { date: "2022-03-16", isCurrentMonth: true },
      { date: "2022-03-17", isCurrentMonth: true },
      { date: "2022-03-18", isCurrentMonth: true },
      { date: "2022-03-19", isCurrentMonth: true },
      { date: "2022-03-20", isCurrentMonth: true },
      { date: "2022-03-21", isCurrentMonth: true },
      { date: "2022-03-22", isCurrentMonth: true },
      { date: "2022-03-23", isCurrentMonth: true },
      { date: "2022-03-24", isCurrentMonth: true },
      { date: "2022-03-25", isCurrentMonth: true },
      { date: "2022-03-26", isCurrentMonth: true },
      { date: "2022-03-27", isCurrentMonth: true },
      { date: "2022-03-28", isCurrentMonth: true },
      { date: "2022-03-29", isCurrentMonth: true },
      { date: "2022-03-30", isCurrentMonth: true },
      { date: "2022-03-31", isCurrentMonth: true },
      { date: "2022-04-01" },
    ],
  },

  {
    name: "April",
    days: [
      { date: "2022-03-31" },
      { date: "2022-04-01", isCurrentMonth: true },
      { date: "2022-04-02", isCurrentMonth: true },
      { date: "2022-04-03", isCurrentMonth: true },
      { date: "2022-04-04", isCurrentMonth: true },
      { date: "2022-04-05", isCurrentMonth: true },
      { date: "2022-04-06", isCurrentMonth: true },
      { date: "2022-04-07", isCurrentMonth: true },
      { date: "2022-04-08", isCurrentMonth: true },
      { date: "2022-04-09", isCurrentMonth: true },
      { date: "2022-04-10", isCurrentMonth: true },
      { date: "2022-04-11", isCurrentMonth: true },
      { date: "2022-04-12", isCurrentMonth: true },
      { date: "2022-04-13", isCurrentMonth: true },
      { date: "2022-04-14", isCurrentMonth: true },
      { date: "2022-04-15", isCurrentMonth: true },
      { date: "2022-04-16", isCurrentMonth: true },
      { date: "2022-04-17", isCurrentMonth: true },
      { date: "2022-04-18", isCurrentMonth: true },
      { date: "2022-04-19", isCurrentMonth: true },
      { date: "2022-04-20", isCurrentMonth: true },
      { date: "2022-04-21", isCurrentMonth: true },
      { date: "2022-04-22", isCurrentMonth: true },
      { date: "2022-04-23", isCurrentMonth: true },
      { date: "2022-04-24", isCurrentMonth: true },
      { date: "2022-04-25", isCurrentMonth: true },
      { date: "2022-04-26", isCurrentMonth: true },
      { date: "2022-04-27", isCurrentMonth: true },
      { date: "2022-04-28", isCurrentMonth: true },
      { date: "2022-04-29", isCurrentMonth: true },
      { date: "2022-04-30", isCurrentMonth: true },
      { date: "2022-05-01" },
      { date: "2022-05-02" },
      { date: "2022-05-03" },
      { date: "2022-05-04" },
    ],
  },

  {
    name: "May",
    days: [
      { date: "2022-04-30" },
      { date: "2022-05-01", isCurrentMonth: true },
      { date: "2022-05-02", isCurrentMonth: true },
      { date: "2022-05-03", isCurrentMonth: true },
      { date: "2022-05-04", isCurrentMonth: true },
      { date: "2022-05-05", isCurrentMonth: true },
      { date: "2022-05-06", isCurrentMonth: true },
      { date: "2022-05-07", isCurrentMonth: true },
      { date: "2022-05-08", isCurrentMonth: true },
      { date: "2022-05-09", isCurrentMonth: true },
      { date: "2022-05-10", isCurrentMonth: true },
      { date: "2022-05-11", isCurrentMonth: true },
      { date: "2022-05-12", isCurrentMonth: true },
      { date: "2022-05-13", isCurrentMonth: true },
      { date: "2022-05-14", isCurrentMonth: true },
      { date: "2022-05-15", isCurrentMonth: true },
      { date: "2022-05-16", isCurrentMonth: true },
      { date: "2022-05-17", isCurrentMonth: true },
      { date: "2022-05-18", isCurrentMonth: true },
      { date: "2022-05-19", isCurrentMonth: true },
      { date: "2022-05-20", isCurrentMonth: true },
      { date: "2022-05-21", isCurrentMonth: true },
      { date: "2022-05-22", isCurrentMonth: true },
      { date: "2022-05-23", isCurrentMonth: true },
      { date: "2022-05-24", isCurrentMonth: true },
      { date: "2022-05-25", isCurrentMonth: true },
      { date: "2022-05-26", isCurrentMonth: true },
      { date: "2022-05-27", isCurrentMonth: true },
      { date: "2022-05-28", isCurrentMonth: true },
      { date: "2022-05-29", isCurrentMonth: true },
      { date: "2022-05-30", isCurrentMonth: true },
      { date: "2022-05-31", isCurrentMonth: true },
      { date: "2022-06-01" },
      { date: "2022-06-02" },
      { date: "2022-06-03" },
    ],
  },

  {
    name: "June",
    days: [
      { date: "2022-05-31" },
      { date: "2022-06-01", isCurrentMonth: true },
      { date: "2022-06-02", isCurrentMonth: true },
      { date: "2022-06-03", isCurrentMonth: true },
      { date: "2022-06-04", isCurrentMonth: true },
      { date: "2022-06-05", isCurrentMonth: true },
      { date: "2022-06-06", isCurrentMonth: true },
      { date: "2022-06-07", isCurrentMonth: true },
      { date: "2022-06-08", isCurrentMonth: true },
      { date: "2022-06-09", isCurrentMonth: true },
      { date: "2022-06-10", isCurrentMonth: true },
      { date: "2022-06-11", isCurrentMonth: true },
      { date: "2022-06-12", isCurrentMonth: true },
      { date: "2022-06-13", isCurrentMonth: true },
      { date: "2022-06-14", isCurrentMonth: true },
      { date: "2022-06-15", isCurrentMonth: true },
      { date: "2022-06-16", isCurrentMonth: true },
      { date: "2022-06-17", isCurrentMonth: true },
      { date: "2022-06-18", isCurrentMonth: true },
      { date: "2022-06-19", isCurrentMonth: true },
      { date: "2022-06-20", isCurrentMonth: true },
      { date: "2022-06-21", isCurrentMonth: true },
      { date: "2022-06-22", isCurrentMonth: true },
      { date: "2022-06-23", isCurrentMonth: true },
      { date: "2022-06-24", isCurrentMonth: true },
      { date: "2022-06-25", isCurrentMonth: true },
      { date: "2022-06-26", isCurrentMonth: true },
      { date: "2022-06-27", isCurrentMonth: true },
      { date: "2022-06-28", isCurrentMonth: true },
        { date: "2022-06-29", isCurrentMonth: true },
        { date: "2022-06-30", isCurrentMonth: true },
        { date: "2022-07-01" },
        { date: "2022-07-02" },
        { date: "2022-07-03" },
        { date: "2022-07-04" },
    ],
  },

  // More months...
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Example() {
  return (
    <div>
      <header className="relative z-20 flex items-center justify-between border-b border-gray-200 py-4 px-6">
        <h1 className="text-lg font-semibold text-gray-900">
          <time dateTime="2022">2022</time>
        </h1>
        <div className="flex items-center">
          <div className="flex items-center rounded-md shadow-sm md:items-stretch">
            <button
              type="button"
              className="flex items-center justify-center rounded-l-md border border-r-0 border-gray-300 bg-white py-2 pl-3 pr-4 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
            >
              <span className="sr-only">Previous month</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="hidden border-t border-b border-gray-300 bg-white px-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:relative md:block"
            >
              Today
            </button>
            <span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden" />
            <button
              type="button"
              className="flex items-center justify-center rounded-r-md border border-l-0 border-gray-300 bg-white py-2 pl-4 pr-3 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
            >
              <span className="sr-only">Next month</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden md:ml-4 md:flex md:items-center">
            <Menu as="div" className="relative">
              <Menu.Button
                type="button"
                className="flex items-center rounded-md border border-gray-300 bg-white py-2 pl-3 pr-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
              >
                Year view
                <ChevronDownIcon
                  className="ml-2 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="focus:outline-none absolute right-0 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Day view
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Week view
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Month view
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Year view
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <div className="ml-6 h-6 w-px bg-gray-300" />
            <button
              type="button"
              className="focus:outline-none ml-6 rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add event
            </button>
          </div>
          <Menu as="div" className="relative ml-6 md:hidden">
            <Menu.Button className="-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-5 w-5" aria-hidden="true" />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="focus:outline-none absolute right-0 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Create event
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Go to today
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Day view
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Week view
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Month view
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Year view
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </header>
      <div className="bg-white">
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-x-8 gap-y-16 px-4 py-16 sm:grid-cols-2 sm:px-6 xl:max-w-none xl:grid-cols-3 xl:px-8 2xl:grid-cols-4">
          {months.map((month) => (
            <section key={month.name} className="text-center">
              <h2 className="font-semibold text-gray-900">{month.name}</h2>
              <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
                <div>M</div>
                <div>T</div>
                <div>W</div>
                <div>T</div>
                <div>F</div>
                <div>S</div>
                <div>S</div>
              </div>
              <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
                {month.days.map((day, dayIdx) => (
                  <button
                    key={day.date}
                    type="button"
                    className={classNames(
                      day.isCurrentMonth
                        ? "bg-white text-gray-900"
                        : "bg-gray-50 text-gray-400",
                      dayIdx === 0 && "rounded-tl-lg",
                      dayIdx === 6 && "rounded-tr-lg",
                      dayIdx === month.days.length - 7 && "rounded-bl-lg",
                      dayIdx === month.days.length - 1 && "rounded-br-lg",
                      "py-1.5 hover:bg-gray-100 focus:z-10"
                    )}
                  >
                    <time
                      dateTime={day.date}
                      className={classNames(
                        day.isToday && "bg-indigo-600 font-semibold text-white",
                        "mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                      )}
                    >
                      {day.date.split("-").pop().replace(/^0/, "")}
                    </time>
                  </button>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
