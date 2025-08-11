export function Footer() {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-4">Daniel Agnes</h3>
            <p className="text-gray-300">Professional Fitness Trainer & Firefighter</p>
          </div>
          
          <div className="space-y-2">
            <p className="text-gray-300">
              <span className="font-semibold">Phone:</span> 647-204-5735
            </p>
            <p className="text-gray-300">
              <span className="font-semibold">Email:</span> daniel.camargoagnes@goodlifefitness.com
            </p>
          </div>
          
          <div className="pt-6 border-t border-gray-600">
            <p className="text-gray-400 text-sm">
              © 2025 Daniel Agnes – All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}