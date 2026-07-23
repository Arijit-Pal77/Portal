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
    <aside id="uims_sidebar" className="uims-sidebar swipe w-[260px] bg-white border-r border-gray-200 flex-shrink-0 h-full overflow-y-auto custom-scrollbar select-none text-[14px] font-normal py-2 shadow-xs transition-all font-sans">
      <div className="scroll-wrapper scroll-bar" style={{ position: 'relative' }}>
        <div className="scroll-bar scroll-content scroll-scrolly_visible" style={{ height: 'auto', marginBottom: '0px', marginRight: '0px' }}>
          <ul id="menu-content" className="menu-content flex flex-col space-y-0.5">
            
            {/* Academics */}
            <li data-toggle="collapse" className="collapsed">
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); onSelectTab('academics'); }}
                className={`w-full flex items-center justify-between px-4 py-2 transition-colors text-left group hover:bg-[#485f8b] hover:text-white ${activeTab === 'academics' ? 'text-[#001a4d] font-bold bg-blue-50/80' : 'text-[#001a4d]'}`}
                id="nav-academics"
              >
                <span>Academics</span>
                <ChevronRight className="w-4 h-4 text-[#001a4d] group-hover:text-white" />
              </a>
            </li>

            {/* Accounts */}
            <li data-toggle="collapse" className="collapsed">
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); onSelectTab('accounts'); }}
                className={`w-full flex items-center justify-between px-4 py-2 transition-colors text-left group hover:bg-[#485f8b] hover:text-white ${activeTab === 'accounts' ? 'text-[#001a4d] font-bold bg-blue-50/80' : 'text-[#001a4d]'}`}
                id="nav-accounts"
              >
                <span>Accounts</span>
                <ChevronRight className="w-4 h-4 text-[#001a4d] group-hover:text-white" />
              </a>
            </li>

            {/* Administration */}
            <li data-toggle="collapse" className="collapsed">
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); onSelectTab('administration'); }}
                className={`w-full flex items-center justify-between px-4 py-2 transition-colors text-left group hover:bg-[#485f8b] hover:text-white ${activeTab === 'administration' ? 'text-[#001a4d] font-bold bg-blue-50/80' : 'text-[#001a4d]'}`}
                id="nav-administration"
              >
                <span>Administration</span>
                <ChevronRight className="w-4 h-4 text-[#001a4d] group-hover:text-white" />
              </a>
            </li>

            {/* Apply for Loan Documents */}
            <li data-toggle="collapse" className="collapsed">
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); onSelectTab('apply-loan'); }}
                className={`block w-full text-left px-4 py-2 transition-colors group hover:bg-[#485f8b] hover:text-white ${activeTab === 'apply-loan' ? 'text-[#001a4d] font-bold bg-blue-50/80' : 'text-[#001a4d]'}`}
                id="nav-apply-loan"
              >
                Apply for Loan Documents
              </a>
            </li>

            {/* Apply for NOC */}
            <li data-toggle="collapse" className="collapsed">
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); onSelectTab('apply-noc'); }}
                className={`block w-full text-left px-4 py-2 transition-colors group hover:bg-[#485f8b] hover:text-white ${activeTab === 'apply-noc' ? 'text-[#001a4d] font-bold bg-blue-50/80' : 'text-[#001a4d]'}`}
                id="nav-apply-noc"
              >
                Apply for NOC
              </a>
            </li>

            {/* CSW */}
            <li data-toggle="collapse" className="collapsed">
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); onSelectTab('csw'); }}
                className={`w-full flex items-center justify-between px-4 py-2 transition-colors text-left group hover:bg-[#485f8b] hover:text-white ${activeTab === 'csw' ? 'text-[#001a4d] font-bold bg-blue-50/80' : 'text-[#001a4d]'}`}
                id="nav-csw"
              >
                <span>Centre For Student Wellbeing (CSW)</span>
                <ChevronRight className="w-4 h-4 text-[#001a4d] group-hover:text-white flex-shrink-0 ml-1" />
              </a>
            </li>

            {/* Counseling Therapy Clinic Registration */}
            <li data-toggle="collapse" className="collapsed">
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); onSelectTab('counseling'); }}
                className={`block w-full text-left px-4 py-2 transition-colors group hover:bg-[#485f8b] hover:text-white ${activeTab === 'counseling' ? 'text-[#001a4d] font-bold bg-blue-50/80' : 'text-[#001a4d]'}`}
                id="nav-counseling"
              >
                Counseling Therapy Clinic Registration
              </a>
            </li>

            {/* DCPD */}
            <li data-toggle="collapse" className="collapsed">
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); onSelectTab('dcpd'); }}
                className={`w-full flex items-center justify-between px-4 py-2 transition-colors text-left group hover:bg-[#485f8b] hover:text-white ${activeTab === 'dcpd' ? 'text-[#001a4d] font-bold bg-blue-50/80' : 'text-[#001a4d]'}`}
                id="nav-dcpd"
              >
                <span>DCPD</span>
                <ChevronRight className="w-4 h-4 text-[#001a4d] group-hover:text-white" />
              </a>
            </li>

            {/* DLL MOOC Coordinator List */}
            <li data-toggle="collapse" className="collapsed">
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); onSelectTab('mooc'); }}
                className={`block w-full text-left px-4 py-2 transition-colors group hover:bg-[#485f8b] hover:text-white ${activeTab === 'mooc' ? 'text-[#001a4d] font-bold bg-blue-50/80' : 'text-[#001a4d]'}`}
                id="nav-mooc"
              >
                DLL MOOC Coordinator List
              </a>
            </li>

            {/* E Library */}
            <li data-toggle="collapse" className="collapsed">
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); onSelectTab('elibrary'); }}
                className={`w-full flex items-center justify-between px-4 py-2 transition-colors text-left group hover:bg-[#485f8b] hover:text-white ${activeTab === 'elibrary' ? 'text-[#001a4d] font-bold bg-blue-50/80' : 'text-[#001a4d]'}`}
                id="nav-elibrary"
              >
                <span>E Library</span>
                <ChevronRight className="w-4 h-4 text-[#001a4d] group-hover:text-white" />
              </a>
            </li>

            {/* Examination */}
            <li data-toggle="collapse" className="collapsed">
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); onSelectTab('examination'); }}
                className={`w-full flex items-center justify-between px-4 py-2 transition-colors text-left group hover:bg-[#485f8b] hover:text-white ${activeTab === 'examination' ? 'text-[#001a4d] font-bold bg-blue-50/80' : 'text-[#001a4d]'}`}
                id="nav-examination"
              >
                <span>Examination</span>
                <ChevronRight className="w-4 h-4 text-[#001a4d] group-hover:text-white" />
              </a>
            </li>

            {/* Hostel Dropdown Header */}
            <li data-toggle="collapse" data-target="#hostel-sub-menu" className="collapsed">
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); onToggleHostel(); }}
                className={`w-full flex items-center justify-between px-4 py-2 transition-colors text-left group hover:bg-[#485f8b] hover:text-white ${
                  isHostelActive 
                    ? 'bg-[#103260] text-white font-semibold' 
                    : 'text-[#001a4d]'
                }`}
                id="nav-hostel-dropdown"
              >
                <span className="font-medium">Hostel</span>
                {isHostelExpanded ? (
                  <ChevronDown className={`w-4 h-4 ${isHostelActive ? 'text-white' : 'text-[#001a4d] group-hover:text-white'}`} />
                ) : (
                  <ChevronRight className={`w-4 h-4 ${isHostelActive ? 'text-white' : 'text-[#001a4d] group-hover:text-white'}`} />
                )}
              </a>

              {/* Sub-items when Hostel is expanded */}
              {isHostelExpanded && (
                <ul id="hostel-sub-menu" className="sub-menu bg-white py-1 space-y-1">
                  <li>
                    <a
                      href="#"
                      onClick={(e) => { e.preventDefault(); onSelectTab('hostel-details'); }}
                      className={`block w-full text-left pl-8 pr-4 py-1.5 text-[14px] flex items-center transition-colors font-sans group hover:bg-[#485f8b] hover:text-white ${
                        activeTab === 'hostel-details' 
                          ? 'font-bold text-[#001a4d] bg-blue-50/80 border-l-4 border-[#103260]' 
                          : 'text-[#001a4d] font-normal'
                      }`}
                      id="subnav-hostel-details"
                    >
                      <span className="font-bold mr-2 text-[#001a4d] group-hover:text-white">–</span>
                      <span>Details</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      onClick={(e) => { e.preventDefault(); onSelectTab('hostel-refund'); }}
                      className={`block w-full text-left pl-8 pr-4 py-1.5 text-[14px] flex items-center transition-colors font-sans group hover:bg-[#485f8b] hover:text-white ${
                        activeTab === 'hostel-refund' 
                          ? 'font-bold text-[#001a4d] bg-blue-50/80 border-l-4 border-[#103260]' 
                          : 'text-[#001a4d] font-normal'
                      }`}
                      id="subnav-hostel-refund"
                    >
                      <span className="font-bold mr-2 text-[#001a4d] group-hover:text-white">–</span>
                      <span>Hostel Refund Policy</span>
                    </a>
                  </li>
                </ul>
              )}
            </li>

            {/* International Study Opportunities */}
            <li data-toggle="collapse" className="collapsed">
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); onSelectTab('international'); }}
                className={`block w-full text-left px-4 py-2 transition-colors group hover:bg-[#485f8b] hover:text-white ${activeTab === 'international' ? 'text-[#001a4d] font-bold bg-blue-50/80' : 'text-[#001a4d]'}`}
                id="nav-international"
              >
                International Study Opportunities
              </a>
            </li>

            {/* Library */}
            <li data-toggle="collapse" className="collapsed">
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); onSelectTab('library'); }}
                className={`w-full flex items-center justify-between px-4 py-2 transition-colors text-left group hover:bg-[#485f8b] hover:text-white ${activeTab === 'library' ? 'text-[#001a4d] font-bold bg-blue-50/80' : 'text-[#001a4d]'}`}
                id="nav-library"
              >
                <span>Library</span>
                <ChevronRight className="w-4 h-4 text-[#001a4d] group-hover:text-white" />
              </a>
            </li>

            {/* My Profile */}
            <li data-toggle="collapse" className="collapsed">
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); onSelectTab('profile'); }}
                className={`block w-full text-left px-4 py-2 transition-colors group hover:bg-[#485f8b] hover:text-white ${activeTab === 'profile' ? 'text-[#001a4d] font-bold bg-blue-50/80' : 'text-[#001a4d]'}`}
                id="nav-profile"
              >
                My Profile
              </a>
            </li>

            {/* My Research Profile */}
            <li data-toggle="collapse" className="collapsed">
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); onSelectTab('research-profile'); }}
                className={`block w-full text-left px-4 py-2 transition-colors group hover:bg-[#485f8b] hover:text-white ${activeTab === 'research-profile' ? 'text-[#001a4d] font-bold bg-blue-50/80' : 'text-[#001a4d]'}`}
                id="nav-research-profile"
              >
                My Research Profile
              </a>
            </li>

            {/* Online Test */}
            <li data-toggle="collapse" className="collapsed">
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); onSelectTab('online-test'); }}
                className={`block w-full text-left px-4 py-2 transition-colors group hover:bg-[#485f8b] hover:text-white ${activeTab === 'online-test' ? 'text-[#001a4d] font-bold bg-blue-50/80' : 'text-[#001a4d]'}`}
                id="nav-online-test"
              >
                Online Test
              </a>
            </li>

            {/* Ph.D Research & Supervision */}
            <li data-toggle="collapse" className="collapsed">
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); onSelectTab('phd'); }}
                className={`block w-full text-left px-4 py-2 transition-colors group hover:bg-[#485f8b] hover:text-white ${activeTab === 'phd' ? 'text-[#001a4d] font-bold bg-blue-50/80' : 'text-[#001a4d]'}`}
                id="nav-phd"
              >
                Ph.D Research & Supervision
              </a>
            </li>

            {/* Student Leave Application */}
            <li data-toggle="collapse" className="collapsed">
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); onSelectTab('leave-application'); }}
                className={`w-full flex items-center justify-between px-4 py-2 transition-colors text-left group hover:bg-[#485f8b] hover:text-white ${activeTab === 'leave-application' ? 'text-[#001a4d] font-bold bg-blue-50/80' : 'text-[#001a4d]'}`}
                id="nav-leave-application"
              >
                <span>Student Leave Application</span>
                <ChevronRight className="w-4 h-4 text-[#001a4d] group-hover:text-white" />
              </a>
            </li>

            {/* Student Placement */}
            <li data-toggle="collapse" className="collapsed">
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); onSelectTab('student-placement'); }}
                className={`block w-full text-left px-4 py-2 transition-colors group hover:bg-[#485f8b] hover:text-white ${activeTab === 'student-placement' ? 'text-[#001a4d] font-bold bg-blue-50/80' : 'text-[#001a4d]'}`}
                id="nav-student-placement"
              >
                Student Placement
              </a>
            </li>

            {/* Student Relation Management System */}
            <li data-toggle="collapse" className="collapsed">
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); onSelectTab('srms'); }}
                className={`w-full flex items-center justify-between px-4 py-2 transition-colors text-left group hover:bg-[#485f8b] hover:text-white ${activeTab === 'srms' ? 'text-[#001a4d] font-bold bg-blue-50/80' : 'text-[#001a4d]'}`}
                id="nav-srms"
              >
                <span>Student Relation Management System</span>
                <ChevronRight className="w-4 h-4 text-[#001a4d] group-hover:text-white flex-shrink-0 ml-1" />
              </a>
            </li>

            {/* TPP UILAH */}
            <li data-toggle="collapse" className="collapsed">
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); onSelectTab('tpp-uilah'); }}
                className={`block w-full text-left px-4 py-2 transition-colors group hover:bg-[#485f8b] hover:text-white ${activeTab === 'tpp-uilah' ? 'text-[#001a4d] font-bold bg-blue-50/80' : 'text-[#001a4d]'}`}
                id="nav-tpp-uilah"
              >
                TPP UILAH
              </a>
            </li>

            {/* Transport */}
            <li data-toggle="collapse" className="collapsed">
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); onSelectTab('transport'); }}
                className={`w-full flex items-center justify-between px-4 py-2 transition-colors text-left group hover:bg-[#485f8b] hover:text-white ${activeTab === 'transport' ? 'text-[#001a4d] font-bold bg-blue-50/80' : 'text-[#001a4d]'}`}
                id="nav-transport"
              >
                <span>Transport</span>
                <ChevronRight className="w-4 h-4 text-[#001a4d] group-hover:text-white" />
              </a>
            </li>

            {/* UCMC */}
            <li data-toggle="collapse" className="collapsed">
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); onSelectTab('ucmc'); }}
                className={`w-full flex items-center justify-between px-4 py-2 transition-colors text-left group hover:bg-[#485f8b] hover:text-white ${activeTab === 'ucmc' ? 'text-[#001a4d] font-bold bg-blue-50/80' : 'text-[#001a4d]'}`}
                id="nav-ucmc"
              >
                <span>UCMC</span>
                <ChevronRight className="w-4 h-4 text-[#001a4d] group-hover:text-white" />
              </a>
            </li>

          </ul>
        </div>
      </div>
    </aside>
  );
};
