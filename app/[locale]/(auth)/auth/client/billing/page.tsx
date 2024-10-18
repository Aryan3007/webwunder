'use client'

import { FileText, CreditCard } from "lucide-react"
import { useState } from "react"

export default function BillingPage() {
  const [activeTab, setActiveTab] = useState("all")

  const tabs = [
    { id: "all", label: "All Invoice", count: 30 },
    { id: "paid", label: "Paid", count: 25 },
    { id: "pending", label: "Pending", count: 2 },
    { id: "overdue", label: "Overdue", count: 3 },
  ]

  const invoices = [
    { id: "#242962", package: "Pro Plan", price: "€499", email: "john_Mark@gmail.com", date: "03/22/2025", status: "Success" },
    { id: "#242962", package: "Pro Plan", price: "€499", email: "john_Mark@gmail.com", date: "02/22/2025", status: "Success" },
    { id: "#242962", package: "Pro Plan", price: "€499", email: "john_Mark@gmail.com", date: "03/22/2025", status: "Success" },
    { id: "#242962", package: "Pro Plan", price: "€499", email: "john_Mark@gmail.com", date: "02/22/2025", status: "Success" },
    { id: "#242962", package: "Pro Plan", price: "€499", email: "john_Mark@gmail.com", date: "03/22/2025", status: "Success" },
    { id: "#242962", package: "Pro Plan", price: "€499", email: "john_Mark@gmail.com", date: "02/22/2025", status: "Success" },
    { id: "#242962", package: "Pro Plan", price: "€499", email: "john_Mark@gmail.com", date: "03/22/2025", status: "Success" },
  ]

  return (
    <div className="p-6 max-w-full mx-auto space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Basic Plan</h2>
          <p className="text-sm text-gray-500 mb-4">Our most popular plan for small team</p>
          <div className="flex items-baseline mb-4">
            <span className="text-4xl font-bold">€499</span>
            <span className="text-gray-500 ml-2">/month</span>
          </div>
          <p className="text-sm text-gray-500 mb-4">600+ Users</p>
          <div className="space-x-2">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm">Upgrade Plan</button>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md text-sm">Manage Plan</button>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Payment Method</h2>
          <p className="text-sm text-gray-500 mb-4">Change how you pay for your plan</p>
          <div className="flex items-center space-x-4 mb-4">
            <CreditCard className="w-8 h-8 text-indigo-600" />
            <div>
              <p className="font-semibold">Visa ending in 2025</p>
              <p className="text-sm text-gray-500">Expiry 02/2025</p>
              <p className="text-sm text-gray-500">billing@company.com</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm">Edit</button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Projects</h2>
        <div className="flex space-x-4 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 text-sm font-medium rounded-full ${
                activeTab === tab.id
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label} <span className="ml-1 text-xs">{tab.count}</span>
            </button>
          ))}
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500 border-b">
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
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="border-b last:border-b-0">
                  <td className="py-3">{invoice.id}</td>
                  <td className="py-3">{invoice.package}</td>
                  <td className="py-3">{invoice.price}</td>
                  <td className="py-3">{invoice.email}</td>
                  <td className="py-3">{invoice.date}</td>
                  <td className="py-3">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                      {invoice.status}
                    </span>
                  </td>
                  <td className="py-3">
                    <button className="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm flex items-center">
                      <FileText className="w-4 h-4 mr-1" />
                      Generate Report
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}