import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { NavLink } from 'react-router-dom';
import planet from '../Assets/planet.png';

const navigation = [
  { name: 'Rockets', href: '/rockets' },
  { name: 'Missions', href: '/missions' },
  { name: 'My profile', href: '/myprofile' },
];

export default function Header() {
  const activeLinkStyles = 'bg-gray-900 text-white underline decoration-red-500 text-black-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium';
  const linkStyles = 'text-black-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium';
  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-between ">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-10 w-auto ml-44"
                    src={planet}
                    alt="planet logo"
                  />
                  <img
                    className="hidden lg:block h-14 w-auto"
                    src={planet}
                    alt="logo"
                  />
                  <h3 className="hidden lg:block text-lg">
                    Space travelers Hub
                  </h3>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({ isActive }) => (isActive ? activeLinkStyles : linkStyles)}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  as="a"
                  to={item.href}
                  className={({ isActive }) => (isActive
                    ? 'bg-gray-900 text-white text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium')}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
