import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Subscription = () => {
  const plans = [
    {
      name: "Basic",
      price: "$9.99",
      features: ["100 messages/month", "Basic persona customization", "Email support"],
    },
    {
      name: "Pro",
      price: "$29.99",
      features: ["Unlimited messages", "Advanced persona customization", "Priority support", "Analytics"],
    },
    {
      name: "Enterprise",
      price: "$99.99",
      features: ["Everything in Pro", "Custom integrations", "Dedicated support", "Multiple personas"],
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Choose Your Plan</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card key={plan.name}>
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription className="text-2xl font-bold">{plan.price}/month</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full">Subscribe</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Subscription;