"use client"
/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Shield, ChevronDown } from "lucide-react"
import Image from 'next/image'

export default function UserProfile() {
  const [allowMarketing, setAllowMarketing] = useState(false)
  const [connectedAccounts, setConnectedAccounts] = useState({
    google: false,
    microsoft: false,
    apple: false
  })

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Basic Information</h2>
        
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 bg-indigo-600 rounded-full"></div>
          <Button variant="outline">Change avatar</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
            <Input id="firstName" placeholder="First name" className="mt-1" />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
            <Input id="lastName" placeholder="Last name" className="mt-1" />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
            <Input id="company" placeholder="Company name" className="mt-1" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Contact phone</label>
            <div className="mt-1 flex">
              <Select defaultValue="US">
                <option value="US">🇺🇸 +1</option>
                {/* Add more country options */}
              </Select>
              <Input id="phone" placeholder="Phone number" className="flex-1 ml-2" />
            </div>
          </div>
          <div>
            <label htmlFor="website" className="block text-sm font-medium text-gray-700">Company site</label>
            <Input id="website" placeholder="Company website" className="mt-1" />
          </div>
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
            <select id="country"  className="mt-1">
              <option value="">Select a country</option>
              {/* Add country options */}
            </select>
          </div>
          <div>
            <label htmlFor="language" className="block text-sm font-medium text-gray-700">Language</label>
            <select id="language" className="mt-1">
              <option value="">Select a language</option>
              {/* Add language options */}
            </select>
          </div>
          <div>
            <label htmlFor="timezone" className="block text-sm font-medium text-gray-700">Time Zone</label>
            <select id="timezone"  className="mt-1">
              <option value="">Select a timezone</option>
              {/* Add timezone options */}
            </select>
          </div>
          <div>
            <label htmlFor="currency" className="block text-sm font-medium text-gray-700">Currency</label>
            <select id="currency" className="mt-1">
              <option value="">Select a currency</option>
              {/* Add currency options */}
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-700">Communication</h3>
          <div className="flex space-x-4">
            <Checkbox id="emailComm" />
            <label htmlFor="emailComm" className="text-sm text-gray-600">Email</label>
            <Checkbox id="phoneComm" />
            <label htmlFor="phoneComm" className="text-sm text-gray-600">Phone</label>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Switch
              checked={allowMarketing}
              onCheckedChange={setAllowMarketing}
              id="allowMarketing"
            />
            <label htmlFor="allowMarketing" className="text-sm text-gray-600">Allow Marketing</label>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <Button variant="outline">Discard</Button>
          <Button>Save changes</Button>
        </div>
      </section>

 
    </div>
  )
}