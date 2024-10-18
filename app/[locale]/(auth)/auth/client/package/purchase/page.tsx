import { Check } from "lucide-react"

const plans = [
  {
    name: "Start Plan",
    price: 490,
    setupFee: 2000,
    popular: false,
    features: [
      "Fully responsive, device-optimized website",
      "Continuous updates, plug-ins, and AI-powered SEO",
      "Secure hosting, backups, and full Google indexing",
      "Professional copywriting and branding",
      "One monthly design task",
      "Design refresh every 36 months",
      "Cancel anytime",
    ],
    current: true,
  },
  {
    name: "Start Plan",
    price: 690,
    setupFee: 2000,
    popular: true,
    features: [
      "Fully responsive, device-optimized website",
      "Continuous updates, plug-ins, and AI-powered SEO",
      "Secure hosting, backups, and full Google indexing",
      "Professional copywriting and branding",
      "Two monthly design task",
      "Design refresh every 36 months",
      "More extensive site capabilities to support your business growth",
      "Cancel anytime",
    ],
  },
  {
    name: "Pro Plan",
    price: 990,
    setupFee: 3000,
    popular: false,
    features: [
      "Fully responsive, device-optimized website",
      "Continuous updates, plug-ins, and AI-powered SEO",
      "Secure hosting, backups, and full Google indexing",
      "Professional copywriting and branding",
      "Three monthly design task",
      "Design refresh every 36 months",
      "More extensive site capabilities to support your business growth",
      "Social media posting and management support",
      "Extra dedicated monthly time for top-tier performance",
      "Cancel anytime",
    ],
  },
  {
    name: "Unlimited Design",
    price: 4990,
    setupFee: 2000,
    popular: false,
    features: [
      "Unlimited design requests (one at a time)",
      "Priority delivery (around 72 hours)",
      "Support for multiple brands",
      "Full ownership of all designs",
      "Exclusive top-priority support",
      "Cancel anytime",
    ],
  },
]

export default function PackagesPage() {
  return (
    <section className="py-16 bg-gray-50">
      <div className=" px-4">
        <h1 className="text-3xl font-bold mb-8">Your Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              {plan.popular && (
                <div className="bg-green-500 text-white text-center py-1 text-sm font-semibold">
                  POPULAR
                </div>
              )}
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
                <p className="text-sm text-gray-600 mb-4">€{plan.setupFee} Setup Fee</p>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold">€{plan.price}</span>
                  <span className="text-gray-600 ml-1">/per month</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 pb-6">
                <button
                  className={`w-full py-2 px-4 rounded-md text-center text-sm font-semibold ${
                    plan.current
                      ? "bg-gray-200 text-gray-700"
                      : "bg-indigo-600 text-white hover:bg-indigo-700"
                  }`}
                >
                  {plan.current ? "CURRENT PLAN" : "UPGRADE PLAN"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}