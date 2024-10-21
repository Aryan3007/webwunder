"use client"
/* eslint-disable react/no-unescaped-entities */
import React, { useState, ReactNode } from 'react'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

type RadioGroupProps = {
  value: string;
  onValueChange: (value: string) => void;
  children: ReactNode;
}

type RadioGroupItemProps = {
  value: string;
  id: string;
  className?: string;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ value, onValueChange, children }) => {
  return (
    <div className="space-y-2">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<{ checked: boolean; onChange: () => void }>, {
            checked: child.props.value === value,
            onChange: () => onValueChange(child.props.value),
          });
        }
        return child;
      })}
    </div>
  );
};

const RadioGroupItem: React.FC<RadioGroupItemProps> = ({ value, id, className }) => {
  return (
    <input
      type="radio"
      value={value}
      id={id}
      className={`form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out ${className}`}
    />
  );
};

type EmailUpdates = {
  tips: boolean;
  offers: boolean;
  opportunities: boolean;
  newsletter: boolean;
  platform: boolean;
}

export default function NotificationsSettings() {
  const [emailNotifications, setEmailNotifications] = useState<string>("never")
  const [emailUpdates, setEmailUpdates] = useState<EmailUpdates>({
    tips: false,
    offers: false,
    opportunities: false,
    newsletter: false,
    platform: false
  })
  const [signinNotifications, setSigninNotifications] = useState<string>("most-secure")

  const handleEmailUpdatesChange = (update: keyof EmailUpdates) => {
    setEmailUpdates(prev => ({ ...prev, [update]: !prev[update] }))
  }

  return (
    <div className="max-w-2xl bg-[#FFFFFF] mt-12 rounded-xl mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-bold">Notifications</h1>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Email Notifications</h2>
        <p className="text-sm text-gray-600">
          When you're busy or not online, Substance can send you email notifications for any new 
          direct messages or mentions of your name.
        </p>

        <div className="space-y-2">
          <Label>Send me email notifications:</Label>
          <RadioGroup value={emailNotifications} onValueChange={setEmailNotifications}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="always" id="always" />
              <Label htmlFor="always">Send me email notifications</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="hourly" id="hourly" />
              <Label htmlFor="hourly">Once an hour at most</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="never" id="never" />
              <Label htmlFor="never">Never</Label>
            </div>
          </RadioGroup>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Email News & Updates</h2>
        <p className="text-sm text-gray-600">
          From time to time, we'd like to send you emails with interesting news about Cuboid and 
          your account. Select which types of these updates you'd like to receive:
        </p>

        <div className="space-y-2">
          {(Object.entries(emailUpdates) as [keyof EmailUpdates, boolean][]).map(([key, value]) => (
            <div key={key} className="flex items-center space-x-2">
              <Checkbox 
                id={key} 
                checked={value} 
                onCheckedChange={() => handleEmailUpdatesChange(key)}
              />
              <Label htmlFor={key}>
                {key === 'tips' && "Tips and Tricks"}
                {key === 'offers' && "Offers and Promotions"}
                {key === 'opportunities' && "Research Opportunities"}
                {key === 'newsletter' && "Webmaster Developer Newsletter (Best practices for connecting your work to Substance via our API)"}
                {key === 'platform' && "Webmaster Platform Changes (Stay in the know when we make updates to our platform)"}
              </Label>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Sign-in Notifications</h2>
        <p className="text-sm text-gray-600">
          These emails help keep your Substance account secure. If you haven't already, you should 
          also enable two-factor authentication.
        </p>

        <RadioGroup value={signinNotifications} onValueChange={setSigninNotifications}>
          <div className="flex items-start space-x-2">
            <RadioGroupItem value="most-secure" id="most-secure" className="mt-1" />
            <div>
              <Label htmlFor="most-secure" className="font-medium">Most secure</Label>
              <p className="text-sm text-gray-600">Receive an email anytime someone signs in to your Cuboid account from an unrecognized device.</p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <RadioGroupItem value="standard" id="standard" className="mt-1" />
            <div>
              <Label htmlFor="standard" className="font-medium">Standard</Label>
              <p className="text-sm text-gray-600">Receive an email when someone signs in from a new location, with an unrecognized device.</p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <RadioGroupItem value="none" id="none" className="mt-1" />
            <div>
              <Label htmlFor="none" className="font-medium">Don't send me any sign-in notifications</Label>
            </div>
          </div>
        </RadioGroup>
      </section>

      <p className="text-sm text-gray-600">
        If you opt out of the above, note that we'll still send you important administrative emails, 
        such as password resets.
      </p>

      <p className="text-sm text-gray-600">
        We will use this email address: info@webmaster.me (change address)
      </p>

      <div className="flex justify-end space-x-4">
        <Button variant="outline">Discard</Button>
        <Button>Save changes</Button>
      </div>
    </div>
  )
}