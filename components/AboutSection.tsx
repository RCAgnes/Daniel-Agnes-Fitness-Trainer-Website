// Using the third provided image for Daniel's portrait
import danielPortrait from "figma:asset/711b68f969ca8045e733ea399c1f579cdc0514d1.png";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Portrait Image */}
          <div className="order-2 md:order-1">
            <img
              src={danielPortrait}
              alt="Daniel Agnes - Professional Fitness Trainer"
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
            />
          </div>
          
          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Meet Daniel Agnes
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                With a unique background as a professional firefighter and certified fitness trainer, 
                Daniel brings unmatched intensity and discipline to every training session. His dual 
                career has taught him the importance of physical and mental resilience, making him 
                the ideal guide for your fitness transformation.
              </p>
              
              <p>
                Daniel holds multiple certifications in personal training, functional movement, and 
                injury prevention. His experience working in high-stress, physically demanding 
                situations as a first responder translates into training programs that build both 
                strength and mental toughness.
              </p>
              
              <p>
                Whether you're a beginner looking to start your fitness journey or an experienced 
                athlete aiming to break through plateaus, Daniel's personalized approach ensures 
                you get the results you're working for while staying safe and injury-free.
              </p>
            </div>
            
            <div className="mt-8 p-6 bg-muted rounded-lg">
              <h3 className="font-semibold text-secondary mb-3">Certifications & Experience:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Certified Personal Trainer (CPT)</li>
                <li>• Professional Firefighter - 10+ years</li>
                <li>• Functional Movement Specialist</li>
                <li>• Injury Prevention & Rehabilitation</li>
                <li>• Strength & Conditioning Coach</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}