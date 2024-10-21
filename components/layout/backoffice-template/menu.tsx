'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiOutlineDashboard, AiOutlineUser, AiOutlineMessage, AiOutlineProject, AiOutlineFolderOpen } from 'react-icons/ai';
import { FiFileText, FiSettings, FiHelpCircle } from 'react-icons/fi';

const menuItems = [
  {
    name: 'Dashboard',
    href: '/auth/client/dashboard',
    icon: <AiOutlineDashboard />,
  },
  {
    name: 'Profile',
    icon: <AiOutlineUser />,
    sublinks: [
      { name: 'Overview', href: '/auth/client/profile/overview' },
      { name: 'Sign in method', href: '/auth/client/profile/signInMethods' },
      { name: 'Basic Information', href: '/auth/client/profile/basicInfo' },
      { name: 'Notifications', href: '/auth/client/profile/notifications' },
    ],
  },
  {
    name: 'Messages',
    href: '/auth/client/messages',
    icon: <AiOutlineMessage />,
  },
  {
    name: 'Projects',
    href: '/auth/client/projects',
    icon: <AiOutlineProject />,
  },
  {
    name: 'Files',
    href: '/auth/client/files',
    icon: <AiOutlineFolderOpen />,
  },
  {
    name: 'Billing',
    href: '/auth/client/billing',
    icon: <FiFileText />,
  },
  {
    name: 'Packages',
    href: '/auth/client/package/purchase',
    icon: <FiSettings />,
  },
];

export default function Menu() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col h-full bg-[#29292f]  text-white w-full">
      <div className="p-4">
        <h1 className="text-xl font-bold">WebWunder</h1>
      </div>
      <div className="flex-grow">
        <div className="p-4">
          <h2 className="text-sm uppercase text-gray-400 mb-2">Menu</h2>
          <ul>
            {menuItems.map((item) => (
              <li key={item.name} className="mb-1">
                {item.sublinks ? (
                  <div>
                    <div
                      className={`flex items-center p-2 rounded ${
                        pathname.includes(item.sublinks[0].href) ? 'bg-indigo-600' : ''
                      }`}
                    >
                      <span className="mr-3 text-2xl">{item.icon}</span>
                      {item.name}
                    </div>
                    <ul className="ml-8 mt-2 ">
                      {item.sublinks.map((sub) => (
                        <li key={sub.name} className="mb-1">
                          <Link
                            href={sub.href}
                            className={`block p-2 rounded hover:bg-gray-800 ${
                              pathname.includes(sub.href) ? 'text-indigo-600' : ''
                            }`}
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center p-2 rounded hover:bg-gray-800 ${
                      pathname.includes(item.href) ? 'bg-indigo-600' : ''
                    }`}
                  >
                    <span className="mr-3 text-2xl">{item.icon}</span>
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="p-4 border-t border-gray-700">
        <Link href="/help-center" className="flex items-center p-2 hover:bg-gray-800 rounded">
          <FiHelpCircle className="mr-3" />
          Help Center
        </Link>
        <div className="flex items-center justify-between mt-4">
          <span>Dark Mode</span>
          <div className="w-10 h-5 bg-gray-700 rounded-full flex items-center p-1">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
