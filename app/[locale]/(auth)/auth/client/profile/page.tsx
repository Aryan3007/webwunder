import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shield } from "lucide-react"

export default function Profilepage() {
  return (
    <div className="max-w-2xl bg-[#ffffff] mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-bold">Overview</h1>
      
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-purple-500 rounded-full"></div>
        <div>
          <h2 className="font-semibold">Eureka Sekem <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">PRO</span></h2>
          <p className="text-sm text-gray-500">eureka58@gmail.com</p>
        </div>
        <div className="ml-auto text-right">
          <p className="font-semibold">$68.00 per Year</p>
          <p className="text-sm text-gray-500">Autopay on Dec 09, 2021</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="font-medium">Company</span>
          <span className="text-gray-500">sebo</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Contact phone</span>
          <span className="text-gray-500">+62 08 7867654970</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Country</span>
          <span className="text-gray-500">Indonesia</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Time Zone</span>
          <span className="text-gray-500">Jakarta (GMT+7)</span>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg flex items-start space-x-4">
        <Shield className="text-blue-500 mt-1" />
        <div>
          <h3 className="font-semibold text-blue-800">Secure Your Account</h3>
          <p className="text-sm text-blue-600">Two-factor authentication adds an extra layer of security to your account. To log in, in addition you'll need to provide a 6 digit code. <a href="#" className="text-blue-700 hover:underline">Learn more</a></p>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-bold">Sign in method</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <Input id="email" type="email" value="eureka58@gmail.com" className="mt-1" readOnly />
            </div>
            <Button variant="outline">Change email</Button>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <Input id="password" type="password" value="••••••••••••" className="mt-1" readOnly />
            </div>
            <Button variant="outline">Change password</Button>
          </div>
        </div>
      </div>
    </div>
  )
}