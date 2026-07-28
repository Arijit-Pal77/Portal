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
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsProfileMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsProfileMenuOpen(false);
    }, 300);
  };

  const handleProfileClick = () => {
    setIsProfileMenuOpen(false);
    if (onOpenProfile) onOpenProfile();
  };

  return (
    <header className="bg-white border-b border-[#e5e5e5] sticky top-0 z-40 flex items-center h-[75px] shadow-sm font-sans">
      {/* Left Group: Menu, Logo, Search Bar */}
      <div className="flex items-center pl-4 h-full">
        <button 
          onClick={onToggleSidebar}
          className="p-1 rounded-md hover:bg-gray-100 text-[#333] transition-colors cursor-pointer mr-2"
          title="Toggle Navigation Menu"
          id="menu-toggle-btn"
        >
          <Menu className="w-[26px] h-[26px] stroke-[1.5]" />
        </button>

        {/* CUIMS Official Logo */}
        <div 
          onClick={onGoHome}
          className="flex items-center cursor-pointer select-none ml-2 sm:ml-2 mr-2 sm:mr-8"
          title="Chandigarh University Information Management System"
          id="cuims-brand-logo"
        >
          <img 
            id="img_logo"
            src="/logo.png" 
            alt="CUIMS Logo" 
            className="w-[90px] sm:w-[115px] h-[48px] sm:h-[60.4px] object-contain" 
          />
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center page-search w-[420px] h-[74px]">
          <div className="page-search-input relative w-full">
            <small id="s-total-search"></small>
            <input 
              type="text" 
              className="inp-box w-full bg-[#f1f1f1] text-[#333333] placeholder-[#5f7596] text-[14px] font-sans py-2.5 pl-5 pr-12 rounded-full focus:outline-none transition-all border-none"
              autoComplete="off"
              id="txtUserSearch001_PC"
              placeholder="Search & Bookmark your page"
            />
            <Search className="w-[18px] h-[18px] text-[#555555] stroke-[2.5] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Flexible Spacer */}
      <div className="flex-1"></div>

      {/* Right Group: Icons and User Profile */}
      <div className="flex items-center h-full">
        
        {/* Icons */}
        <div className="flex items-center space-x-3 sm:space-x-5 lg:space-x-7 pr-3 sm:pr-5 lg:pr-7 text-[#555]">
          <button className="cursor-pointer hover:text-blue-600 transition-colors lg:hidden" title="Search">
            <Search className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px]" strokeWidth={1.5} />
          </button>
          
          <button className="cursor-pointer hover:text-blue-600 transition-colors" title="Notifications">
            <Bell className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px]" strokeWidth={1.5} />
          </button>
          
          <button className="cursor-pointer hover:text-blue-600 transition-colors" title="E-Resources">
            <BookOpen className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px]" strokeWidth={1.5} />
          </button>
          
          <button onClick={onGoHome} className="cursor-pointer hover:text-blue-600 transition-colors" title="Home Dashboard">
            <Home className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px]" strokeWidth={1.5} />
          </button>
          
          <button className="cursor-pointer hover:text-blue-600 transition-colors" title="Settings">
            <Settings className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px]" strokeWidth={1.5} />
          </button>
        </div>
        
        {/* User Profile */}
        <div 
          className="relative group h-full flex items-center"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            onClick={handleProfileClick}
            className="flex items-center space-x-2 sm:space-x-3 sm:bg-[#f0f0f0] h-full sm:px-5 pr-4 cursor-pointer hover:bg-gray-100 sm:hover:bg-[#e8e8e8] transition-colors"
            id="user-profile-badge"
          >
            {/* User Text on the left */}
            <div className="text-left hidden sm:block">
              <div className="text-[14px] font-bold text-[#2a5699] leading-tight uppercase tracking-wide">
                {studentData.name}
              </div>
              <div className="text-[11px] font-medium text-[#666] leading-tight uppercase mt-0.5">
                {studentData.id}
              </div>
            </div>
            
            {/* Avatar on the right */}
            <div className="relative flex-shrink-0">
              <img 
                src={photo} 
                alt={studentData.name}
                className="w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] rounded-full object-cover"
              />
            </div>
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
