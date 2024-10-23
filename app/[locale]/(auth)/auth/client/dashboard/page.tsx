'use client'
import { BarChart3, CheckCircle, FileText, PieChart } from 'lucide-react'
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/client/dashboard/711cacc0-1dfa-4cd0-98f3-bda7ba9921fe', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }

        const data = await response.json();
        setUsers(data)
        console.log(
          {data}
        )
        // console.log({users})
      } catch (error : any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

    return (
        <div className="mx-auto max-w-full space-y-8 p-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {[
                    {
                        title: 'Active Projects',
                        value: '01',
                        icon: <PieChart className="h-6 w-6 text-indigo-500" />,
                    },
                    {
                        title: 'Completed Projects',
                        value: '25',
                        icon: (
                            <CheckCircle className="h-6 w-6 text-indigo-500" />
                        ),
                    },
                    {
                        title: 'Active Subscriptions',
                        value: '01',
                        icon: <FileText className="h-6 w-6 text-indigo-500" />,
                    },
                    {
                        title: 'Completed Projects',
                        value: '01',
                        icon: <BarChart3 className="h-6 w-6 text-indigo-500" />,
                    },
                ].map((stat, index) => (
                    <div
                        key={index}
                        className="rounded-lg bg-white p-4 shadow-sm"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">
                                    {stat.title}
                                </p>
                                <p className="text-2xl font-bold">
                                    {stat.value}
                                </p>
                            </div>
                            <div className="rounded-full bg-indigo-100 p-2">
                                {stat.icon}
                            </div>
                        </div>
                        <p className="mt-2 text-xs text-indigo-600">
                            View Subscription
                        </p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                <div className="rounded-lg bg-white p-6 shadow-sm">
                    <h2 className="mb-4 text-lg font-semibold">Projects</h2>
                    <table className="w-full">
                        <thead>
                            <tr className="text-left text-sm text-gray-500">
                                <th className="pb-2">Name</th>
                                <th className="pb-2">Package</th>
                                <th className="pb-2">Progress</th>
                                <th className="pb-2">Date Created</th>
                                <th className="pb-2">Status</th>
                                <th className="pb-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                {
                                    name: 'ClownWowa',
                                    package: 'Pro Plan',
                                    progress: '67%',
                                    date: '11/04/2024',
                                    status: 'Paid',
                                },
                                {
                                    name: 'ClownWowa',
                                    package: 'Pro Plan',
                                    progress: '67%',
                                    date: '11/04/2024',
                                    status: 'Paid',
                                },
                                {
                                    name: 'ClownWowa',
                                    package: 'Pro Plan',
                                    progress: '67%',
                                    date: '11/04/2024',
                                    status: 'Paid',
                                },
                            ].map((project, index) => (
                                <tr key={index} className="border-t">
                                    <td className="py-2">{project.name}</td>
                                    <td className="py-2">{project.package}</td>
                                    <td className="py-2">{project.progress}</td>
                                    <td className="py-2">{project.date}</td>
                                    <td className="py-2">
                                        <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-800">
                                            {project.status}
                                        </span>
                                    </td>
                                    <td className="py-2">
                                        <button className="rounded-md bg-indigo-600 px-3 py-1 text-sm text-white">
                                            View Project
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-sm">
                    <h2 className="mb-4 text-lg font-semibold">Invoices</h2>
                    <table className="w-full">
                        <thead>
                            <tr className="text-left text-sm text-gray-500">
                                <th className="pb-2">Name</th>
                                <th className="pb-2">Package</th>
                                <th className="pb-2">Progress</th>
                                <th className="pb-2">Date Created</th>
                                <th className="pb-2">Status</th>
                                <th className="pb-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                {
                                    name: 'ClownWowa',
                                    package: 'Pro Plan',
                                    progress: '67%',
                                    date: '11/04/2024',
                                    status: 'Paid',
                                },
                                {
                                    name: 'ClownWowa',
                                    package: 'Pro Plan',
                                    progress: '67%',
                                    date: '11/04/2024',
                                    status: 'Paid',
                                },
                                {
                                    name: 'ClownWowa',
                                    package: 'Pro Plan',
                                    progress: '67%',
                                    date: '11/04/2024',
                                    status: 'Paid',
                                },
                            ].map((project, index) => (
                                <tr key={index} className="border-t">
                                    <td className="py-2">{project.name}</td>
                                    <td className="py-2">{project.package}</td>
                                    <td className="py-2">{project.progress}</td>
                                    <td className="py-2">{project.date}</td>
                                    <td className="py-2">
                                        <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-800">
                                            {project.status}
                                        </span>
                                    </td>
                                    <td className="py-2">
                                        <button className="rounded-md bg-indigo-600 px-3 py-1 text-sm text-white">
                                            View Project
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-lg font-semibold">Invoices</h2>
                <table className="w-full">
                    <thead>
                        <tr className="text-left text-sm text-gray-500">
                            <th className="pb-2">Invoice</th>
                            <th className="pb-2">Package</th>
                            <th className="pb-2">Price</th>
                            <th className="pb-2">Email Address</th>
                            <th className="pb-2">Date</th>
                            <th className="pb-2">Status</th>
                            <th className="pb-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            {
                                invoice: '#242962',
                                package: 'Pro Plan',
                                price: '€499',
                                email: 'john_Mark@gmail.com',
                                date: '03/22/2025',
                                status: 'Success',
                            },
                            {
                                invoice: '#242962',
                                package: 'Pro Plan',
                                price: '€499',
                                email: 'john_Mark@gmail.com',
                                date: '02/22/2025',
                                status: 'Success',
                            },
                            {
                                invoice: '#242962',
                                package: 'Pro Plan',
                                price: '€499',
                                email: 'john_Mark@gmail.com',
                                date: '01/22/2025',
                                status: 'Success',
                            },
                            {
                                invoice: '#242962',
                                package: 'Pro Plan',
                                price: '€499',
                                email: 'john_Mark@gmail.com',
                                date: '02/22/2025',
                                status: 'Success',
                            },
                        ].map((invoice, index) => (
                            <tr key={index} className="border-t">
                                <td className="py-2">{invoice.invoice}</td>
                                <td className="py-2">{invoice.package}</td>
                                <td className="py-2 text-green-500">
                                    {invoice.price}
                                </td>
                                <td className="py-2">{invoice.email}</td>
                                <td className="py-2">{invoice.date}</td>
                                <td className="py-2">
                                    <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-800">
                                        {invoice.status}
                                    </span>
                                </td>
                                <td className="py-2">
                                    <button className="flex items-center rounded-md bg-indigo-600 px-3 py-1 text-sm text-white">
                                        <FileText className="mr-1 h-4 w-4" />
                                        Generate Report
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
