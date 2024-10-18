import { Search, Filter, MessageSquare } from "lucide-react"

const projects = [
  {
    name: "Wladimir Magic",
    plan: "Pro Plan",
    dateCreated: "10-02-2024",
    dateUpdated: "10-25-2024",
    status: "Paid",
    totalTasks: 45,
    inProgressTasks: 45,
    doneTasks: 45,
    progress: 50,
  },
  {
    name: "Wladimir Magic",
    plan: "Pro Plan",
    dateCreated: "10-02-2024",
    dateUpdated: "10-25-2024",
    status: "Paid",
    totalTasks: 45,
    inProgressTasks: 45,
    doneTasks: 45,
    progress: 50,
  },
  {
    name: "Wladimir Magic",
    plan: "Pro Plan",
    dateCreated: "10-02-2024",
    dateUpdated: "10-25-2024",
    status: "Paid",
    totalTasks: 45,
    inProgressTasks: 38,
    doneTasks: 7,
    progress: 50,
  },
]

export default function ProjectsPage() {
  return (
    <section className="p-6 max-w-full mx-auto">
      <h1 className="text-2xl font-bold mb-6">Your Projects</h1>
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-4">
          <button className="px-4 py-2 text-indigo-600 font-medium border-b-2 border-indigo-600">
            All Projects <span className="ml-1 bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full text-xs">20</span>
          </button>
          <button className="px-4 py-2 text-gray-500 font-medium">
            Done <span className="ml-1 bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">15</span>
          </button>
          <button className="px-4 py-2 text-gray-500 font-medium">
            In Progress <span className="ml-1 bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">5</span>
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects..."
              className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-50">
            <Filter size={20} />
            <span>Filter</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm text-green-500 font-medium">{project.plan}</p>
                <h2 className="text-xl font-bold">{project.name}</h2>
                <p className="text-sm text-gray-500">Date Created: {project.dateCreated}</p>
              </div>
              <button className="px-3 py-1 bg-red-500 text-white text-sm rounded-md">Request Update</button>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                {project.status}
              </span>
              <p className="text-sm text-gray-500">Date Created: {project.dateUpdated}</p>
            </div>
            <div className="flex justify-between mb-4">
              <div className="text-center">
                <p className="text-2xl font-bold">{project.totalTasks}</p>
                <p className="text-xs text-gray-500">Tasks</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">{project.inProgressTasks}</p>
                <p className="text-xs text-gray-500">In Progress</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">{project.doneTasks}</p>
                <p className="text-xs text-gray-500">Done</p>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-sm font-medium mb-1">Project Progress</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-indigo-600 h-2.5 rounded-full"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
              <p className="text-right text-sm text-indigo-600 font-medium">{project.progress}%</p>
            </div>
            <div className="flex space-x-4">
              <button className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700">
                View Timeline
              </button>
              <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50 flex items-center justify-center">
                <MessageSquare size={16} className="mr-2" />
                Send Message
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}