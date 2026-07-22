import React from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { NavTab } from '../types';

interface SidebarProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  isOpen: boolean;
  isHostelExpanded: boolean;
  onToggleHostel: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onSelectTab,
  isOpen,
  isHostelExpanded,
  onToggleHostel,
}) => {
  if (!isOpen) return null;

  const isHostelActive = activeTab === 'hostel-details' || activeTab === 'hostel-refund';

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex-shrink-0 h-full overflow-y-auto custom-scrollbar select-none text-[15px] font-medium py-2 shadow-xs transition-all font-['Open_Sans',sans-serif]">
      <nav className="flex flex-col space-y-0.5">
        
        {/* Academics */}
        <button 
          onClick={() => onSelectTab('academics')}
          className={`w-full flex items-center justify-between px-4 py-2 hover:bg-slate-100 transition-colors text-left ${activeTab === 'academics' ? 'text-[#103260] font-bold bg-blue-50/80' : 'text-[#103260]'}`}
          id="nav-academics"
        >
          <span>Academics</span>
          <ChevronRight className="w-4 h-4 text-[#103260]/60" />
        </button>

        {/* Accounts */}
        <button 
          onClick={() => onSelectTab('accounts')}
          className={`w-full flex items-center justify-between px-4 py-2 hover:bg-slate-100 transition-colors text-left ${activeTab === 'accounts' ? 'text-[#103260] font-bold bg-blue-50/80' : 'text-[#103260]'}`}
          id="nav-accounts"
        >
          <span>Accounts</span>
          <ChevronRight className="w-4 h-4 text-[#103260]/60" />
        </button>

        {/* Administration */}
        <button 
          onClick={() => onSelectTab('administration')}
          className={`w-full flex items-center justify-between px-4 py-2 hover:bg-slate-100 transition-colors text-left ${activeTab === 'administration' ? 'text-[#103260] font-bold bg-blue-50/80' : 'text-[#103260]'}`}
          id="nav-administration"
        >
          <span>Administration</span>
          <ChevronRight className="w-4 h-4 text-[#103260]/60" />
        </button>

        {/* Apply for Loan Documents */}
        <button 
          onClick={() => onSelectTab('apply-loan')}
          className={`w-full text-left px-4 py-2 hover:bg-slate-100 transition-colors ${activeTab === 'apply-loan' ? 'text-[#103260] font-bold bg-blue-50/80' : 'text-[#103260]'}`}
          id="nav-apply-loan"
        >
          Apply for Loan Documents
        </button>

        {/* Apply for NOC */}
        <button 
          onClick={() => onSelectTab('apply-noc')}
          className={`w-full text-left px-4 py-2 hover:bg-slate-100 transition-colors ${activeTab === 'apply-noc' ? 'text-[#103260] font-bold bg-blue-50/80' : 'text-[#103260]'}`}
          id="nav-apply-noc"
        >
          Apply for NOC
        </button>

        {/* CSW */}
        <button 
          onClick={() => onSelectTab('csw')}
          className={`w-full flex items-center justify-between px-4 py-2 hover:bg-slate-100 transition-colors text-left ${activeTab === 'csw' ? 'text-[#103260] font-bold bg-blue-50/80' : 'text-[#103260]'}`}
          id="nav-csw"
        >
          <span>Centre For Student Wellbeing (CSW)</span>
          <ChevronRight className="w-4 h-4 text-[#103260]/60 flex-shrink-0 ml-1" />
        </button>

        {/* Counseling Therapy Clinic Registration */}
        <button 
          onClick={() => onSelectTab('counseling')}
          className={`w-full text-left px-4 py-2 hover:bg-slate-100 transition-colors ${activeTab === 'counseling' ? 'text-[#103260] font-bold bg-blue-50/80' : 'text-[#103260]'}`}
          id="nav-counseling"
        >
          Counseling Therapy Clinic Registration
        </button>

        {/* DCPD */}
        <button 
          onClick={() => onSelectTab('dcpd')}
          className={`w-full flex items-center justify-between px-4 py-2 hover:bg-slate-100 transition-colors text-left ${activeTab === 'dcpd' ? 'text-[#103260] font-bold bg-blue-50/80' : 'text-[#103260]'}`}
          id="nav-dcpd"
        >
          <span>DCPD</span>
          <ChevronRight className="w-4 h-4 text-[#103260]/60" />
        </button>

        {/* DLL MOOC Coordinator List */}
        <button 
          onClick={() => onSelectTab('mooc')}
          className={`w-full text-left px-4 py-2 hover:bg-slate-100 transition-colors ${activeTab === 'mooc' ? 'text-[#103260] font-bold bg-blue-50/80' : 'text-[#103260]'}`}
          id="nav-mooc"
        >
          DLL MOOC Coordinator List
        </button>

        {/* E Library */}
        <button 
          onClick={() => onSelectTab('elibrary')}
          className={`w-full flex items-center justify-between px-4 py-2 hover:bg-slate-100 transition-colors text-left ${activeTab === 'elibrary' ? 'text-[#103260] font-bold bg-blue-50/80' : 'text-[#103260]'}`}
          id="nav-elibrary"
        >
          <span>E Library</span>
          <ChevronRight className="w-4 h-4 text-[#103260]/60" />
        </button>

        {/* Examination */}
        <button 
          onClick={() => onSelectTab('examination')}
          className={`w-full flex items-center justify-between px-4 py-2 hover:bg-slate-100 transition-colors text-left ${activeTab === 'examination' ? 'text-[#103260] font-bold bg-blue-50/80' : 'text-[#103260]'}`}
          id="nav-examination"
        >
          <span>Examination</span>
          <ChevronRight className="w-4 h-4 text-[#103260]/60" />
        </button>

        {/* Hostel Dropdown Header */}
        <div>
          <button 
            onClick={onToggleHostel}
            className={`w-full flex items-center justify-between px-4 py-2 transition-colors text-left ${
              isHostelActive 
                ? 'bg-[#103260] text-white font-semibold' 
                : 'hover:bg-slate-100 text-[#103260]'
            }`}
            id="nav-hostel-dropdown"
          >
            <span className="font-medium">Hostel</span>
            {isHostelExpanded ? (
              <ChevronDown className={`w-4 h-4 ${isHostelActive ? 'text-white' : 'text-[#103260]/60'}`} />
            ) : (
              <ChevronRight className={`w-4 h-4 ${isHostelActive ? 'text-white' : 'text-[#103260]/60'}`} />
            )}
          </button>

          {/* Sub-items when Hostel is expanded */}
          {isHostelExpanded && (
            <div className="bg-white py-1 space-y-1">
              <button
                onClick={() => onSelectTab('hostel-details')}
                className={`w-full text-left pl-8 pr-4 py-1.5 text-[15px] flex items-center transition-colors font-['Open_Sans',sans-serif] ${
                  activeTab === 'hostel-details' 
                    ? 'font-bold text-[#103260] bg-blue-50/80 border-l-4 border-[#103260]' 
                    : 'text-[#103260] hover:bg-slate-100 font-normal'
                }`}
                id="subnav-hostel-details"
              >
                <span className="font-bold mr-2 text-[#103260]">–</span>
                <span>Details</span>
              </button>

              <button
                onClick={() => onSelectTab('hostel-refund')}
                className={`w-full text-left pl-8 pr-4 py-1.5 text-[15px] flex items-center transition-colors font-['Open_Sans',sans-serif] ${
                  activeTab === 'hostel-refund' 
                    ? 'font-bold text-[#103260] bg-blue-50/80 border-l-4 border-[#103260]' 
                    : 'text-[#103260] hover:bg-slate-100 font-normal'
                }`}
                id="subnav-hostel-refund"
              >
                <span className="font-bold mr-2 text-[#103260]">–</span>
                <span>Hostel Refund Policy</span>
              </button>
            </div>
          )}
        </div>

        {/* International Study Opportunities */}
        <button 
          onClick={() => onSelectTab('international')}
          className={`w-full text-left px-4 py-2 hover:bg-slate-100 transition-colors ${activeTab === 'international' ? 'text-[#103260] font-bold bg-blue-50/80' : 'text-[#103260]'}`}
          id="nav-international"
        >
          International Study Opportunities
        </button>

        {/* Library */}
        <button 
          onClick={() => onSelectTab('library')}
          className={`w-full flex items-center justify-between px-4 py-2 hover:bg-slate-100 transition-colors text-left ${activeTab === 'library' ? 'text-[#103260] font-bold bg-blue-50/80' : 'text-[#103260]'}`}
          id="nav-library"
        >
          <span>Library</span>
          <ChevronRight className="w-4 h-4 text-[#103260]/60" />
        </button>

        {/* My Profile */}
        <button 
          onClick={() => onSelectTab('profile')}
          className={`w-full text-left px-4 py-2 hover:bg-slate-100 transition-colors ${activeTab === 'profile' ? 'text-[#103260] font-bold bg-blue-50/80' : 'text-[#103260]'}`}
          id="nav-profile"
        >
          My Profile
        </button>

        {/* My Research Profile */}
        <button 
          onClick={() => onSelectTab('research-profile')}
          className={`w-full text-left px-4 py-2 hover:bg-slate-100 transition-colors ${activeTab === 'research-profile' ? 'text-[#103260] font-bold bg-blue-50/80' : 'text-[#103260]'}`}
          id="nav-research-profile"
        >
          My Research Profile
        </button>

        {/* Online Test */}
        <button 
          onClick={() => onSelectTab('online-test')}
          className={`w-full text-left px-4 py-2 hover:bg-slate-100 transition-colors ${activeTab === 'online-test' ? 'text-[#103260] font-bold bg-blue-50/80' : 'text-[#103260]'}`}
          id="nav-online-test"
        >
          Online Test
        </button>

        {/* Ph.D Research & Supervision */}
        <button 
          onClick={() => onSelectTab('phd')}
          className={`w-full text-left px-4 py-2 hover:bg-slate-100 transition-colors ${activeTab === 'phd' ? 'text-[#103260] font-bold bg-blue-50/80' : 'text-[#103260]'}`}
          id="nav-phd"
        >
          Ph.D Research & Supervision
        </button>

        {/* Student Leave Application */}
        <button 
          onClick={() => onSelectTab('leave-application')}
          className={`w-full flex items-center justify-between px-4 py-2 hover:bg-slate-100 transition-colors text-left ${activeTab === 'leave-application' ? 'text-[#103260] font-bold bg-blue-50/80' : 'text-[#103260]'}`}
          id="nav-leave-application"
        >
          <span>Student Leave Application</span>
          <ChevronRight className="w-4 h-4 text-[#103260]/60" />
        </button>

        {/* Student Placement */}
        <button 
          onClick={() => onSelectTab('student-placement')}
          className={`w-full text-left px-4 py-2 hover:bg-slate-100 transition-colors ${activeTab === 'student-placement' ? 'text-[#103260] font-bold bg-blue-50/80' : 'text-[#103260]'}`}
          id="nav-student-placement"
        >
          Student Placement
        </button>

        {/* Student Relation Management System */}
        <button 
          onClick={() => onSelectTab('srms')}
          className={`w-full flex items-center justify-between px-4 py-2 hover:bg-slate-100 transition-colors text-left ${activeTab === 'srms' ? 'text-[#103260] font-bold bg-blue-50/80' : 'text-[#103260]'}`}
          id="nav-srms"
        >
          <span>Student Relation Management System</span>
          <ChevronRight className="w-4 h-4 text-[#103260]/60 flex-shrink-0 ml-1" />
        </button>

        {/* TPP UILAH */}
        <button 
          onClick={() => onSelectTab('tpp-uilah')}
          className={`w-full text-left px-4 py-2 hover:bg-slate-100 transition-colors ${activeTab === 'tpp-uilah' ? 'text-[#103260] font-bold bg-blue-50/80' : 'text-[#103260]'}`}
          id="nav-tpp-uilah"
        >
          TPP UILAH
        </button>

        {/* Transport */}
        <button 
          onClick={() => onSelectTab('transport')}
          className={`w-full flex items-center justify-between px-4 py-2 hover:bg-slate-100 transition-colors text-left ${activeTab === 'transport' ? 'text-[#103260] font-bold bg-blue-50/80' : 'text-[#103260]'}`}
          id="nav-transport"
        >
          <span>Transport</span>
          <ChevronRight className="w-4 h-4 text-[#103260]/60" />
        </button>

        {/* UCMC */}
        <button 
          onClick={() => onSelectTab('ucmc')}
          className={`w-full flex items-center justify-between px-4 py-2 hover:bg-slate-100 transition-colors text-left ${activeTab === 'ucmc' ? 'text-[#103260] font-bold bg-blue-50/80' : 'text-[#103260]'}`}
          id="nav-ucmc"
        >
          <span>UCMC</span>
          <ChevronRight className="w-4 h-4 text-[#103260]/60" />
        </button>

      </nav>
    </aside>
  );
};
