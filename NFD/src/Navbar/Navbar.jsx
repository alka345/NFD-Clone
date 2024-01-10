import React,{ Fragment, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'


const navigation = [
  { name: 'NFD', href: '#', current: true },
  { name: 'About', href: '#', current: false },
  { name: 'Aggregator', href: '#', current: false },
  { name: 'Features', href: '#', current: false },
  { name: 'Roadmap', href: '#', current: false },
  { name: 'Contact us', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}





 export default function Navbar(){

  return (

    
    <Disclosure as="nav" className=" bg-white mt-4  mx-8 border-solid rounded-3xl ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl  px-2 sm:px-6 lg:px-8">
            <div className="relative  flex h-20  items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 px-20 ">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                > */}
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <img className='h-6 w-6' src="data:image/png;base64,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" alt="" />
                  {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                {/* </button> */}
                <img  className="h-6 w-6" src="data:image/png;base64,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" alt="" />

                {/* Profile dropdown */}
                 <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                       {/* <img */}
                      {/* //   className="h-8 w-8 rounded-full"
                      //   src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      //   alt=""
                      //  */}
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu> 
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className=" space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
          </>
      )}
  
    </Disclosure>
    
  )


}






 