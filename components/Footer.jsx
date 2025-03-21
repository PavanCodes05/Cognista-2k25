const Footer = () => {
    return (
      <footer className="bg-dark py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="font-orbitron font-bold text-2xl tracking-tight">
                <span className="gradient-text">Cognista</span>
                <span className="text-white">2k25</span>
              </h2>
              <p className="text-gray-400 mt-2">Department of AI & Data Science</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-accent-cyan transition-colors duration-300">Home</a></li>
                  <li><a href="#about" className="text-gray-400 hover:text-accent-cyan transition-colors duration-300">About</a></li>
                  <li><a href="#events" className="text-gray-400 hover:text-accent-cyan transition-colors duration-300">Events</a></li>
                  <li><a href="#register" className="text-gray-400 hover:text-accent-cyan transition-colors duration-300">Register</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-accent-cyan transition-colors duration-300">Schedule</a></li>
                </ul>
              </div>
              
              <div className="col-span-2 md:col-span-1">
                <h4 className="font-bold text-lg mb-4">Contact</h4>
                <ul className="space-y-2">
                  <li className="text-gray-400"></li>
                  <li className="text-gray-400">+91 93633 86324</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Cognista 2k25. All rights reserved.
            </p>
            
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Designed with ❤️ by AI&DS Department
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  