import React, { useState } from 'react';
import { ChatWindow } from './components/ChatWindow';
import { TopMenu } from './components/TopMenu';
import { BottomMenu } from './components/BottomMenu';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
      {/* Top Menu - Not fixed anymore */}
      <div className="bg-gray-900/90 backdrop-blur-md border-b border-gray-700/50">
        <div className="max-w-4xl mx-auto px-3 py-2">
          <TopMenu isOpen={isMenuOpen} onToggle={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 overflow-hidden pb-20 pt-6">
        <div className="max-w-4xl mx-auto px-3 h-full">
          <ChatWindow />
        </div>
      </div>

      {/* Side Menu Panel */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-gray-800/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } border-l border-gray-700/50 p-6 z-50`}
      >
        <nav className="space-y-4">
          <a href="#" className="block text-gray-300 hover:text-white transition-colors">Home</a>
          <a href="#" className="block text-gray-300 hover:text-white transition-colors">Loan Calculator</a>
          <a href="#" className="block text-gray-300 hover:text-white transition-colors">Apply Now</a>
          <a href="#" className="block text-gray-300 hover:text-white transition-colors">About Us</a>
          <a href="#" className="block text-gray-300 hover:text-white transition-colors">Contact</a>
        </nav>
      </div>

      <BottomMenu />
    </div>
  );
}

export default App;