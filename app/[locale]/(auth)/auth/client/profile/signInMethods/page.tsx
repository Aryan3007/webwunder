/* eslint-disable react/no-unescaped-entities */
'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shield } from "lucide-react"

export default function SignInMethod() {
    const [email, setEmail] = useState('eureka58@gmail.com')
    const [isSecure, setIsSecure] = useState(false)

    return (
        <div className="max-w-2xl mx-auto p-6 space-y-8 mt-12 bg-[#ffffff] rounded-xl">
            <h2 className="text-2xl font-bold">Sign in method</h2>

            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <div className="space-y-1">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="max-w-md"
                        />
                    </div>
                    <Button variant="outline" size="sm">
                        Change email
                    </Button>
                </div>

                <div className="flex justify-between items-center">
                    <div className="space-y-1">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <Input
                            id="password"
                            type="password"
                            value="••••••••••••"
                            readOnly
                            className="max-w-md"
                        />
                    </div>
                    <Button variant="outline" size="sm">
                        Change password
                    </Button>
                </div>
            </div>

            <div className="flex space-x-4 gap-12 justify-between items-center bg-blue-50 p-4 rounded-lg">
                <div className='flex gap-2'>

                <Shield className="text-blue-500 mt-1 flex-shrink-0" />
                <div className="flex-grow">
                    <h3 className="font-semibold text-blue-800">Secure Your Account</h3>
                    <p className="text-sm text-blue-600 mt-1">
                        Two-factor authentication adds an extra layer of security to your account.
                        To log in, in addition you'll need to provide a 6 digit code.
                    </p>
                </div>
                </div>
                <Button
                className='text-sm font-medium'
                    size="sm"
                >
                    Enable
                </Button>
            </div>
        </div>
    )
}