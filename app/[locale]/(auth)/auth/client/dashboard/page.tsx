import { BarChart3, CheckCircle, FileText, PieChart } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="p-6 max-w-full mx-auto space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: "Active Projects", value: "01", icon: <PieChart className="w-6 h-6 text-indigo-500" /> },
          { title: "Completed Projects", value: "25", icon: <CheckCircle className="w-6 h-6 text-indigo-500" /> },
          { title: "Active Subscriptions", value: "01", icon: <FileText className="w-6 h-6 text-indigo-500" /> },
          { title: "Completed Projects", value: "01", icon: <BarChart3 className="w-6 h-6 text-indigo-500" /> },
        ].map((stat, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
              <div className="bg-indigo-100 p-2 rounded-full">{stat.icon}</div>
            </div>
            <p className="text-xs text-indigo-600 mt-2">View Subscription</p>
          </div>
        ))}
      </div>


<div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">


      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Projects</h2>
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
              { name: "ClownWowa", package: "Pro Plan", progress: "67%", date: "11/04/2024", status: "Paid" },
              { name: "ClownWowa", package: "Pro Plan", progress: "67%", date: "11/04/2024", status: "Paid" },
              { name: "ClownWowa", package: "Pro Plan", progress: "67%", date: "11/04/2024", status: "Paid" },
            ].map((project, index) => (
              <tr key={index} className="border-t">
                <td className="py-2">{project.name}</td>
                <td className="py-2">{project.package}</td>
                <td className="py-2">{project.progress}</td>
                <td className="py-2">{project.date}</td>
                <td className="py-2">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                    {project.status}
                  </span>
                </td>
                <td className="py-2">
                  <button className="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm">
                    View Project
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>  
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Invoices</h2>
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
              { name: "ClownWowa", package: "Pro Plan", progress: "67%", date: "11/04/2024", status: "Paid" },
              { name: "ClownWowa", package: "Pro Plan", progress: "67%", date: "11/04/2024", status: "Paid" },
              { name: "ClownWowa", package: "Pro Plan", progress: "67%", date: "11/04/2024", status: "Paid" },
            ].map((project, index) => (
              <tr key={index} className="border-t">
                <td className="py-2">{project.name}</td>
                <td className="py-2">{project.package}</td>
                <td className="py-2">{project.progress}</td>
                <td className="py-2">{project.date}</td>
                <td className="py-2">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                    {project.status}
                  </span>
                </td>
                <td className="py-2">
                  <button className="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm">
                    View Project
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
</div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Invoices</h2>
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
              { invoice: "#242962", package: "Pro Plan", price: "€499", email: "john_Mark@gmail.com", date: "03/22/2025", status: "Success" },
              { invoice: "#242962", package: "Pro Plan", price: "€499", email: "john_Mark@gmail.com", date: "02/22/2025", status: "Success" },
              { invoice: "#242962", package: "Pro Plan", price: "€499", email: "john_Mark@gmail.com", date: "01/22/2025", status: "Success" },
              { invoice: "#242962", package: "Pro Plan", price: "€499", email: "john_Mark@gmail.com", date: "02/22/2025", status: "Success" },
            ].map((invoice, index) => (
              <tr key={index} className="border-t">
                <td className="py-2">{invoice.invoice}</td>
                <td className="py-2">{invoice.package}</td>
                <td className="py-2 text-green-500">{invoice.price}</td>
                <td className="py-2">{invoice.email}</td>
                <td className="py-2">{invoice.date}</td>
                <td className="py-2">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                    {invoice.status}
                  </span>
                </td>
                <td className="py-2">
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
  )
}