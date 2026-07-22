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
    <header className="bg-white border-b border-[#e5e5e5] sticky top-0 z-40 flex items-center h-[75px] shadow-sm font-['Arial',sans-serif]">
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
          className="flex items-center cursor-pointer select-none ml-2 mr-8"
          title="Chandigarh University Information Management System"
          id="cuims-brand-logo"
        >
          <img 
            id="img_logo"
            src="/logo.png" 
            alt="CUIMS Logo" 
            className="w-[115px] h-[60.4px] object-contain" 
          />
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center page-search pull-left w-[420px] h-[74px]">
          <div className="page-search-input relative w-full">
            <small id="s-total-search"></small>
            <input 
              type="text" 
              className="inp-box w-full bg-[#f1f1f1] text-[#333333] placeholder-[#5f7596] text-[14px] font-['Arial',sans-serif] py-2.5 pl-5 pr-12 rounded-full focus:outline-none transition-all border-none"
              autocomplete="off"
              id="txtUserSearch001_PC"
              placeholder="Search & Bookmark your page"
            />
            <Search className="w-[18px] h-[18px] text-[#555555] stroke-[2.5] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <img src="/loader.gif" id="menu-loading" className="hidden" alt="loading" />
            <span id="close-mob-search" className="close-s hidden">...</span>
          </div>
          <div className="NavigationSearchPC"></div>
        </div>
      </div>

      {/* Flexible Spacer */}
      <div className="flex-1"></div>

      {/* Right Group: Icons and User Profile */}
      <div className="flex items-center h-full">
        
        {/* Icons */}
        <div className="flex items-center space-x-7 pr-7 hidden md:flex">
          <div className="all-notifications flex items-center justify-between w-[65.5px] h-[22px]">
            <button className="cursor-pointer hover:text-blue-600 transition-colors" title="Notifications" id="notifications-btn">
              <Bell className="w-[22px] h-[22px] text-[#888] stroke-[2]" />
            </button>
            
            <button className="cursor-pointer hover:text-blue-600 transition-colors" title="E-Resources" id="resources-btn">
              <BookOpen className="w-[22px] h-[22px] text-[#888] stroke-[2]" />
            </button>
          </div>
          
          <button onClick={onGoHome} className="cursor-pointer hover:text-blue-600 transition-colors" title="Home Dashboard" id="home-nav-btn">
            <Home className="w-[22px] h-[22px] text-[#888] stroke-[2]" />
          </button>
          
          <button className="cursor-pointer hover:text-blue-600 transition-colors" title="Settings" id="settings-btn">
            <Settings className="w-[22px] h-[22px] text-[#888] stroke-[2]" />
          </button>
        </div>
        
        {/* User Profile */}
        <div 
          className="relative group h-full"
          onMouseEnter={() => setIsProfileMenuOpen(true)}
          onMouseLeave={() => setIsProfileMenuOpen(false)}
        >
          <div 
            onClick={handleProfileClick}
            className="flex items-center space-x-3 bg-[#f0f0f0] border-l border-[#444] h-full px-5 cursor-pointer hover:bg-[#e8e8e8] transition-colors"
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
                className="w-[42px] h-[42px] rounded-full object-cover"
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
