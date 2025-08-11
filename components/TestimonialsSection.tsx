import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

// Using the provided images for testimonial avatars
import client1Image from "figma:asset/1c5d2771ae917c96e65f105ef6041917af00cc9d.png";
import client2Image from "figma:asset/4cd1f178db1a01b7aff20396b445587ac9a4ca67.png";
import client3Image from "figma:asset/711b68f969ca8045e733ea399c1f579cdc0514d1.png";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Marketing Executive",
    content: "Daniel's training transformed my lifestyle – I feel stronger than ever! His firefighter background brings a unique intensity that pushed me beyond what I thought was possible.",
    rating: 5,
    image: client1Image
  },
  {
    name: "Mike Rodriguez",
    role: "Construction Manager",
    content: "His background as a firefighter brings a unique intensity to the sessions. The discipline and structure he provides made all the difference in achieving my fitness goals.",
    rating: 5,
    image: client2Image
  },
  {
    name: "Emily Chen",
    role: "Software Developer",
    content: "I never thought online coaching could be so effective! Daniel's virtual sessions are just as engaging and motivating as in-person training. Highly recommended!",
    rating: 5,
    image: client3Image
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real transformations from real people who trusted Daniel to guide their fitness journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 shadow-lg"
            >
              <CardContent className="p-6">
                {/* Rating Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                {/* Testimonial Content */}
                <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Client Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-secondary">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}