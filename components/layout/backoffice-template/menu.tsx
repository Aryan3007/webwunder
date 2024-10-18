'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { paths } from '@/paths';

// Assuming these imports are available in your project
// import { HelpCenterIcon } from './icons';

export default function Menu() {
    const pathname = usePathname();

    return (
        <nav className="flex flex-col h-full bg-gray-900 text-white w-full">
            <div className="p-4 ">
                <h1 className="text-xl font-bold">WebWunder</h1>
            </div>
            <div className="flex-grow">
                <div className="p-4">
                    <h2 className="text-sm uppercase text-gray-400 mb-2">Menu</h2>
                    <ul>
                        {Object.entries(paths.menu.backoffice).map(([_, value]) => (
                            <li 
                                key={value.href} 
                                className={`mb-1 ${pathname.includes(value.href) ? 'bg-indigo-600' : ''}`}
                            >
                                <Link
                                    href={value.href}
                                    className="flex items-center p-2 rounded hover:bg-gray-800"
                                >
                                    <span className="mr-3 text-2xl">{value.icon}</span>
                                    {value.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="p-4 border-t border-gray-700">
                <Link href="/help-center" className="flex items-center p-2 hover:bg-gray-800 rounded">
                    {/* <HelpCenterIcon className="mr-3" /> */}
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