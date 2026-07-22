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
  const { photo } = useStudentPhoto();

  const handleProfileClick = () => {
    setIsProfileMenuOpen(false);
    if (onOpenProfile) onOpenProfile();
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40 px-4 py-2 flex items-center shadow-xs font-['Arial',sans-serif]">
      {/* Left Group: Menu, Logo, Search Bar */}
      <div className="flex items-center">
        <button 
          onClick={onToggleSidebar}
          className="p-1.5 rounded-md hover:bg-gray-100 text-gray-700 transition-colors cursor-pointer mr-2"
          title="Toggle Navigation Menu"
          id="menu-toggle-btn"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* CUIMS Official Logo */}
        <div 
          onClick={onGoHome}
          className="flex items-center cursor-pointer select-none py-0.5 mr-6"
          title="Chandigarh University Information Management System"
          id="cuims-brand-logo"
        >
          <img 
            src="/logo.png" 
            alt="CUIMS Logo" 
            className="h-11 sm:h-12 w-auto max-w-[220px] object-contain drop-shadow-sm" 
          />
        </div>

        {/* Search Bar - Positioned left, next to the logo */}
        <div className="hidden md:block w-[280px] lg:w-[320px]">
          <div className="relative w-full">
            <input 
              type="text" 
              placeholder="Search & Bookmark your page"
              className="w-full bg-[#f1f1f1] text-[#333333] placeholder-[#5f7596] text-[14px] font-['Arial',sans-serif] py-2.5 pl-5 pr-12 rounded-full focus:outline-none transition-all border-none"
              id="global-search-input"
            />
            <Search className="w-[18px] h-[18px] text-[#555555] stroke-[2.5] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Flexible Spacer */}
      <div className="flex-1"></div>

      {/* Right Group: Notification Bell and User Profile */}
      <div className="flex items-center space-x-3 sm:space-x-5">
        
        {/* Notification Bell */}
        <button className="p-1.5 rounded-full hover:bg-gray-100 relative cursor-pointer" title="Notifications" id="notifications-btn">
          <Bell className="w-[22px] h-[22px] text-[#555555]" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        {/* User Profile */}
        <div 
          className="relative group"
          onMouseEnter={() => setIsProfileMenuOpen(true)}
          onMouseLeave={() => setIsProfileMenuOpen(false)}
        >
          <div 
            onClick={handleProfileClick}
            className="flex items-center space-x-2.5 border-l border-gray-200 pl-4 py-1 cursor-pointer hover:bg-gray-50 transition-colors rounded-r-full pr-2"
            id="user-profile-badge"
          >
            {/* Avatar on the left */}
            <div className="relative flex-shrink-0">
              <img 
                src={photo} 
                alt={studentData.name}
                className="w-10 h-10 rounded-full object-cover shadow-xs"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
            </div>
            
            {/* User Text on the right */}
            <div className="text-left hidden sm:block">
              <div className="text-[13.5px] font-bold text-[#1f355c] leading-tight">
                {studentData.name}
              </div>
              <div className="text-[11px] font-bold text-gray-500 leading-tight">
                {studentData.id}
              </div>
            </div>
            
            {/* Dropdown Chevron */}
            <svg className="w-4 h-4 text-[#1f355c] hidden sm:block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Profile Dropdown Menu */}
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
