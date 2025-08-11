import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { User, Monitor, Target } from "lucide-react";

const services = [
  {
    icon: User,
    title: "Personalized Training",
    description: "Tailored workout plans designed specifically for your fitness level, goals, and lifestyle. Every session is crafted to maximize your progress while ensuring proper form and safety.",
    features: ["Custom workout plans", "One-on-one sessions", "Progress tracking", "Flexible scheduling"]
  },
  {
    icon: Monitor,
    title: "Online Coaching",
    description: "Virtual training sessions that bring professional guidance directly to you. Stay connected and motivated with remote coaching that fits your schedule and location.",
    features: ["Live virtual sessions", "Workout video library", "Nutrition guidance", "24/7 support chat"]
  },
  {
    icon: Target,
    title: "Fitness Assessment",
    description: "Comprehensive evaluations that measure your current fitness level and track your transformation journey. Data-driven insights to optimize your training approach.",
    features: ["Body composition analysis", "Strength assessments", "Mobility testing", "Goal setting sessions"]
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Professional Training Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive fitness solutions designed to help you achieve lasting results through proven methods and professional guidance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-secondary">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}