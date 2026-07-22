import React, { useState, useEffect } from 'react';
import { Search, Bell, BookOpen, Home, Settings, Menu, User, LogOut } from 'lucide-react';
import { studentData } from '../data/mockData';
import { useStudentPhoto } from '../hooks/useStudentPhoto';

interface HeaderProps {
  onToggleSidebar?: () => void;
  onOpenProfile?: () => void;
  onGoHome?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onToggleSidebar, onOpenProfile, onGoHome }) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [customLogo, setCustomLogo] = useState<string | null>(null);
  const { photo } = useStudentPhoto();

  useEffect(() => {
    const savedLogo = localStorage.getItem('cuims_custom_logo');
    if (savedLogo) {
      setCustomLogo(savedLogo);
    }
  }, []);

  const handleProfileClick = () => {
    setIsProfileMenuOpen(false);
    if (onOpenProfile) onOpenProfile();
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40 px-4 py-2 flex items-center justify-between shadow-xs">
      {/* Left: Menu toggle + Logo */}
      <div className="flex items-center space-x-3">
        <button 
          onClick={onToggleSidebar}
          className="p-1.5 rounded-md hover:bg-gray-100 text-gray-700 transition-colors cursor-pointer"
          title="Toggle Navigation Menu"
          id="menu-toggle-btn"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* CUIMS Official Logo */}
        <div 
          onClick={onGoHome}
          className="flex items-center cursor-pointer select-none py-0.5"
          title="Chandigarh University Information Management System"
          id="cuims-brand-logo"
        >
            {customLogo ? (
              <img 
                src={customLogo} 
                alt="CUIMS Logo" 
                className="h-11 sm:h-12 w-auto max-w-[220px] object-contain" 
              />
            ) : (
              <img 
                src="/logo.png" 
                alt="CUIMS Logo" 
                className="h-11 sm:h-12 w-auto max-w-[220px] object-contain drop-shadow-sm" 
              />
            )}
          </div>
        </div>

      {/* Middle: Search bar */}
      <div className="hidden md:flex items-center flex-1 max-w-xl mx-8">
        <div className="relative w-full">
          <input 
            type="text" 
            placeholder="Search & Bookmark your page"
            className="w-full bg-[#f0f2f5] text-gray-700 text-xs py-2 pl-4 pr-10 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all border border-transparent focus:border-blue-200"
            id="global-search-input"
          />
          <Search className="w-4 h-4 text-gray-500 absolute right-3.5 top-2.5 pointer-events-none" />
        </div>
      </div>

      {/* Right: Notification, Book, Home, Settings, User Profile */}
      <div className="flex items-center space-x-3 sm:space-x-4">
        <div className="flex items-center space-x-1 sm:space-x-2 text-gray-600">
          <button className="p-1.5 rounded-full hover:bg-gray-100 relative cursor-pointer" title="Notifications" id="notifications-btn">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          <button className="p-1.5 rounded-full hover:bg-gray-100 cursor-pointer" title="E-Resources" id="resources-btn">
            <BookOpen className="w-5 h-5 text-gray-600" />
          </button>
          
          <button onClick={onGoHome} className="p-1.5 rounded-full hover:bg-gray-100 cursor-pointer" title="Home Dashboard" id="home-nav-btn">
            <Home className="w-5 h-5 text-gray-600" />
          </button>
          
          <button className="p-1.5 rounded-full hover:bg-gray-100 cursor-pointer" title="Settings" id="settings-btn">
            <Settings className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* User Capsule with Hover/Click to open Profile */}
        <div 
          className="relative group"
          onMouseEnter={() => setIsProfileMenuOpen(true)}
          onMouseLeave={() => setIsProfileMenuOpen(false)}
        >
          <div 
            onClick={handleProfileClick}
            className="flex items-center space-x-2 border-l border-gray-200 pl-3 py-1 cursor-pointer hover:opacity-90 transition-opacity"
            id="user-profile-badge"
          >
            <div className="text-right hidden sm:block">
              <div className="text-xs font-bold text-slate-800 leading-tight uppercase tracking-wide">
                {studentData.name}
              </div>
              <div className="text-[10px] font-semibold text-gray-500 leading-tight uppercase">
                {studentData.id}
              </div>
            </div>
            <div className="relative">
              <img 
                src={photo} 
                alt={studentData.name}
                className="w-9 h-9 rounded-full object-cover border border-gray-300 shadow-xs"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></span>
            </div>
          </div>

          {/* Profile Dropdown Menu (Matches Screenshot 1) */}
          {isProfileMenuOpen && (
            <div className="absolute right-0 top-full mt-1 w-44 bg-white border border-gray-200 rounded-lg shadow-lg py-1.5 z-50 text-xs text-gray-700 animate-in fade-in slide-in-from-top-1 duration-150">
              <button 
                onClick={handleProfileClick}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center space-x-2 text-slate-800 font-medium cursor-pointer"
                id="dropdown-my-profile-btn"
              >
                <User className="w-3.5 h-3.5 text-gray-500" />
                <span>My Profile</span>
              </button>
              <div className="border-t border-gray-100 my-1"></div>
              <button 
                onClick={() => alert('Logged out successfully.')}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center space-x-2 text-slate-800 font-medium cursor-pointer"
                id="dropdown-logout-btn"
              >
                <LogOut className="w-3.5 h-3.5 text-gray-500" />
                <span>Log out</span>
              </button>
            </div>
          )}
        </div>

      </div>
    </header>
  );
};
